import { create } from "zustand";

const useStudents = create((set) => ({
  studentDetail: null,
  setStudentDetail: (value) => set({ studentDetail: value }),
}));

export default useStudents;
