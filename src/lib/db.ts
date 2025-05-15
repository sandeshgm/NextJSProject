import mongoose from "mongoose";

export const connectDB = () => {
  return mongoose.connect("mongodb://localhost:27017/my-blog");
};