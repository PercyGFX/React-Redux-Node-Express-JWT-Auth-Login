import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";

const store = configureStore({
  reducer: {
    user: userReducer, // Add your userSlice reducer to the store
  },
});

export default store;
