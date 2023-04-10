import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";

import LeftBar from "../StaticWidgets/LeftBar.js";
import Navbar from "../StaticWidgets/Navbar.js";
import SuggestedFriendsBar from "../StaticWidgets/SuggestedFriendsBar.js";
import ProfileCartWidget from "./widgets/ProfileCartWidget.js";
import CreatePostWidget from "../HomePage/widgets/CreatePostWidget.js";
import PostsWidget from "../HomePage/widgets/PostsWidgets.js";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: isNonMobileScreens ? "row" : "column",
          justifyContent: "space-between",
          width: "86%",

          margin: "0 auto",
        }}>
        <LeftBar />
        {isNonMobileScreens ? "" : <SuggestedFriendsBar />}
        <Box>
          <ProfileCartWidget />
          <CreatePostWidget />
          <PostsWidget path={`userPosts/${user._id}`} />
        </Box>
        {isNonMobileScreens ? <SuggestedFriendsBar /> : ""}
      </Box>
    </Box>
  );
};

export default ProfilePage;
