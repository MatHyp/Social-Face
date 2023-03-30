import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import styled from "styled-components";
import MyPostWidget from "./widgets/MyPostWidget";
import { useDropzone } from "react-dropzone";

import Navbar from "../StaticWidgets/Navbar";
import PostWidget from "./widgets/PostWidget";
const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  const getPosts = async () => {
    const savedUserResponse = await fetch("http://localhost:3001/post", {
      method: "GET",
    });
    const savedUser = await savedUserResponse.json();

    console.log(savedUser);
  };
  getPosts();
  return (
    <Box>
      <Navbar />
      <MyPostWidget />
      <PostWidget />
      <PostWidget />
      <PostWidget />
    </Box>
  );
};

export default HomePage;
