import "../../styles/globals.css";
import Dashboard from "../components/master/dashboard";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Auth from "../components/master/auth";
import { SessionProvider } from "next-auth/react"


function MyApp({ Component, pageProps:{ session, ...pageProps } }) {
  const route = useRouter();
  const currentRoute = route.pathname;
  console.log(currentRoute);

  let authRoute = ["/login", "/register"];

  const masterLayout = () => {
    if (authRoute.includes(currentRoute)) {
      return (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      );
    } else {
      return (
        <Dashboard>
          <Component {...pageProps} />
        </Dashboard>
    
      );
    }
  };

  return (
    <SessionProvider session= {session}>
      <ToastContainer />
      {masterLayout()}
      </SessionProvider>
  );
}

export default MyApp;
