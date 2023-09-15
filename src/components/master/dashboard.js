import React, { useEffect } from "react";
import Navbar from "../layouts/navbar";
import Sidebar from "../layouts/sidebar";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useSession } from "next-auth/react";
import useUserProfile from "src/zustand/userProfile";

const Dashboard = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const { data: session } = useSession();
  const { setUserProfile } = useUserProfile((state) => state);

  useEffect(() => {
    if (session !== undefined && session == null) {
      route.push("/login");
      toast.error("Please login first");
      return;
    }

    setUserProfile(session?.user);
  }, [currentRoute, session]);

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
