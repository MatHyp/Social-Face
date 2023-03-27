import { useSelector } from "react-redux";
import styled from "styled-components";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";
import MyPostWidget from "./widgets/MyPostWidget";
import logo from "../../img/profile-2.png";
import postImage from "../../img/post-image.png";

import Navbar from "../StaticWidgets/Navbar";
const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  return (
    <Box>
      <Navbar />
      <MyPostWidget />
    </Box>
  );
};

export default HomePage;
