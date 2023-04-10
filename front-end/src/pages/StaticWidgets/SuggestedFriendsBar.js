import { Avatar, Grid, Box, useMediaQuery } from "@mui/material";

import logo from "../../img/profile-2.png";

const SuggestedFriendsBar = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
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
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="10px auto 10px 20px">
          <Avatar
            overlap="circular"
            src={logo}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Jan Kowalski</p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default SuggestedFriendsBar;
