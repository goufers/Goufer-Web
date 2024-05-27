import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";
import ContactUs from "./pages/ContactUs/ContactUs";
<<<<<<< HEAD
=======
import Footer from "./components/Footer/Footer";
>>>>>>> b9be72d2e85500a8f3db4cb83f97c7d2fdd6ef34
import PUBLIC_ROUTES from "./utils/PublicRoutes";

function App() {
  return (
    <>
      <Routes>
        <Route index path={PUBLIC_ROUTES.LANDINGPAGE} element={<Landing />} />
        <Route path={"/aboutus"} element={<AboutUs />} />
        <Route path={"/faq"} element={<Faq />} />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/contactus"} element={<ContactUs />} />
        <Route path={"*"} element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
