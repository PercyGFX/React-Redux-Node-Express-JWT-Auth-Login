import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";

// get token cookie and decode if there is an one
const token = Cookies.get("token");
let decodedToken = null;

if (token) {
  try {
    decodedToken = jwtDecode(token);
  } catch (error) {
    console.log("User not logged in");
  }
}

// crate slice
export const userSlice = createSlice({
  name: "user",

  // set intnitial states if there is a token. otherwise null and false. keep isauth false. it will be handled from saga
  initialState: {
    username: decodedToken?.username || null,
    isLogged: decodedToken ? true : false,
    isAuthenticated: false,
  },

  reducers: {
    // this is the reducer for saga API check
    authcheck: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = action.payload.isAuthenticated;
      state.isAuthenticated = action.payload.isAuthenticated;
    },

    // reducer for manually set when user login
    login: (state, action) => {
      state.username = action.payload.username;
      state.isLogged = action.payload.isAuthenticated;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
    // logout reducer
    logout: (state) => {
      state.username = null;
      state.isLogged = false;
      state.isAuthenticated = false;
    },
  },
});

export const { login, authcheck, logout } = userSlice.actions;
export default userSlice.reducer;
