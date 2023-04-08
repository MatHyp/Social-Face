// import mongoose from "mongoose";

// const UserSchema = new mongoose.schema(
//   {
//     firstName: {
//       type: String,
//       // required: true,
//       min: 2,
//       max: 50,
//     },
//     lastName: {
//       type: String,
//       // required: true,
//       min: 2,
//       max: 50,
//     },
//     username: {
//       type: String,
//       // required: true,
//       min: 2,
//       max: 50,
//       // unique: true,
//     },
//     password: {
//       type: String,
//       // required: true,
//       min: 2,
//     },
//     picturePath: {
//       type: String,
//       default: "",
//     },
//     friends: {
//       type: Array,
//       default: [],
//     },
//     viewedProfile: Number,
//     reactions: Number,
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", UserSchema);
// export default User;

import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    lastName: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    username: {
      type: String,
      required: true,
      min: 2,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 2,
    },
    picturePath: {
      type: String,
      default: "default.png",
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;
