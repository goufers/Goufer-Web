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
import ProfileNav from "./pages/Profile/ProfileNavbar";
import ProfileBody from "./pages/Profile/ProfileBody";


function App() {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"/profilenav"} element={<ProfileNav />} />
        <Route path={"/profilebody"} element={<ProfileBody />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
