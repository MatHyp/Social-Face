import styled from "styled-components";
import { useSelector } from "react-redux";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import {
  Avatar,
  TextField,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
} from "@mui/material";

import logo from "../../../img/profile-2.png";
import postImage from "../../../img/post-image.png";

const MyPostWidget = () => {
  const PostTextField = styled(TextField)`
    width: 80%;
    fieldset {
      border-radius: 20px;
    }
  `;
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const file = acceptedFiles.map((file) => (
    <div>
      {console.log(file)}

      <h1>
        {file.path} - {file.size}
      </h1>
    </div>
  ));

  const sendPost = async () => {
    // this allows us to send form info with image
    let formData = new FormData();

    formData.append("picture", acceptedFiles[0]);
    formData.append("picturePath", acceptedFiles[0].path);
    // console.log(formData);
    const savedUserResponse = await fetch("http://localhost:3001/post", {
      method: "POST",
      // body: JSON.stringify({
      //   picture: acceptedFiles[0],
      //   id: "641368ea80c8056569c825ce",
      //   picturePath: acceptedFiles[0].path,
      // }),
      body: formData,
    });
    const savedUser = await savedUserResponse.json();

    console.log(savedUser);
  };

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: " 600px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
          margin="20px auto 20px auto">
          <Avatar
            overlap="circular"
            src={logo}
            sx={{ width: 50, height: 50 }}
          />

          <PostTextField
            id="outlined-basic"
            label="What's on your mind?"
            variant="outlined"
            size="small"
          />
        </Grid>
        <Divider
          sx={{
            width: "92%",
            margin: "0 auto",
          }}
        />

        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="92%"
          margin="20px auto 10px auto">
          <div {...getRootProps()}>
            <input
              {...getInputProps()}
              name="picture"
            />
            <img
              src={postImage}
              alt=""
            />
          </div>
          <Button
            onClick={(e) => sendPost()}
            variant="contained"
            color="success">
            Success
          </Button>
        </Grid>

        <p>{file.path}</p>
      </Box>
    </div>
  );
};

export default MyPostWidget;
