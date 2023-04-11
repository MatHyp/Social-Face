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
      userPicturePath: user.picturePath,
      description,
      picturePath,
      likes: {},
      comments: [],
    });

    const post = await newPost.save();
    console.log(post);
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

export const getFeedUserPosts = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.find();

    res.status(200).json(post.filter((post) => post.id === id));
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    // console.log(id);

    const post = await Post.findById(id);

    const isLiked = post.likes.get(userId);
    console.log(isLiked);

    if (isLiked) {
      post.likes.delete(userId);
    } else {
      post.likes.set(userId, true);
    }

    const updatedPost = await Post.findByIdAndUpdate(id, { likes: post.likes });

    res.status(200).json(updatedPost);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, comment } = req.body;

    const user = await User.findById(userId);
    const post = await Post.findById(id);

    const commentObj = {
      id: userId,
      firstName: user.firstName,
      lastName: user.lastName,
      picturePath: user.picturePath,
      comment: comment,
    };

    post.comments.push(commentObj);
    await post.save();

    res.status(201).json(post);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
