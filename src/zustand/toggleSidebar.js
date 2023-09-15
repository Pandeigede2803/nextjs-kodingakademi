import { create } from "zustand";

const useToggleSidebar = create((set) => ({
  showSidebar: true,
  setShowSidebar: (value) => set({ showSidebar: value }),
}));

export default useToggleSidebar;
