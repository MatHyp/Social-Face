import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
  },
});

export const { setUser, setPosts } = authSlice.actions;
export default authSlice.reducer;
