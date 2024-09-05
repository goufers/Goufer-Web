import { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import Auth from "../pages/Auth";

const Nav = () => {
  const [auth, setAuth] = useState(false);
  const Menu = [
    { title: "About", url: "" },
    { title: "Expert Categories", url: "" },
    { title: "Faq", url: "" },
    { title: "Contact Us", url: "" },
  ];

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className=" fixed top-0 left-0 right-0 flex flex-row  w-full h-auto px-4 py-4 shadow-md bg-white items-center z-20">
        <img
          src="/images/mainlogo.png"
          alt="goufer logo"
          className="mx-3 md:mx-6 py-auto w-28 md:w-44 h-auto object-cover"
        />
        <div className="w-auto mx-auto hidden md:flex flex-row">
          {Menu.map((i, n) => (
            <p
              className={`{ text-[16px] px-2 font-roboto cursor-pointer hover:text-green-800 ${
                i.title === "Expert Categories" || i.title === "Faq"
                  ? "text-[#007F00]"
                  : " text-[#322F35]"
              }}`}
              key={n}
            >
              {i.title}
            </p>
          ))}
        </div>
        <div className=" mx-auto h-full  pl-12 w-auto md:w-1/3 flex flex-row  ">
          <p
            className="hidden  lg:flex   w-auto  text-[12px] md:text-[14px] text-[#007F00] text-center mx-auto px-5 md:py-2 bg-white hover:bg-gray-100 font-roboto font-semibold rounded-full border border-[#322F35] cursor-pointer"
            onClick={() => setAuth(true)}
          >
            Signup or Login
          </p>

          <p className="  w-auto text-[12px] md:text-[16px] text-white text-center mx-auto px-3 md:px-10 py-1.5 md:py-2 bg-[#007F00]  hover:bg-[#158815]  font-roboto font-semibold rounded-full  cursor-pointer">
            Use a Goufer
          </p>
        </div>
        <div
          onClick={handleNav}
          className="mx-0 md:mx-auto h-full  pl-4 w-auto flex md:hidden z-10 flex-row cursor-pointer "
        >
          {!nav ? (
            <img
              src="/images/sidenaveIcon.svg"
              alt=""
              className="w-[35px] h-[35px] object-cover cursor-pointer "
            />
          ) : (
            <IoCloseCircleOutline size={40} font-bold color="#007f00" />
          )}
        </div>
        <div
          className={
            nav
              ? "absolute right-0 top-[72px] w-1/2 h-screen bg-white px-5 flex flex-col pl-8 z-10 duration-200 "
              : "absolute left-[-100%] z-10 duration-200"
          }
        >
          <ul className="space-y-4 pt-3 text-[16px] text-black cursor-pointer">
            <li className="transition-opacity hover:text-[#007f00] hover:border-b border-[#007F00]">
              About
            </li>
            <li className="transition-opacity hover:text-[#007f00] hover:border-b border-[#007F00]">
              Expert Categories
            </li>
            <li className="transition-opacity hover:text-[#007f00] hover:border-b border-[#007F00]">
              Faq
            </li>
            <li className="transition-opacity hover:text-[#007f00] hover:border-b border-[#007F00]">
              Contact Us
            </li>
            <li
              onClick={() => setAuth(true)}
              className="transition-opacity hover:text-[#007f00] hover:border-b border-[#007F00]"
            >
              Login
            </li>
          </ul>
        </div>{" "}
        {auth && <Auth setAuth={setAuth} auth={auth} />}
      </div>
    </>
  );
};

export default Nav;
