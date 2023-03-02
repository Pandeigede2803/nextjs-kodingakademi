import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: null,
  userData: null,
};

export const authTokenSlice = createSlice({
  name: "authToken",
  initialState,
  reducers: {
    insertToken: (state, action) => {
      state.token = action.payload;
    },
    insertUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { insertToken, insertUserData } = authTokenSlice.actions;

export default authTokenSlice.reducer;
