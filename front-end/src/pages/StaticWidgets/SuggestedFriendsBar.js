import { Avatar, Grid, Box, useMediaQuery, IconButton } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import logo from "../../img/profile-2.png";
import like from "../../img/like.png";

import SuggestedFriendWidget from "./Widgets/SuggestedFriendWidget";

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

  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: isNonMobileScreens ? "22vw" : "80vw",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          height: "210px",
          backgroundColor: "#fff",
          borderRadius: "14px",
        }}>
        <p
          style={{
            margin: "10px auto 10px 20px",
          }}>
          Recommended users.
        </p>

        {users
          // .slice(0)
          // .reverse()
          .map(
            ({
              _id,
              id,
              firstName,
              lastName,
              picturePath,
              description,
              likes,
              createdAt,
              comments,
              userPicturePath,
              userFollowers,
            }) => {
              return (
                <SuggestedFriendWidget
                  key={_id}
                  id={_id}
                  firstName={firstName}
                  lastName={lastName}
                  picturePath={picturePath}
                  description={description}
                  likes={likes}
                  createdAt={createdAt}
                  comments={comments}
                  userPicturePath={userPicturePath}
                  userFollowers={userFollowers}
                />
              );
            }
          )}

        {/* {users.map(function (suggestedUser) {
          // suggestedUser.userFollowers[user._id] !== undefined
          // ? setCount(1)
          // : setCount(0);

          let count = 0;
          if (suggestedUser.userFollowers[user._id] !== undefined) {
            count = 1;
            console.log(count);
          }
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
                  src={`http://localhost:3001/static/${suggestedUser.picturePath}`}
                  sx={{ width: 50, height: 50 }}
                />
                <Box>
                  <p style={{ marginLeft: "14px" }}>
                    {`${suggestedUser.firstName} ${suggestedUser.lastName}`}
                    {user.id}
                  </p>
                </Box>
              </Box>
              <IconButton
                onClick={() => {
                  addFollow(suggestedUser._id);
                  count !== 1 ? count++ : count--;
                  setS;
                }}
                sx={{
                  borderRadius: "10px",
                  color: "black",
                  fontSize: "16px",
                  ":hover": { backgroundColor: "#BAC0C6" },
                }}>
                <p
                  style={{
                    color:
                      suggestedUser.userFollowers[user._id] !== undefined ||
                      count == 1
                        ? "blue"
                        : "",
                  }}>
                  follow
                  {console.log(suggestedUser.userFollowers[user._id])}
                </p>
              </IconButton>
            </Grid>
          );
        })} */}
        {/* {users.map((suggestedUser) => {return(
          // <a
          //   href={`/profile/${user._id}`}
          //   style={{ textDecoration: "none", color: "black" }}>
          {(suggestedUser.userFollowers[user._id] !== undefined) ? setCount(1) : setCount(0)}
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
                src={`http://localhost:3001/static/${suggestedUser.picturePath}`}
                sx={{ width: 50, height: 50 }}
              />
              <Box>
                <p style={{ marginLeft: "14px" }}>
                  {`${suggestedUser.firstName} ${suggestedUser.lastName}`}
                  {user.id}
                </p>
              </Box>
            </Box>
            <IconButton
              onClick={() => addFollow(suggestedUser._id)}
              sx={{
                borderRadius: "10px",
                color: "black",
                fontSize: "16px",
                ":hover": { backgroundColor: "#BAC0C6" },
              }}>
              <p
                style={{
                  color:
                    suggestedUser.userFollowers[user._id] !== undefined
                      ? "blue"
                      : "",
                }}>
                follow
                {console.log(suggestedUser.userFollowers[user._id])}
              </p>
            </IconButton>
          </Grid>
          // </a> */}
        {/* ))} */}
      </Box>
    </div>
  );
};

export default SuggestedFriendsBar;
