import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setPost } from "../../../state";

import send from "../../../img/send.png";
import like from "../../../img/like.png";
import like_2 from "../../../img/like_re.png";
import comment from "../../../img/comment.png";
import { IconButton, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";

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
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();

  const [newComment, setNewComment] = useState("");
  const [showComments, setShowComments] = useState(false);

  const [isLiked, setIsLiked] = useState();
  const [likeCount, setLikeCount] = useState();

  const patchLike = async () => {
    const response = await fetch(`http://localhost:3001/${postId}/like`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id }),
    });
    const updatedPost = await response.json();

    dispatch(setPost({ post: updatedPost }));

    if (isLiked != true) {
      setIsLiked(true);
      setLikeCount(likeCount + 1);
    } else {
      setIsLiked(false);
      setLikeCount(likeCount - 1);
    }
  };

  useEffect(() => {
    setIsLiked(likes[user._id]);
    setLikeCount(Object.keys(likes).length);
  }, []);

  const addComment = async () => {
    const response = await fetch(`http://localhost:3001/${postId}/comment`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId: user._id, comment: newComment }),
    });

    const updatedPost = await response.json();

    dispatch(setPost({ post: updatedPost }));
    setShowComments(true);
  };

  return (
    <Box
      sx={{
        margin: "30px auto 0 auto",
        width: isNonMobileScreens ? "30vw" : "80vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "#fff",
        borderRadius: "14px",
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
          <p>{likeCount}</p>
        </div>

        <p onClick={() => setShowComments(!showComments)}>
          {comments.length} Comments
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
            fontSize: "16px",
            ":hover": { backgroundColor: "#BAC0C6" },
          }}>
          <img
            src={like}
            alt="like"
            style={{ width: "30px" }}
          />
          <p
            style={{
              marginLeft: "20px",
              color: isLiked ? "blue" : "black",
            }}>
            Like this!
          </p>
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

      {comments
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
        })}
    </Box>
  );
};

export default PostWidget;
