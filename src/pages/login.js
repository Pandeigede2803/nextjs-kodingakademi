import React, { useState } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import Head from "next/head";
import { useRouter } from "next/router";
const Login = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);

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
              setDisabled(true);
              route.push("/");
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
            <div className="mt-5 w-full flex justify-end"></div>
            <button
              type="button"
              className={"bg-bg-primary py-2 rounded-md text-white w-full flex justify-center mt-10 " + (!disabled && "hover:bg-bg-primary-darker")}
              disabled={disabled}
            >
              Sign In
            </button>
            <button
              type="submit"
              className={"bg-[#4285f4] py-2 rounded-md text-white w-full flex justify-center items-center mt-5 " + (!disabled && "hover:opacity-80")}
              disabled={disabled}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                alt="google"
                className="w-5 h-5 mr-2 bg-white rounded-sm"
              />
              Google
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
