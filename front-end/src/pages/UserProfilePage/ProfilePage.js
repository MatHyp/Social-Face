import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import LeftBar from "../StaticWidgets/LeftBar.js";
import Navbar from "../StaticWidgets/Navbar.js";
import SuggestedFriendsBar from "../StaticWidgets/SuggestedFriendsBar.js";
import ProfileCartWidget from "./widgets/ProfileCartWidget.js";
import CreatePostWidget from "../HomePage/widgets/CreatePostWidget.js";
import PostsWidget from "../HomePage/widgets/PostsWidgets.js";

const ProfilePage = () => {
  const user = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "84%",
          margin: "0 auto",
        }}>
        <LeftBar />
        <Box>
          <ProfileCartWidget />
          <CreatePostWidget />
          <PostsWidget />
        </Box>
        <SuggestedFriendsBar />
      </Box>
    </Box>
  );
};

export default ProfilePage;
