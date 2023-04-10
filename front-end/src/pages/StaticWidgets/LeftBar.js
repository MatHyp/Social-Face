import {
  Avatar,
  TextField,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
  
} from "@mui/material";

import { useSelector } from "react-redux";

// import logo from "../../../img/profile-2.png";
import logo2 from "../../img/friends.png";
import home from "../../img/home.png";
const LeftBar = () => {
  const user = useSelector((state) => state.user);
  const link = `/profile/${user._id}`;

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: "440px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}>
            <a href={link}>


        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 0px 20px">
          <Avatar
            overlap="circular"
            src={`http://localhost:3001/static/${user.picturePath}`}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>
              {user.firstName} {user.lastName}
            </p>
          </Box>
        </Grid>
            </a>
      
  <a href="/">
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 0px 20px">
          <Avatar
            src={home}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Home</p>
          </Box>
        </Grid>
  </a>
        
        
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 20px 20px">
          <Avatar
            overlap="circular"
            src={logo2}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Your friends</p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default LeftBar;
