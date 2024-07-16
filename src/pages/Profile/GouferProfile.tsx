import { useEffect } from "react";
import { fetchGouferProfile } from "../../Redux/GouferProfileSlice";

import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import Mainbar from "./Mainbar";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";

const GouferProfile = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGouferProfile());
  }, [dispatch]);
  return (
    <div className="w-full items-center">
      <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427096/Rectangle_10_1_swotsr.png)] bg-contain w-full h-[181px] relative ">
        <h1 className="text-left text-[white] text-[32px] font-bold ml-[150px] pt-[20px]">
          Goufer Details
        </h1>
        <p className="text-left text-white text-[16px] ml-[150px] pt-[20px]">
          Home / Goufer Profile
        </p>

        <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427098/Rectangle_7_hitjl4.svg)] bg-contain w-[636px] h-[181px] bottom-[0px] absolute right-[0px]"></div>
      </div>
      <div className="flex flex-row justify-end items-end mr-[100px] gap-4 mt-[20px]">
        <button className="bg-white text-[#007F00] border border-[#007f00] rounded-full px-[25px] py-[10px] hover:bg-[#dfffdf] ">
          Add Favorite
        </button>
        <a
          href={PUBLIC_ROUTES.CHAT}
          className="bg-[#007f00] text-white   hover:bg-[#287028] rounded-full px-[25px] py-[10px] hover:text-white "
        >
          Contact Goufer
        </a>
      </div>
      <div className="flex flex-row items-center">
        <Sidebar />
        <Mainbar />
      </div>
    </div>
  );
};

export default GouferProfile;
