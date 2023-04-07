import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import styled from "styled-components";
import { useDropzone } from "react-dropzone";

//Widgets

import Navbar from "../StaticWidgets/Navbar";
import CreatePostWidget from "./widgets/CreatePostWidget.js";
import LeftBar from "./widgets/LeftBar.js";
import PostsWidget from "./widgets/PostsWidgets";

const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          width: "84%",
          margin: "0 auto",
        }}>
        <LeftBar style={{ position: "fixed", backgroundColor: "red" }} />
        <Box>
          <CreatePostWidget />
          <PostsWidget />
        </Box>
        <LeftBar />
      </Box>
    </Box>
  );
};

export default HomePage;
