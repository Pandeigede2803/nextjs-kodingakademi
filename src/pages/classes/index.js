import React, { useEffect, useState } from "react";
import TableClass from "src/components/tables/tableClass";
import { fetcher } from "src/helper/utils";
import { Modal } from "@mui/material";
import { toast } from "react-toastify";
import { GrClose } from "react-icons/gr";

const Classes = () => {
  const [classes, setClasses] = useState([]);
  const [modalAddOpenend, setModalAddOpenend] = useState(false);
  const [addClassForm, setAddClassForm] = useState({ className: "" });

  const fetchClass = async () => {
    const result = await fetcher("get", "/class");
    if (result.status == "success") {
      setClasses(result.data);
    }
  };

  useEffect(() => {
    fetchClass();
  }, []);

  const handleAddClass = async () => {
    const result = await fetcher("post", "/class", addClassForm);
    if (result.status == "success") {
      setAddClassForm({ className: "" });
      setModalAddOpenend(false);
      fetchClass();
      toast.success("Class added successfully");
    }
  };

  return (
    <>
      <div className="w-full">
        <p className="text-2xl">Class Page</p>
        <div className="mt-10">
          <div className="w-full flex justify-end">
            <button
              onClick={() => setModalAddOpenend(true)}
              className="px-7 py-2 bg-slate-500 cursor-pointer text-white hover:bg-slate-600 rounded-md"
            >
              Add Class
            </button>
          </div>
          <TableClass classes={classes} fetchClass={fetchClass} />
        </div>
      </div>

      <Modal open={modalAddOpenend} onClose={() => setModalAddOpenend(false)} className="flex justify-center items-center w-full">
        <div className="bg-white flex flex-col justify-between py-2 rounded-md md:w-1/2 w-full">
          <div className="w-full px-5 pb-2 flex items-center justify-between border-b border-b-gray-200">
            <p className="font-worksans-semibold text-2xl">Add Class</p>
            <GrClose size={25} className="cursor-pointer" onClick={() => setModalAddOpenend(false)} />
          </div>
          <div className="w-full h-[30vh] overflow-y-auto text-xl px-5">
            <div className="mt-6 w-full flex flex-col">
              <div className="mt-5">
                <p>Class Name</p>
                <input
                  onChange={(e) => setAddClassForm({ ...addClassForm, className: e.target.value })}
                  value={addClassForm.className}
                  type="text"
                  className="w-full py-2 px-2 rounded-lg border-2 outline-none"
                />
              </div>
            </div>
          </div>
          <div className="px-5 pb-5 mt-2 w-full flex justify-end">
            <button onClick={handleAddClass} className="bg-bg-primary text-white text-xl rounded-md py-2 px-5 hover:opacity-70 transition-all">
              Submit
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Classes;
