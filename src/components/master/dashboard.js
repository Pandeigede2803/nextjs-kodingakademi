import React, { useEffect } from "react";
import Navbar from "../layouts/navbar";
import Sidebar from "../layouts/sidebar";
import { useRouter } from "next/router";

const Dashboard = ({ children }) => {
  return (
    <>
      <div className="w-screen h-screen flex">
        <Sidebar />
        <div className="w-full h-full overflow-y-auto">
          <Navbar />
          <div className="px-5 py-3">{children}</div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
