import React from "react";
import useStudents from "src/zustand/students";

const TableStudent = (props) => {
  const { studentList } = props;
  const setStudentDetail = useStudents((state) => state.setStudentDetail);

  return (
    <div className="shadow-xl overflow-x-auto w-full px-3 py-3 mt-5">
      <table className="table table-auto w-full leading-normal">
        <thead className="uppercase text-gray-600 text-sm font-semibold bg-gray-200">
          <tr className="hidden md:table-row">
            <th className="text-left p-3">
              <p>Name</p>
            </th>
            <th className="text-left p-3">
              <p>Gender</p>
            </th>
            <th className="text-right p-3">
              <p>Address</p>
            </th>
            <th className="text-right p-3">
              <p>Action</p>
            </th>
          </tr>
        </thead>
        <tbody className="flex-1 text-gray-700 sm:flex-none">
          {studentList.map((item, index) => (
            <tr key={index} className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap">
              <td className="p-1 md:p-3">
                <p className="">{item.name}</p>
              </td>
              <td className="p-1 md:p-3">
                <p className="">{item.gender}</p>
              </td>
              <td className="p-1 md:p-3 md:text-right">
                <p>{item.address}</p>
              </td>
              <td className="text-right p-1 md:p-3">
                <button onClick={() => setStudentDetail(item)} type="button" className="inline-block text-gray-600 hover:text-gray-700">
                  <span className="text-blue-600 hover:text-blue-400 font-semibold">Detail</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableStudent;
