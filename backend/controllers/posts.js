import Post from "../models/Posts.js";
import User from "../models/User.js";

/* CREATE */
export const createPost = async (req, res) => {
  try {
    const { id, picturePath, description } = req.body;

    const user = await User.findById(id);

    const newPost = new Post({
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      description,
      picturePath,
      likes: {},
      comments: [],
    });

    const post = await newPost.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getFeedPosts = async (req, res) => {
  try {
    const post = await Post.find();
    res.status(200).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
