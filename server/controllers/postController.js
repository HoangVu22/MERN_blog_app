import { postModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await postModel.find(); //lấy ra tất cả các bài posts (find)
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body; //lấy dl từ phía client gửi lên
    const post = new postModel(newPost); //lưu dl này vào db
    await post.save();
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;
    const post = await postModel.findOneAndUpdate(
      // mặc định method này trả về 1 obj chưa cập nhật
      { _id: updatePost._id }, // đk: id của nó chính bằng id của post gửi lên từ client
      updatePost, // tham số thứ 2 là dl mà chúng ta muốn cập nhật
      { new: true } // nếu muốn lấy dl mới sau khi update thì thêm new: true
    );
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
