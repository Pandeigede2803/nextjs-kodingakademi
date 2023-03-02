import "../../styles/globals.css";
import Dashboard from "../components/master/dashboard";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Auth from "../components/master/auth";
import { store } from "../redux/store/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  const route = useRouter();
  const currentRoute = route.pathname;

  let authRoute = ["/login", "/register"];

  const masterLayout = () => {
    if (authRoute.includes(currentRoute)) {
      return (
        <Auth>
          <ToastContainer />
          <Component {...pageProps} />
        </Auth>
      );
    } else {
      return (
        <Dashboard>
          <ToastContainer />
          <Component {...pageProps} />
        </Dashboard>
      );
    }
  };

  return <Provider store={store}>{masterLayout()}</Provider>;
}

export default MyApp;
