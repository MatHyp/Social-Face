import { useSelector } from "react-redux";
import { Box, CardMedia, useMediaQuery } from "@mui/material";

import SuggestedFriendsBar from "../StaticWidgets/SuggestedFriendsBar.js";
import Navbar from "../StaticWidgets/Navbar";

import LeftBar from "../StaticWidgets/LeftBar";

const YourFollowsPage = () => {
  const userToken = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: isNonMobileScreens ? "row" : "column",
          justifyContent: "space-between",
          width: "80%",

          margin: "0 auto",
        }}>
        <LeftBar />
        {isNonMobileScreens ? "" : <SuggestedFriendsBar />}

        {isNonMobileScreens ? <SuggestedFriendsBar /> : ""}
      </Box>
      <Box sx={{ height: "80px" }}></Box>
    </Box>
  );
};

export default YourFollowsPage;
