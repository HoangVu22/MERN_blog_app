import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      require: true,
      default: "Hoàng Vũ",
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    attachment: String,
  },
  { timestamps: true } //tự động thêm createdAt và updatedAt
);

export const postModel = mongoose.model("post", schema);
