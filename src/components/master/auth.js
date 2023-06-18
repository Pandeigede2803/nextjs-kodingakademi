import React, { useEffect } from "react";
import { useRouter } from "next/router";
import useAuthToken from "src/zustand/authToken";

const Auth = ({ children }) => {
  const route = useRouter();
  const currentRoute = route.pathname;
  const { token } = useAuthToken((state) => state);

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
