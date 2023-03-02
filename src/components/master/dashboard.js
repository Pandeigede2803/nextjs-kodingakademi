import React, { useEffect } from "react";
import Navbar from "../layouts/navbar";
import Sidebar from "../layouts/sidebar";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Dashboard = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const token = useSelector((state) => state.authToken.token);

  useEffect(() => {
    let userToken = localStorage.getItem("token") || token;

    if (!userToken) {
      route.push("/login");
      toast.error("Please login first");
      return;
    }
  }, [currentRoute]);

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
