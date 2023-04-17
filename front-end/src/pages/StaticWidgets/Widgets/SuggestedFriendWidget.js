import { Avatar, Grid, Box, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

const SuggestedFriendWidget = ({
  id,
  firstName,
  lastName,
  picturePath,
  userFollowers,
}) => {
  const user = useSelector((state) => state.user);

  const [follow, setFollow] = useState(userFollowers[user._id] !== undefined);

  const addFollow = async () => {
    const response = await fetch(`http://localhost:3001/users/follow`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        userId: user._id,
        userToFollowId: id,
      }),
    });
    const updatedPost = await response.json();
  };

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-around"
      margin="10px auto 10px 00px">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Avatar
          overlap="circular"
          src={`http://localhost:3001/static/${picturePath}`}
          sx={{ width: 50, height: 50 }}
        />
        <Box>
          <p style={{ marginLeft: "14px" }}>
            {`${firstName} ${lastName}`}
            {user.id}
          </p>
        </Box>
      </Box>
      <IconButton
        onClick={() => {
          addFollow();
          follow ? setFollow(false) : setFollow(true);
        }}
        sx={{
          borderRadius: "10px",
          color: "black",
          fontSize: "16px",
          ":hover": { backgroundColor: "#BAC0C6" },
        }}>
        <p
          style={{
            color: follow ? "blue" : "",
          }}>
          follow
        </p>
      </IconButton>
    </Grid>
  );
};

export default SuggestedFriendWidget;
