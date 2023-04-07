import {
  Avatar,
  TextField,
  Grid,
  Divider,
  Button,
  Box,
  Paper,
} from "@mui/material";

import logo from "../../../img/profile-2.png";
import logo2 from "../../../img/friends.png";
const MyPostWidget = () => {
  return (
    <div>
      <Box
        sx={{
          margin: "30px auto 0 auto",
          width: "440px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          backgroundColor: "#fff",
        }}>
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 0px 20px">
          <Avatar
            overlap="circular"
            src={logo}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Jan Kowalski</p>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 0px 20px">
          <Avatar
            overlap="circular"
            src={logo2}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Your friends</p>
          </Box>
        </Grid>
        <Grid
          container
          direction="row"
          alignItems="center"
          margin="20px auto 20px 20px">
          <Avatar
            overlap="circular"
            src={logo2}
            sx={{ width: 50, height: 50 }}
          />
          <Box>
            <p style={{ marginLeft: "14px" }}>Your friends</p>
          </Box>
        </Grid>
      </Box>
    </div>
  );
};

export default MyPostWidget;
