import { useSelector } from "react-redux";
import styled from "styled-components";

import { Avatar, TextField, Grid, Divider, Button, Box } from "@mui/material";
import logo from "../../../img/profile-2.png";
import postImage from "../../../img/post-image.png";
const MyPostWidget = () => {
  const userToken = useSelector((state) => state.token);
  const PostBox = styled.div`
    margin: 30px auto 0 auto;
    width: 600px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #fff;
  `;

  const PostTextField = styled(TextField)`
    width: 80%;
    fieldset {
      border-radius: 20px;
    }
  `;
  return (
    <PostBox>
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
        <img
          src={postImage}
          alt=""
        />
        <Button
          variant="contained"
          color="success">
          Success
        </Button>
      </Grid>
    </PostBox>
  );
};

export default MyPostWidget;
