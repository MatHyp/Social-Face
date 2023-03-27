import { useSelector } from "react-redux";
import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";

import styled from "styled-components";
import MyPostWidget from "./widgets/MyPostWidget";
import { useDropzone } from "react-dropzone";

import Navbar from "../StaticWidgets/Navbar";
const HomePage = () => {
  const userToken = useSelector((state) => state.token);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const file = acceptedFiles.map((file) => (
    <div>
      {/* {console.log(file)} */}
      <h1>
        {file.path} - {file.size}
      </h1>
    </div>
  ));
  return (
    <Box>
      <Navbar />
      <MyPostWidget />
    </Box>
  );
};

export default HomePage;
