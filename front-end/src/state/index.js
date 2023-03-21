import { createSlice } from "@reduxjs/toolkit";
const initState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initState,
  reducers: {
    setUser: (state) => {
      state.user = true;
      console.log("User set");
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
