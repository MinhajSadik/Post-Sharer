import { mongoose } from "mongoose";
import PostMessage from "../models/posts.js";

export const getPost = async (req, res) => {
  try {
    const post = await PostMessage.find({});
    console.log(post);
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  const { title, content, date } = req.body;

  const newPostMessage = new PostMessage({
    title,
    content,
    date,
  });

  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = await PostMessage.findOneAndUpdate(id, post, {
    new: true,
  });
  res.json(updatedPost);
};
