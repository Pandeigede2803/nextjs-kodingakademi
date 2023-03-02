import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Auth = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const token = useSelector((state) => state.authToken.token);

  useEffect(() => {
    let userToken = localStorage.getItem("token") || token;

    if (userToken) {
      route.push("/");
      return;
    }
  }, [currentRoute]);

  return <div>{children}</div>;
};

export default Auth;
