import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import useToggleSidebar from "src/zustand/toggleSidebar";

const Navbar = () => {
  const route = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const { showSidebar, setShowSidebar } = useToggleSidebar((state) => state);

  const doLogout = () => {
    route.push("/login");
  };

  return (
    <>
      <div className="w-full flex justify-between items-center shadow-md py-3 px-3 sticky top-0 z-10 bg-white">
        <div onClick={() => setShowSidebar(!showSidebar)} className="cursor-pointer">
          <GiHamburgerMenu size={25} />
        </div>
        <div className="flex items-center space-x-2 mr-2">
          <p>admin@email.com</p>
          <div className="relative">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="bg-slate-600 flex justify-center items-center w-7 h-7 rounded-full cursor-pointer"
            >
              <p className="text-white">A</p>
            </div>
            {showProfile && (
              <div className="absolute right-2">
                <div className="bg-white shadow-xl w-32 rounded-md py-1 px-2">
                  <div className="mb-2 cursor-pointer hover:underline">
                    <p>Settings</p>
                  </div>
                  <div onClick={() => doLogout()} className="mb-2 cursor-pointer hover:underline">
                    <p>Logout</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
