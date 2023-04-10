import { useSelector } from "react-redux";
import { Box, CardMedia, useMediaQuery, Avatar } from "@mui/material";

import bgc from "../../../img/szop.png";
import logo from "../../../img/szop.png";

const ProfileCartWidget = () => {
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  console.log(user);
  return (
    <Box
      sx={{
        width: isNonMobileScreens ? "35vw" : "80vw",
        margin: "0 auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}>
      <img
        src={bgc}
        alt=""
        style={{
          maxWidth: isNonMobileScreens ? "35vw" : "80vw",
          objectFit: "contain",
          margin: "0 auto",
        }}
      />
      <Box
        sx={{
          bgcolor: "red",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          position: "relative",
          bgcolor: "white",
          width: isNonMobileScreens ? "35vw" : "80vw",
          marginTop: "10px",
          height: "125px",
        }}>
        <Box
          sx={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            top: "-130%",
            margin: "0 auto",
          }}>
          <Avatar
            overlap="circular"
            src={`http://localhost:3001/static/${user.picturePath}`}
            sx={{ width: 200, height: 200 }}
          />
          <h1>
            {user.firstName} {user.lastName}
          </h1>
        </Box>
      </Box>
    </Box>
  );
};

export default ProfileCartWidget;
