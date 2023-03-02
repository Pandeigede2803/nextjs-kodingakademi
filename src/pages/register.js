import { useRouter } from "next/router";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Snackbar from "@mui/material/Snackbar";
import Image from "next/image";
import Head from "next/head";
import Logo from "../../public/images/logo.png";

const Register = () => {
  const route = useRouter();
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const doRegister = () => {
    if (password !== passwordConfirm) {
      setErrorMessage("Passwords do not match");
      setOpenAlert(true);
      return;
    }
  };

  return (
    <>
      <Head>
        <title>Yepposkin | Admin - Register</title>
      </Head>
      <div className="bg-bg-gray flex h-screen items-center justify-center w-full animate-fade-in-left">
        <div className="flex flex-col bg-white items-center px-10 py-6 rounded-lg space-y-3 border-2 border-bg-primary">
          {/* <Image alt="LG Innotek-logo" src={Logo} width={450} height={84} /> */}
          <p className="text-4xl font-bold text-bg-primary">Wedding Platform Admin</p>
          <div className="w-full border-t border-bg-primary"></div>
          <p className="text-bg-primary font-medium text-3xl">Sign Up</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              doRegister();
            }}
            className="flex flex-col items-center w-full pb-3"
          >
            <div className="mt-2 w-full">
              <p>Email Address</p>
              <input
                type="email"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mt-2 w-full">
              <p>Username</p>
              <input
                type="text"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mt-2 w-full">
              <p>Password</p>
              <input
                type="password"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mt-2 w-full">
              <p>Password Confirmation</p>
              <input
                type="password"
                className="w-full outline-bg-primary border-bg-primary border rounded-md py-2 px-2"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                required
              />
            </div>
            <div className="mt-2 w-full flex justify-end">
              <p className="text-bg-primary text-base">
                Already have an account?{" "}
                <span onClick={() => route.push("/login")} className="font-medium cursor-pointer hover:underline">
                  Login
                </span>
              </p>
            </div>
            <button
              type="submit"
              className={"bg-bg-primary py-2 rounded-md text-white w-full flex justify-center mt-5 " + (!disabled && "hover:bg-bg-primary-darker")}
              disabled={disabled}
            >
              {!disabled ? "Sign Up" : <CircularProgress size={24} color="inherit" />}
            </button>
          </form>
        </div>

        <Snackbar
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
          open={openAlert}
          autoHideDuration={5000}
          onClose={() => setOpenAlert(false)}
        >
          <div className="bg-bg-danger px-3 py-1 text-white rounded-md">
            <p className="text-xl">{errorMessage}</p>
          </div>
        </Snackbar>
      </div>
    </>
  );
};

export default Register;
