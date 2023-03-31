import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import logo from "../../../img/profile-2.png";
import logo2 from "../../../img/szop.png";
import like from "../../../img/like.png";
import comment from "../../../img/comment.png";
import styled from "styled-components";
import { fontSize } from "@mui/system";
import { IconButton, Typography } from "@mui/material";
// import DeleteIcon from "@mui/icons-material/Delete";

const PostWidget = ({
  postId,
  firstName,
  lastName,
  picturePath,
  description,
  createdAt,
}) => {
  const userToken = useSelector((state) => state.token);
  console.log(postId);
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
          src={logo}
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
        direction="row">
        <IconButton
          sx={{
            borderRadius: "0px",
            width: "50%",
            color: "black",

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
    </Box>
  );
};

export default PostWidget;
