import React from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const route = useRouter();
  const showSidebar = useSelector((state) => state.toggleSidebar.showSidebar);

  return (
    <>
      {showSidebar && (
        <div className="h-full w-72 bg-white shadow-xl">
          <div onClick={() => route.push("/")} className="w-full cursor-pointer px-5 py-5 flex justify-center select-none">
            <p className="text-xl">Dashboard - Admin</p>
          </div>
          <div className="w-full px-5">
            <div
              onClick={() => route.push("/products")}
              className="py-2 px-3 my-3 cursor-pointer items-center rounded-md bg-slate-100 hover:bg-gray-200"
            >
              <p>Product</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
