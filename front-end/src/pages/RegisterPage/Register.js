import {
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  Grid,
  useMediaQuery,
} from "@mui/material";
import Dropzone from "react-dropzone";
import { useDropzone } from "react-dropzone";
import { setPosts, setUser } from "../../state";
import { useDispatch } from "react-redux";
import { useState } from "react";
import postImage from "../../img/post-image.png";

const RegisterPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();

  const register = async () => {
    const formData = new FormData();
    console.log(acceptedFiles);

    formData.append("firstName", name);
    formData.append("lastName", lastName);
    formData.append("username", username);
    formData.append("password", password);
    formData.append(
      "picture",
      acceptedFiles.length === 0 ? "" : acceptedFiles[0]
    );
    formData.append(
      "picturePath",
      acceptedFiles.length === 0 ? "" : acceptedFiles[0].path
    );
    const registerInResponse = await fetch(
      "http://localhost:3001/auth/register",
      {
        method: "POST",

        body: formData,
      }
    );
    const register = await registerInResponse.json();
    console.log(register);
  };

  return (
    <Box>
      <Typography
        fontSize="67px"
        color="#1877F2"
        textAlign="center"
        padding="30px 0 0 0">
        Social Face
      </Typography>
      <Typography
        fontSize="30px"
        color="#1c1e21"
        textAlign="center">
        Create an account and enjoy time with us.
      </Typography>
      <Box
        sx={{
          width: isNonMobileScreens ? "500px" : "80vw",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          display: "flex",
          flexDirection: "column",
          margin: "0 auto",
          alignItems: "center",
          backgroundColor: "white",
          borderRadius: "20px",
        }}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Username"
          sx={{ width: "80%", margin: "70px 0 10px 0px" }}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="First Name"
          sx={{ width: "80%", margin: "10px 0 10px 0px" }}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Last Name"
          sx={{ width: "80%", margin: "10px 0 10px 0px" }}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          sx={{ width: "80%", margin: "10px 0 10px 0px" }}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div style={{ width: "50%" }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            width="92%"
            margin="20px auto 10px auto">
            Attach your avatar
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
            <div>
              {acceptedFiles.map((file) => (
                <p>{file.path} - attatched</p>
              ))}
            </div>
          </Grid>
        </div>
        <div style={{ width: "100%", transform: "translateX(25%)" }}>
          <a href="/">
            <Button
              onClick={register}
              variant="contained"
              sx={{
                width: "50%",
                bgcolor: "#1877F2",
                fontSize: "18px",
                margin: "10px 0",
                textTransform: "lowercase",
              }}>
              Register
            </Button>
          </a>
        </div>

        <Divider />

        <div style={{ width: "100%", transform: "translateX(25%)" }}>
          <a href="/">
            <Button
              variant="contained"
              sx={{
                width: "50%",
                bgcolor: "#42B72A",
                fontSize: "15px",
                margin: "10px 0 70px 0",
                textTransform: "lowercase",
              }}>
              Sign in
            </Button>
          </a>
        </div>
      </Box>
    </Box>
  );
};

export default RegisterPage;
