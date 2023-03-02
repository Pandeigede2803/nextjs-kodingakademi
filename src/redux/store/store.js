import { configureStore } from "@reduxjs/toolkit";
import authTokenReducer from "../reducers/authToken";
import toggleSidebarReducer from "../reducers/toggleSidebar";

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
    toggleSidebar: toggleSidebarReducer,
  },
});
