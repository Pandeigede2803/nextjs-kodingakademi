import React, { useEffect, useState } from "react";
import StudentDetail from "src/components/student/detail";
import TableStudent from "src/components/tables/tableStudent";
import { fetcher } from "src/helper/utils";

const Students = () => {
  const [studentList, setStudentList] = useState([]);

  const fetchStudents = async () => {
    const result = await fetcher("get", "/student");
    if (result.status == "success") {
      setStudentList(result.data);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <>
      <div className="w-full">
        <p className="text-2xl">Student Page</p>
        <StudentDetail />
        <div className="mt-10">
          <TableStudent studentList={studentList} />
        </div>
      </div>
    </>
  );
};

export default Students;
