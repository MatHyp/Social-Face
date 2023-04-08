import { useSelector } from "react-redux";
import { Box } from "@mui/material";

//Widgets

import SuggestedFriendsBar from "./widgets/SuggestedFriendsBar";
import Navbar from "../StaticWidgets/Navbar";
import CreatePostWidget from "./widgets/CreatePostWidget.js";
import LeftBar from "./widgets/LeftBar.js";
import PostsWidget from "./widgets/PostsWidgets";

const HomePage = () => {
  const userToken = useSelector((state) => state.token);

  return (
    <Box>
      <Navbar />
      <Box
        sx={{
          display: "flex",
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
    </Box>
  );
};

export default HomePage;
