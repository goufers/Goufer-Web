import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Search from "./pages/Search/Search-1";
import GouferProfile from "./pages/Profile/GouferProfile";
import Chat from "./pages/Dashboard/Chat";
import Employment from "./pages/Dashboard/Employment";
import Favorites from "./pages/Dashboard/Favourite";
import Notification from "./pages/Dashboard/Notification/index";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Subscription from "./pages/Dashboard/Subscripyion";

import PaymentPage from "./pages/Dashboard/Paymentmethod";

import { useEffect } from "react";
import AccountSettings from "./pages/Dashboard/AccountSettings";
import NewDashboard from "./pages/NewDashboard/Main";
import Dashboard from "./pages/Dashboard/Main";
import NewChat from "./pages/NewDashboard/Chat";
import NewAccountSettings from "./pages/NewDashboard/AccountSettings";

function App() {
  // const location = useLocation();

  useEffect(() => {
    if (!localStorage.getItem("G_A_token")) {
      // if (location.pathname !== ("/" || "/search")) {
      //   window.location.replace("/");
      // }
      console.log("no_token");
    } else {
      async () => {
        try {
          const decoded = jwtDecode(`${localStorage.getItem("G_A_token")}`);

          const tokenExpDate = decoded.exp;
          const currentDate = new Date() / 1000;
          if (tokenExpDate! < currentDate) {
            const response = await axios.post(
              `${import.meta.env.VITE_GOUFER_TEST_API}/token/refresh`,
              { refresh: localStorage.getItem("G_R_token") }
            );
            if (response.data) {
              localStorage.setItem(response.data.refresh, "G_R_token");
              localStorage.setItem(response.data.access, "G_A_token");
            }
            return response.data;
          }
        } catch (error) {
          console.error(error);
          return error;
        }
      };
    }
  }, []);

  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={PUBLIC_ROUTES.GOUFER_PROFILE} element={<GouferProfile />} />
        <Route path={PUBLIC_ROUTES.SEARCH} element={<Search />} />
        <Route path={PUBLIC_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={PUBLIC_ROUTES.CHAT} element={<Chat />} />
        <Route path={PUBLIC_ROUTES.EMPLOYMENT} element={<Employment />} />
        <Route path={PUBLIC_ROUTES.PAYMENT} element={<PaymentPage />} />
        {/* <Route path={PUBLIC_ROUTES.PAYMENT_CHANGE} element={<ChangePayment />} />
        <Route path={PUBLIC_ROUTES.PAYMENT_UPDATE} element={<PaymentUpdate />} />
        <Route path={PUBLIC_ROUTES.PAYMENT_ADD} element={<PaymentAdd />} /> */}
        <Route path={PUBLIC_ROUTES.FAVORITE} element={<Favorites />} />
        <Route path={PUBLIC_ROUTES.SUBSCRIPTION} element={<Subscription />} />
        <Route path={PUBLIC_ROUTES.NOTIFICATION} element={<Notification />} />
        <Route path={PUBLIC_ROUTES.ACCOUNT_SETTINGS} element={<AccountSettings />} />

        {/* New Dashboard */}
        <Route path={`new${PUBLIC_ROUTES.DASHBOARD}`} element={<NewDashboard />} />
        <Route path={`new${PUBLIC_ROUTES.CHAT}`} element={<NewChat />} />
        <Route
          path={`new${PUBLIC_ROUTES.ACCOUNT_SETTINGS}`}
          element={<NewAccountSettings />}
        />

        <Route path={"/about_us"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/contact_us"} element={<ContactUs />} />

        {/* <Route path={"/verify_email"} element={<Verifyemail />} />
        <Route path={"/successCard"} element={<SuccessCard />} />
        <Route path={"/failedCard"} element={<FailedCard />} /> */}
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
