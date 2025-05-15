import mongoose from "mongoose";

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    content: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
