import { createSlice } from "@reduxjs/toolkit";
const initState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
