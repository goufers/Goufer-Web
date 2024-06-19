import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PUBLIC_ROUTES from "./utils/PublicRoutes";
import Search from "./pages/Search/Search-1";
import Verifyemail from "./components/Verifyemail";
import GouferProfile from "./pages/Profile/GouferProfile";
import Chat from "./pages/Dashboard/Chat";
import Dashboard from "./pages/Dashboard/Main";
import Employment from "./pages/Dashboard/Employment";
import Favorites from "./pages/Dashboard/Favourite";

function App() {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={PUBLIC_ROUTES.GOUFER_PROFILE} element={<GouferProfile />} />
        <Route path={PUBLIC_ROUTES.SEARCH} element={<Search />} />
        <Route path={PUBLIC_ROUTES.DASHBOARD} element={<Dashboard />} />
        <Route path={PUBLIC_ROUTES.CHAT} element={<Chat />} />
        <Route path={PUBLIC_ROUTES.EMPLOYMENT} element={<Employment />} />
        <Route path={PUBLIC_ROUTES.FAVORITE} element={<Favorites />} />

        <Route path={"/about_us"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/contact_us"} element={<ContactUs />} />

        <Route path={"/verify_email"} element={<Verifyemail />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
