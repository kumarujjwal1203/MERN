const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs"); // note: you're using bcryptjs not bcrypt
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Server start
app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));

// ✅ User schema & model
const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});
const User = mongoose.model("User", userSchema);

// ✅ Todo schema & model
const todoSchema = new mongoose.Schema({
  task: String,
  userId: mongoose.Schema.Types.ObjectId,
  completed: Boolean,
});
const Todo = mongoose.model("Todo", todoSchema);

// ✅ Feedback schema & model (optional)
const feedbackSchema = new mongoose.Schema({
  name: String,
  feedbackType: String,
  rating: String,
  message: String,
});
const Feedback = mongoose.model("Feedback", feedbackSchema);

///////////////////////////////////////////////////////////////////////////////
// ========================== 🧑‍💻 AUTH ROUTES ================================
///////////////////////////////////////////////////////////////////////////////

// ✅ Register
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;
  const existing = await User.findOne({ email });
  if (existing) return res.json({ message: "User already exists" });

  const hashed = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashed });
  await user.save();
  res.json({ message: "User registered successfully" });
});

// ✅ Login
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.json({ message: "Invalid password" });

  const token = jwt.sign({ userId: user._id }, "secret_key");
  res.json({ token, userId: user._id, username: user.username });
});

///////////////////////////////////////////////////////////////////////////////
// =========================== ✅ TODO ROUTES ================================
///////////////////////////////////////////////////////////////////////////////

// Get all todos for a user
app.get("/todos/:userId", async (req, res) => {
  const { userId } = req.params;
  const todos = await Todo.find({ userId });
  res.json(todos);
});

// Add a new todo
app.post("/todos", async (req, res) => {
  const { task, userId } = req.body;
  const todo = new Todo({ task, userId, completed: false });
  const result = await todo.save();
  res.json(result);
});

// Update todo (edit task or toggle completion)
app.put("/todos/:id", async (req, res) => {
  const { task, completed } = req.body;
  const updated = await Todo.findByIdAndUpdate(
    req.params.id,
    { task, completed },
    { new: true }
  );
  res.json(updated);
});

// Delete todo
app.delete("/todos/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

///////////////////////////////////////////////////////////////////////////////
// ======================= 📩 FEEDBACK ROUTES (Optional) =====================
///////////////////////////////////////////////////////////////////////////////

app.post("/feedback", async (req, res) => {
  const { name, feedbackType, rating, message } = req.body;
  const feedback = new Feedback({ name, feedbackType, rating, message });
  const result = await feedback.save();
  res.json(result);
});

app.get("/feedbacks", async (req, res) => {
  const all = await Feedback.find({});
  res.json(all);
});
