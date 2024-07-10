const DashboardNav = () => {
  return (
    <div className="w-full h-auto py-2 fixed   left-0 right-0 top-0 bg-white flex flex-row gap-2 items-center">
      <a href="/dashboard" className="w-auto h-auto">
        <img
          src="/images/mainlogo.png"
          alt="goufer logo"
          className="ml-5 md:ml-10 py-auto w-28 md:w-44 h-auto object-cover"
        />
      </a>
      <div className="  mx-auto pr-10 w-11/12 flex flex-row items-center justify-end">
        <div className="mx-2  p-2  w-auto h-auto rounded-full bg-[#F9F9F9]   ">
          <img
            src="/images/lets-icons_search-alt-light.svg"
            alt="goufer logo"
            className="  w-[26px] h-[26px] object-cover"
          />
        </div>
        <div className="mx-2  p-2  w-auto h-auto rounded-full bg-[#F9F9F9] relative ">
          <img
            src="/images/bubble-chat.svg"
            alt="goufer logo"
            className="  w-[26px] h-[26px] object-cover"
          />{" "}
          <span className="absolute bottom-7 left-7 px-[8px] py-[3px] rounded-full bg-[#007F00] text-white text-xs">
            3
          </span>
        </div>
        <div className="mx-2  p-2  w-auto h-auto rounded-full bg-[#F9F9F9] relative ">
          <img
            src="/images/notification-02.svg"
            alt="goufer logo"
            className="  w-[26px] h-[26px] object-cover"
          />
          <span className="absolute bottom-7 left-7 px-[8px] py-[3px] rounded-full bg-[#007F00] text-white text-xs">
            6
          </span>
        </div>
        <div className="mx-2 w-auto h-auto flex flex-row items-center ">
          <img
            src="/images/Mask group.svg"
            alt="goufer logo"
            className="mx-3  py-auto w-12 h-auto object-cover "
          />
          <img
            src="/images/Vector.svg"
            alt="goufer logo"
            className="mx-1 py-1 px-0.5  bg-[#F9F9F9] w-6 h-auto object-cover rounded-full "
          />
        </div>
      </div>
    </div>
  );
};

export default DashboardNav;
