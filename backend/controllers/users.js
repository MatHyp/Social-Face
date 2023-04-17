import User from "../models/User.js";

/* READ */
export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json(user);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const followUser = async (req, res) => {
  try {
    const { userId, userToFollowId } = req.body;

    const userWhoFollow = await User.findById(userId);
    const userToFollow = await User.findById(userToFollowId);

    const isFollowed = userWhoFollow.userFollows.get(userToFollowId);

    if (isFollowed) {
      userWhoFollow.userFollows.delete(userToFollowId);
      userToFollow.userFollowers.delete(userId);
    } else {
      userWhoFollow.userFollows.set(userToFollowId, true);
      userToFollow.userFollowers.set(userId, true);
    }

    const updateUserWhoFollow = await User.findByIdAndUpdate(userWhoFollow, {
      userFollows: userWhoFollow.userFollows,
      // userFollows: {},
    });
    const updateUserToFollow = await User.findByIdAndUpdate(userToFollow, {
      userFollowers: userToFollow.userFollowers,
      // userFollowers: {},
    });

    res.status(200).json(updateUserWhoFollow);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};
