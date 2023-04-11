import {
  Avatar,
  TextField,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
  useMediaQuery,
} from "@mui/material";

import { useSelector } from "react-redux";

// import logo from "../../../img/profile-2.png";
import logo2 from "../../img/friends.png";
import home from "../../img/home.png";
import { useState } from "react";
const LeftBar = () => {
  const user = useSelector((state) => state.user);
  const link = `/profile/${user._id}`;
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const [isHoverFirst, setIsHoverFirst] = useState(false);

  const handleMouseEnter = () => {
    setIsHoverFirst(true);
  };
  const handleMouseLeave = () => {
    setIsHoverFirst(false);
  };

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: isNonMobileScreens ? "22vw" : "80vw",
          borderRadius: "14px",
          display: "flex",
          justifyContent: "space-around",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}>
        <a
          href={link}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transition: "0.2s ease",
            backgroundColor: isHoverFirst ? "grey" : "",
          }}>
          <Grid
            container
            direction="row"
            alignItems="center"
            margin="10px auto 10px 20px">
            <Avatar
              overlap="circular"
              src={`http://localhost:3001/static/${user.picturePath}`}
              sx={{ width: 50, height: 50 }}
            />
            <Box>
              <p style={{ marginLeft: "14px", color: "black" }}>
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
            margin="10px auto 10px 20px">
            <Avatar
              src={home}
              sx={{ width: 50, height: 50 }}
            />
            <Box>
              <p style={{ marginLeft: "14px", color: "black" }}>Home</p>
            </Box>
          </Grid>
        </a>

        <Grid
          container
          direction="row"
          alignItems="center"
          margin="10px auto 10px 20px">
          <Avatar
            overlap="circular"
            src={logo2}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px", color: "black" }}>Your Follows</p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default LeftBar;
