import mongoose from "mongoose";
export default async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/To_do");

    console.log("Connected to the database");
  } catch (err) {
    console.log(err);
  }
}
