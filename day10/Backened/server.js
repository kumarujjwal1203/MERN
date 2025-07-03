import express from "express";
import cors from "cors";
const app = express();
app.use(cors());
app.listen(3001, function () {
  console.log("Server is running on port 3001");
});

//app.method(path,handler)

app.get("/getMessage", async function (req, res) {
  res.json({ message: "hello world" });
});
