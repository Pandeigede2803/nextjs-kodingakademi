import { useRouter } from "next/router";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { signOut } from "next-auth/react";
import useUserProfile from "src/zustand/userProfile";
import { CircularProgress } from "@mui/material";

const Navbar = () => {
  const route = useRouter();
  const [showProfile, setShowProfile] = useState(false);
  const { userProfile } = useUserProfile((state) => state);

  const doLogout = () => {
    signOut();
    route.push("/login");
  };

  return (
    <>
      <div className="w-full flex justify-between items-center shadow-md py-3 px-3 sticky top-0 z-10 bg-white">
        <div className="cursor-pointer">
          <GiHamburgerMenu size={25} />
        </div>
        <div className="flex items-center space-x-2 mr-2">
          <CircularProgress/>
          <p>{userProfile?.email}</p>
          <div className="relative">
            <div
              onClick={() => setShowProfile(!showProfile)}
              className="bg-slate-600 flex justify-center items-center w-7 h-7 rounded-full cursor-pointer"
            >
            <img className="w-7 h-7 rounded-full" src={userProfile?.image} alt={userProfile?.name} />
            </div>
            {showProfile && (
              <div className="absolute right-2 top-[100%]">
                <div className="bg-white shadow-xl w-48 rounded-md py-1 px-2">
                  <div className="mb-2">
                    <p>hi, {userProfile?.name}</p>
                  </div>
                  <hr className="mb-2" />
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
