import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: null,
    isAuthenticated: false,
  },

  reducers: {
    login: (state, action) => {
      state.username = action.payload.username;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state) => {
      state.username = null;
      state.isAuthenticated = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
