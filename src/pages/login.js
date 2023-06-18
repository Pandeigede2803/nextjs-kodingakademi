import { useRouter } from "next/router";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { toast } from "react-toastify";

const Login = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

  const doLogin = () => {
    route.push("/");
  };

  return (
    <>
      <Head>
        <title>Dashboard | Admin - Login</title>
      </Head>
      <div className="bg-bg-gray flex h-screen items-center justify-center w-full animate-fade-in-left">
        <div className="flex flex-col bg-white items-center px-10 py-6 rounded-lg space-y-3 border-2 border-bg-primary">
          <p className="text-4xl font-bold text-bg-primary">Platform Admin</p>
          <div className="w-full border-t border-gray-400"></div>
          <p className="text-bg-primary font-medium text-4xl">Sign In</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              doLogin();
            }}
            className="flex flex-col items-center w-full pb-3"
          >
            <div className="mt-5 w-full">
              <p>Email Address</p>
              <input
                type="email"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-5 w-full">
              <p>Password</p>
              <input
                type="password"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-5 w-full flex justify-end">
              {/* <p className="text-bg-primary text-base">
                Don't have an account?{" "}
                <span onClick={() => route.push("/register")} className="font-medium cursor-pointer hover:underline">
                  Register
                </span>
              </p> */}
            </div>
            <button
              type="submit"
              className={"bg-bg-primary py-2 rounded-md text-white w-full flex justify-center mt-10 " + (!disabled && "hover:bg-bg-primary-darker")}
              disabled={disabled}
            >
              {!disabled ? "Sign In" : <CircularProgress size={24} color="inherit" />}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
