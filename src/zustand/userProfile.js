import { create } from "zustand";

const useUserProfile = create((set) => ({
  userProfile: null,
  setUserProfile: (value) => set({ userProfile: value }),
}));

export default useUserProfile;
