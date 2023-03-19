import TextField from "@mui/material/TextField";
import { Box, Typography, Button, Divider } from "@mui/material";

import { display, width } from "@mui/system";
const LoginPage = () => {
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
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          label="Password"
          sx={{ width: "80%", margin: "10px 0 10px 0px" }}
        />
        <Button
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
          href="login">
          Create new Account
        </Button>
      </Box>
    </Box>
  );
};

export default LoginPage;
