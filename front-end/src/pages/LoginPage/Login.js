import {
  Box,
  Typography,
  Button,
  Divider,
  TextField,
  useMediaQuery,
} from "@mui/material";

import { setPosts, setUser } from "../../state";
import { useDispatch } from "react-redux";
import { useState } from "react";

const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const loggedInResponse = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const loggedIn = await loggedInResponse.json();
    if (loggedIn) {
      dispatch(
        setUser({
          user: loggedIn.user,
          token: loggedIn.token,
        })
      );
    }
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
          label="Password"
          sx={{ width: "80%", margin: "10px 0 10px 0px" }}
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <Button
          onClick={login}
          variant="contained"
          sx={{
            width: "50%",
            bgcolor: "#1877F2",
            fontSize: "18px",
            margin: "10px 0",
            textTransform: "lowercase",
          }}>
          Log in
        </Button>
        <Divider />

        <Button
          variant="contained"
          sx={{
            width: "50%",
            bgcolor: "#42B72A",
            fontSize: "15px",
            margin: "10px 0 70px 0",
            textTransform: "lowercase",
          }}
          href="register">
          Create new Account
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
