import { Box, Typography, Button, Divider, TextField } from "@mui/material";

import { setPosts, setUser } from "../../state";
import { useDispatch } from "react-redux";
import { useState } from "react";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const register = async () => {
    const registerInResponse = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: name,
        lastName: lastName,
        username: username,
        password: password,
      }),
    });
    const register = await registerInResponse.json();
    console.log(register);
  };

  return (
    <Box>
      <Typography
        fontSize="67px"
        color="#1877F2"
        textAlign="center">
        Social Face
      </Typography>
      <Typography
        fontSize="30px"
        color="#1c1e21"
        textAlign="center">
        Create an account and enjoy your time
      </Typography>
      <Box
        sx={{
          width: "511px",
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
          {/* <a href="/"> */}
        
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
          {/* </a > */}

        <Divider />
          {/* <a href="/"> */}

        <Button
          variant="contained"
          sx={{
            width: "50%",
            bgcolor: "#42B72A",
            fontSize: "15px",
            margin: "10px 0 70px 0",
            textTransform: "lowercase",
          }}
          >
          Sign in
        </Button>
            {/* </a> */}
      </Box>
    </Box>
  );
};

export default RegisterPage;
