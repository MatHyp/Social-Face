import Post from "../models/Posts.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { id, picturePath } = req.body;
    const newPost = new Post({
      id,
      picturePath,
    });

    const post = await newPost.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};
