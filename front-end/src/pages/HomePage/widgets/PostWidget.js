import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import logo from "../../../img/profile-2.png";
import send from "../../../img/send.png";
import like from "../../../img/like.png";
import like_2 from "../../../img/like_re.png";
import comment from "../../../img/comment.png";
import styled from "styled-components";
import { fontSize } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";

const PostWidget = ({
  postId,
  firstName,
  lastName,
  picturePath,
  description,
  likes,
  createdAt,
  comments,
  userPicturePath,
}) => {
  const user = useSelector((state) => state.user);
  const [isLiked, setIsLiked] = useState(likes[user._id]);
  const [numberOfLikes, setNumberOfLikes] = useState(Object.keys(likes).length);

  const [newComment, setNewComment] = useState("");
  const [allComments, setAllComments] = useState(comments);
  const [showComments, setShowComments] = useState(false);

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/${postId}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id }),
    });
    const updatedPost = await response.json();

    if (updatedPost.likes[user._id]) {
      setNumberOfLikes(numberOfLikes - 1);
      setIsLiked(false);
    } else {
      setNumberOfLikes(numberOfLikes + 1);
      setIsLiked(true);
    }
  };

  const addComment = async () => {
    const response = await fetch(`http://localhost:3001/${postId}/comment`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, comment: newComment }),
    });

    const commentObj = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      picturePath: user.userPicturePath,
      comment: newComment,
    };
    // allComments.push(commentObj)

    setAllComments((oldComments) => [...oldComments, commentObj]);
    setShowComments(true);
    const updatedPost = await response.json();
  };

  return (
    <Box
      sx={{
        margin: "30px auto 0 auto",
        width: "600px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
      }}>
      <Grid
        container
        direction="row"
        alignItems="center"
        margin="20px auto 20px 20px">
        <Avatar
          overlap="circular"
          src={`http://localhost:3001/static/${userPicturePath}`}
          sx={{ width: 50, height: 50 }}
        />
        <Box>
          <p style={{ marginLeft: "14px" }}>
            {firstName} {lastName}
          </p>
          <p style={{ marginLeft: "14px", color: "grey", fontSize: "12px" }}>
            {createdAt}
          </p>
        </Box>
      </Grid>
      <p style={{ marginLeft: "20px" }}>{description}</p>
      <img
        src={`http://localhost:3001/static/${picturePath}`}
        alt=""
        style={{ maxHeight: "600px", width: "auto", objectFit: "contain" }}
      />
      <Grid
        container
        direction="row"
        width="90%"
        margin="20px auto"
        justifyContent="space-between">
        <div style={{ display: "flex" }}>
          <img
            src={like_2}
            alt="like"
            style={{ width: "22px", height: "22px" }}
          />
          <p>{numberOfLikes}</p>
        </div>

        <p onClick={() => setShowComments(!showComments)}>
          {allComments.length} Comments
        </p>
      </Grid>
      <Grid
        container
        direction="row">
        <IconButton
          onClick={patchLike}
          sx={{
            borderRadius: "0px",
            width: "50%",
            color: isLiked ? "blue" : "black",
            fontSize: "16px",
            ":hover": { backgroundColor: "#BAC0C6" },
          }}>
          <img
            src={like}
            alt="like"
            style={{ width: "30px" }}
          />
          <p style={{ marginLeft: "20px" }}>Like this!</p>
        </IconButton>
        <IconButton
          onClick={() => setShowComments(!showComments)}
          sx={{
            borderRadius: "0px",
            width: "50%",
            color: "black",
            fontSize: "16px",
            ":hover": { backgroundColor: "#BAC0C6" },
          }}>
          <img
            src={comment}
            alt="comment"
            style={{ width: "30px" }}
          />
          <p style={{ marginLeft: "20px" }}>Comment</p>
        </IconButton>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        margin="20px auto 20px auto">
        <Avatar
          overlap="circular"
          src={`http://localhost:3001/static/${userPicturePath}`}
          sx={{ width: 40, height: 40 }}
        />

        <TextField
          id="outlined-basic"
          label="Write a comment..."
          variant="outlined"
          size="small"
          InputProps={{
            endAdornment: (
              <IconButton onClick={addComment}>
                <img
                  src={send}
                  alt="like"
                  style={{ width: "30px" }}
                />
              </IconButton>
            ),
          }}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
          sx={{ width: "88%" }}
        />
      </Grid>

      {allComments.lenght == 0 ? (
        <div>TEST</div>
      ) : (
        allComments
          .slice(0)
          .reverse()
          .map((comment) => {
            return (
              <Grid
                key={Math.random()}
                container
                direction="row"
                display={showComments ? "" : "none"}
                // alignItems="center"
                margin="20px auto 20px 20px">
                <Avatar
                  overlap="circular"
                  src={comment.picturePath}
                  sx={{ width: 50, height: 50 }}
                />
                <Box
                  sx={{
                    maxWidth: "80%",
                    padding: "0 10px",
                    marginLeft: "10px",
                    backgroundColor: "#BAC0C6",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "10px",
                  }}>
                  <p style={{ fontSize: "12px" }}>
                    {comment.firstName} {comment.lastName}
                  </p>
                  <p style={{ fontSize: "14px" }}>{comment.comment}</p>
                </Box>
              </Grid>
            );
          })
      )}
    </Box>
  );
};

export default PostWidget;
