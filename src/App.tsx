import { Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Page404 from "./pages/Page404";
import AboutUs from "./pages/AboutUs/AboutUs";
import Faq from "./pages/Faq/Faq";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path={"*"} element={<Page404 />} />
        <Route path={"AboutUs"} element={<AboutUs/>}/>
        <Route path={"Faq"} element={<Faq/>}/>
        <Route path={"Home"} element={<Home/>} />
      </Routes>
    </>
  );
}

export default App;
