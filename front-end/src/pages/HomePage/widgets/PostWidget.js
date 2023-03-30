import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import logo from "../../../img/profile-2.png";
import logo2 from "../../../img/szop.png";
import like from "../../../img/like.png";
import comment from "../../../img/comment.png";
import styled from "styled-components";
import { fontSize } from "@mui/system";

const PostWidget = () => {
  const userToken = useSelector((state) => state.token);

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
        // justifyContent="space-around"
        alignItems="center"
        margin="20px auto 20px 20px">
        <Avatar
          overlap="circular"
          src={logo}
          sx={{ width: 50, height: 50 }}
        />
        <Box>
          <p style={{ marginLeft: "14px" }}>Jan Kowalski</p>
          <p style={{ marginLeft: "14px", color: "grey", fontSize: "12px" }}>
            2 july 2023
          </p>
        </Box>
      </Grid>
      <p style={{ marginLeft: "20px" }}>Super jest dzisiaj dzien</p>
      <img
        src={logo2}
        alt=""
        style={{ maxHeight: "600px", width: "auto", objectFit: "contain" }}
      />
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        margin="20px auto 20px 0px">
        <Grid
          container
          direction="row"
          width="20%"
          alignItems="center"
          justifyContent="space-around">
          <img
            src={like}
            alt="like"
            style={{ width: "30px" }}
          />
          <p>Like this!</p>
        </Grid>
        <Grid
          container
          direction="row"
          width="20%"
          alignItems="center"
          justifyContent="space-around">
          <img
            src={comment}
            alt="comment"
            style={{ width: "30px" }}
          />
          <p>Comment</p>
        </Grid>
      </Grid>
    </Box>
  );
};

export default PostWidget;
