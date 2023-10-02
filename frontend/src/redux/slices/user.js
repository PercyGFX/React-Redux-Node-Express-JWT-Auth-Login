import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

const token = Cookies.get("token");
let decodedToken = null;

if (token) {
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.log("User not logged in");
  }
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: decodedToken?.username || null,
    isLogged: decodedToken ? true : false,
    isAuthenticated: false,
  },

  reducers: {
    authcheck: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = action.payload.isAuthenticated;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = action.payload.isAuthenticated;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    logout: (state) => {
      state.username = null;
      state.isLogged = false;
      state.isAuthenticated = false;
    },
  },
});

export const { login, authcheck, logout } = userSlice.actions;
export default userSlice.reducer;
