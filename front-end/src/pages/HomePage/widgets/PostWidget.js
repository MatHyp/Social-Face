import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import logo from "../../../img/profile-2.png";
import logo2 from "../../../img/szop.png";
import like from "../../../img/like.png";
import like_2 from "../../../img/like_re.png";
import comment from "../../../img/comment.png";
import styled from "styled-components";
import { fontSize } from "@mui/system";
import { IconButton, Typography } from "@mui/material";

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
          <p>10</p>
        </div>
        <p>10 Comments</p>
      </Grid>
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
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        margin="20px auto 20px auto">
        <Avatar
          overlap="circular"
          src={logo}
          sx={{ width: 40, height: 40 }}
        />

        <TextField
          id="outlined-basic"
          label="Write a comment..."
          variant="outlined"
          size="small"
          sx={{ width: "88%" }}
        />
      </Grid>
      <Grid
        container
        direction="row"
        // alignItems="center"
        margin="20px auto 20px 20px">
        <Avatar
          overlap="circular"
          src={logo}
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
          <p style={{ fontSize: "12px" }}>Jan kowalski</p>
          <p style={{ fontSize: "14px" }}>S WTF</p>
        </Box>
      </Grid>
    </Box>
  );
};

export default PostWidget;
