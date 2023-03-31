import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import styled from "styled-components";
import { useDropzone } from "react-dropzone";

//Widgets

import Navbar from "../StaticWidgets/Navbar";
import CreatePostWidget from "./widgets/CreatePostWidget.js";
import PostWidget from "./widgets/PostWidget";
import PostsWidget from "./widgets/PostsWidgets";

const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  return (
    <Box>
      <Navbar />
      <CreatePostWidget />
      <PostsWidget />
    </Box>
  );
};

export default HomePage;
