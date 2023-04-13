import { useDispatch, useSelector } from "react-redux";

import React, { useState } from "react";
import { setPosts } from "../../../state";
import { useDropzone } from "react-dropzone";
import {
  Avatar,
  TextField,
  Grid,
  Divider,
  Button,
  Box,
  useMediaQuery,
} from "@mui/material";

import postImage from "../../../img/post-image.png";

const MyPostWidget = () => {
  const dispatch = useDispatch();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const savedPosts = useSelector((state) => state.posts);
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState("");

  const sendPost = async () => {
    const formData = new FormData();
    console.log(acceptedFiles);
    formData.append("id", user._id);
    formData.append(
      "picture",
      acceptedFiles.length === 0 ? "" : acceptedFiles[0]
    );
    formData.append(
      "picturePath",
      acceptedFiles.length === 0 ? "" : acceptedFiles[0].path
    );
    formData.append("description", description);

    const response = await fetch("http://localhost:3001/post", {
      method: "POST",
      body: formData,
    });

    const posts = await response.json();

    dispatch(
      setPosts({
        posts: [...savedPosts, posts],
      })
    );
  };

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: isNonMobileScreens ? "30vw" : "80vw",
          height: "210px",
          display: "flex",
          borderRadius: "14px",
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
            src={`http://localhost:3001/static/${user.picturePath}`}
            sx={{ width: 50, height: 50 }}
          />

          <TextField
            id="outlined-basic"
            label="What's on your mind?"
            variant="outlined"
            size="small"
            sx={{ width: "80%" }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
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

        {/* <p>{file.path}</p> */}
      </Box>
    </div>
  );
};

export default MyPostWidget;

// const file = acceptedFiles.map((file) => (
//   <div>
//     {console.log(file)}

//     <h1>
//       {file.path} - {file.size}
//     </h1>
//   </div>
// ));
