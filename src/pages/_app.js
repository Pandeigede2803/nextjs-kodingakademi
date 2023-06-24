import "../../styles/globals.css";
import Dashboard from "../components/master/dashboard";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Auth from "../components/master/auth";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const currentRoute = route.pathname;

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
    <div>
      <ToastContainer />
      {masterLayout()}
    </div>
  );
}

export default MyApp;
