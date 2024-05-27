const Nav = () => {
  return (
    <div className="w-full h-auto px-4 py-4 bg-white items-center flex flex-row">
      <img
        src="/images/mainlogo.png"
        alt="goufer logo"
        className="mx-6 py-auto w-44 h-auto object-cover"
      />

      <div className="w-auto mx-auto flex flex-row">
        <p className="text-[16px] text-[#322F35] px-2 font-roboto">About</p>

        <p className="text-[16px] text-[#007F00] px-2  font-roboto">Expert Categories</p>
        <p className="text-[16px] text-[#007F00] px-2  font-roboto">Faq</p>

        <p className="text-[16px]  text-[#322F35] px-2  font-roboto">Contact Us</p>
      </div>

      <div className=" mx-auto  h-full  pl-12 w-1/3   flex flex-row  ">
        <p className="text-[16px] text-[#007F00] text-center mx-auto px-10 py-2 bg-white hover:bg-gray-100 font-roboto font-semibold rounded-full border border-[#322F35] cursor-pointer">
          Login
        </p>

        <p className="text-[16px] text-white text-center mx-auto px-10 py-2 bg-[#007F00]  hover:bg-[#158815]  font-roboto font-semibold rounded-full  cursor-pointer">
          Use a Goufer
        </p>
      </div>
    </div>
  );
};

export default Nav;
