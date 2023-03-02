import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: true,
};

export const toggleSidebarSlice = createSlice({
  name: "toggleSidebar",
  initialState,
  reducers: {
    updateSidebarState: (state) => {
      state.showSidebar = !state.showSidebar;
    },
  },
});

export const { updateSidebarState } = toggleSidebarSlice.actions;

export default toggleSidebarSlice.reducer;
