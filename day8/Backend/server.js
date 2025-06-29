const express = require("express"); //importing express package
const app = express(); //creating express instance
//create server
const { MongoClient } = require("mongodb"); //importing MongoDB package
const dotenv = require("dotenv");
const cors = require("cors");
app.use(cors());
dotenv.config(); //loading environment variables from .env file

let db;
async function connectDB() {
  try {
    const url = process.env.MONGODB_URL; //getting MongoDB URI from .env file
    const client = await MongoClient.connect(url); //connecting to MongoDB
    db = client.db("products");
  } catch (error) {
    console.log(error);
  }
}
connectDB(); //connecting to MongoDB

//get api -- get request
app.get("/", function (req, res) {
  res.json("welcome to my server");
});

app.listen(3001, function () {
  console.log("http://localhost:3001/");
});
