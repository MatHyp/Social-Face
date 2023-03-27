import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    picturePath: String,
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);

export default Post;
