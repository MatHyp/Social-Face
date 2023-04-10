import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import LeftBar from '../StaticWidgets/LeftBar.js'
import Navbar from '../StaticWidgets/Navbar.js'
const ProfilePage = () => {
  const user = useSelector((state) => state.user);
  
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

      </Box>
    </Box>
  );
};

export default ProfilePage;
