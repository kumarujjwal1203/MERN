// index.js (backend)
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

// ✅ ENABLE CORS FOR ALL ROUTES
app.use(cors());

// ✅ PARSE JSON BODY
app.use(express.json());

// ✅ CONNECT DATABASE
connectDB();

// ✅ ROUTES
app.use("/", userRoutes);

// ✅ START SERVER
app.listen(3002, () => {
  console.log("Server running on http://localhost:3002");
});
