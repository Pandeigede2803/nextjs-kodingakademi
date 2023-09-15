import React from "react";
import useStudents from "src/zustand/students";

const StudentDetail = () => {
  const studentDetail = useStudents((state) => state.studentDetail);
  const setStudentDetail = useStudents((state) => state.setStudentDetail);

  return (
    <>
      {studentDetail ? (
        <div className="mt-10 p-3 rounded-md border">
          <div className="flex justify-between">
            <div>
              <p>Name: {studentDetail.name}</p>
              <p>Gender: {studentDetail.gender}</p>
              <p>Address: {studentDetail.address}</p>
              <p>Class: {studentDetail.class.className}</p>
            </div>
            <div>
              <button onClick={() => setStudentDetail(null)} className="bg-slate-200 px-4 py-1 rounded-md">
                Close Btn
              </button>
            </div>
          </div>
          <div className="mt-5 mb-3">
            <p className="text-lg font-bold">Subjects:</p>
          </div>
          <div className="w-full grid grid-cols-4">
            {studentDetail.studentsubjects.map((item, index) => (
              <div key={index}>
                <p>Subject Name: {item.subject.subjectName}</p>
                <p>Score: {item.score}</p>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default StudentDetail;
