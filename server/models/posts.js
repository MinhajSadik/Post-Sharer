import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: String,
  content: String,
  date: String,
});

const PostMessage = mongoose.model("Posts", postSchema);

export default PostMessage;
