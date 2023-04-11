import { Avatar, Grid, Box, useMediaQuery, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../../img/profile-2.png";
import like from "../../img/like.png";

const SuggestedFriendsBar = () => {
  const user = useSelector((state) => state.user);
  const [users, setUsers] = useState([]);
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");

  const getUsers = async () => {
    const response = await fetch(`http://localhost:3001/users`, {
      method: "GET",
    });
    const data = await response.json();
    console.log(data);
    setUsers(data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const addFollow = async () => {
    const response = await fetch(`http://localhost:3001/users/follow`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: user._id,
        userToFollowId: "6435469754998f6838828837",
      }),
    });
    const updatedPost = await response.json();
  };

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: isNonMobileScreens ? "22vw" : "80vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "14px",
        }}>
        <p
          style={{
            margin: "10px auto 10px 20px",
          }}>
          Recommended users.
        </p>
        {users.map((user) => (
          <a
            href={`/profile/${user._id}`}
            style={{ textDecoration: "none", color: "black" }}>
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
                  src={`http://localhost:3001/static/${user.picturePath}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Box>
                  <p style={{ marginLeft: "14px" }}>
                    {`${user.firstName} ${user.lastName}`}
                    {user.id}
                  </p>
                </Box>
              </Box>
              <IconButton
                onClick={addFollow}
                sx={{
                  borderRadius: "10px",
                  color: "black",
                  fontSize: "16px",
                  ":hover": { backgroundColor: "#BAC0C6" },
                }}>
                <img
                  src={like}
                  alt="like"
                  style={{ width: "30px" }}
                />
              </IconButton>
            </Grid>
          </a>
        ))}
      </Box>
    </div>
  );
};

export default SuggestedFriendsBar;
