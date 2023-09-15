import { create } from "zustand";

const useAuthToken = create((set) => ({
  token: null,
  userData: null,
  setToken: (value) => set({ token: value }),
  setUserData: (value) => set({ userData: value }),
}));

export default useAuthToken;
