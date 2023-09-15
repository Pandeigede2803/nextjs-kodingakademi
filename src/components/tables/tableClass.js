import React, { useState } from "react";
import { Modal } from "@mui/material";
import { GrClose } from "react-icons/gr";
import { fetcher } from "src/helper/utils";
import { toast } from "react-toastify";

const TableClass = (props) => {
  const { classes, fetchClass } = props;
  const [modalEditOpenend, setModalEditOpenend] = useState(false);
  const [editClassForm, setEditClassForm] = useState({
    id: "",
    className: "",
  });

  const handleEditClass = async () => {
    const result = await fetcher("put", "/class", editClassForm);
    if (result.status == "success") {
      setEditClassForm({ id: "", className: "" });
      setModalEditOpenend(false);
      fetchClass();
      toast.success("Class edited successfully");
    }
  };

  const handleDeleteClass = async (id) => {
    const params = {
      id: id,
    };

    if (window.confirm("Are you sure you want to delete this class?")) {
      const result = await fetcher("delete", "/class", params);
      if (result.status == "success") {
        fetchClass();
        toast.success("Class deleted successfully");
      }
    }
  };

  const handleEditClassModal = (item) => {
    setEditClassForm({
      id: item.id,
      className: item.className,
    });
    setModalEditOpenend(true);
  };

  return (
    <>
      <div className="shadow-xl overflow-x-auto w-full px-3 py-3 mt-5">
        <table className="table table-auto w-full leading-normal">
          <thead className="uppercase text-gray-600 text-sm font-semibold bg-gray-200">
            <tr className="hidden md:table-row">
              <th className="text-left p-3">
                <p>Class Name</p>
              </th>
              <th className="text-right p-3">
                <p>Action</p>
              </th>
            </tr>
          </thead>
          <tbody className="flex-1 text-gray-700 sm:flex-none">
            {classes.map((item, index) => (
              <tr key={index} className="border-t first:border-t-0 flex p-1 md:p-3 hover:bg-gray-100 md:table-row flex-col w-full flex-wrap">
                <td className="p-1 md:p-3">
                  <p className="">{item.className}</p>
                </td>
                <td className="text-right p-1 md:p-3">
                  <button onClick={() => handleEditClassModal(item)} type="button" className="inline-block text-gray-600 hover:text-gray-700 mr-2">
                    <span className="text-blue-600 hover:text-blue-400 font-semibold">Edit</span>
                  </button>
                  <button onClick={() => handleDeleteClass(item.id)} type="button" className="inline-block text-gray-600 hover:text-gray-700">
                    <span className="text-red-600 hover:text-red-400 font-semibold">Delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Modal open={modalEditOpenend} onClose={() => setModalEditOpenend(false)} className="flex justify-center items-center w-full">
        <div className="bg-white flex flex-col justify-between py-2 rounded-md md:w-1/2 w-full">
          <div className="w-full px-5 pb-2 flex items-center justify-between border-b border-b-gray-200">
            <p className="font-worksans-semibold text-2xl">Edit Class</p>
            <GrClose size={25} className="cursor-pointer" onClick={() => setModalEditOpenend(false)} />
          </div>
          <div className="w-full h-[30vh] overflow-y-auto text-xl px-5">
            <div className="mt-6 w-full flex flex-col">
              <div className="mt-5">
                <p>Class Name</p>
                <input
                  onChange={(e) => setEditClassForm({ ...editClassForm, className: e.target.value })}
                  value={editClassForm.className}
                  type="text"
                  className="w-full py-2 px-2 rounded-lg border-2 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-5 pb-5 mt-2 w-full flex justify-end">
            <button onClick={handleEditClass} className="bg-bg-primary text-white text-xl rounded-md py-2 px-5 hover:opacity-70 transition-all">
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default TableClass;
