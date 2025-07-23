//Create a server
const express = require("express");

import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());
// Create array of objects
let obj = [{ name: "Ujjwal" }, { name: "Shivam" }, { name: "Raj" }];

//create get api,put,post,push
app.get("/", (req, res) => {
  res.json(obj);
});

app.post("/add", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  obj.push({ name });
  res.json({ message: "Added successfully", data: obj });
});

app.put("/update/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const { name } = req.body;

  if (isNaN(index) || index < 0 || index >= obj.length) {
    return res.status(404).json({ error: "Invalid index" });
  }

  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }

  obj[index].name = name;
  res.json({ message: "Updated successfully", data: obj });
});
app.delete("/delete/:index", (req, res) => {
  const index = parseInt(req.params.index);

  if (isNaN(index) || index < 0 || index >= obj.length) {
    return res.status(404).json({ error: "Invalid index" });
  }

  const deleted = obj.splice(index, 1);
  res.json({ message: "Deleted successfully", deleted, data: obj });
});

// Start the server on port 3001
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
