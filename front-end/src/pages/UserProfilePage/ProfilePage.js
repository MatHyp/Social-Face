import { useSelector } from "react-redux";
import { Box, useMediaQuery } from "@mui/material";

import LeftBar from "../StaticWidgets/LeftBar.js";
import Navbar from "../StaticWidgets/Navbar.js";
import SuggestedFriendsBar from "../StaticWidgets/SuggestedFriendsBar.js";
import ProfileCartWidget from "./widgets/ProfileCartWidget.js";
import CreatePostWidget from "../HomePage/widgets/CreatePostWidget.js";
import PostsWidget from "../HomePage/widgets/PostsWidgets.js";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfilePage = () => {
  const [user, setUsers] = useState({});
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const params = useParams();

  console.log(params.id);
  const getUsers = async () => {
    const response = await fetch(`http://localhost:3001/users/${params.id}`, {
      method: "GET",
    });
    const data = await response.json();
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
          <ProfileCartWidget
            firstName={user.firstName}
            lastName={user.lastName}
            picturePath={user.picturePath}
          />
          <CreatePostWidget />
          <PostsWidget path={`userPosts/${params.id}`} />
        </Box>
        {isNonMobileScreens ? <SuggestedFriendsBar /> : ""}
      </Box>
    </Box>
  );
};

export default ProfilePage;
