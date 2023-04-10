import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";

//Widgets

import SuggestedFriendsBar from "../StaticWidgets/SuggestedFriendsBar.js";
import Navbar from "../StaticWidgets/Navbar";
import CreatePostWidget from "./widgets/CreatePostWidget.js";
import LeftBar from "../StaticWidgets/LeftBar";
import PostsWidget from "./widgets/PostsWidgets";

const HomePage = () => {
  const userToken = useSelector((state) => state.token);
      const isNonMobileScreens = useMediaQuery("(min-width:1300px)");
  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: isNonMobileScreens ? 'row' :'column',
          justifyContent: "space-around",
          width: "84%",
          margin: "0 auto",
        }}>
        <LeftBar />
        <Box>
          <CreatePostWidget />
          <PostsWidget />
        </Box>
        <SuggestedFriendsBar />
      </Box>
      <Box sx={{ height: "80px" }}></Box>
    </Box>
  );
};

export default HomePage;
