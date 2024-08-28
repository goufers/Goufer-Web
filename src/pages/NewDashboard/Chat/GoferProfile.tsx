import { FaCircle } from "react-icons/fa6";
import { TbCurrentLocation } from "react-icons/tb";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";

const GoferProfile = () => {
  return (
    <div className="mx-0 py-2  w-1/4   bg-white   rounded-b-md shadow  h-auto flex  flex-col  items-center ">
      <div className="w-full h-auto flex flex-col items-center">
        <img
          src="/images/Mask group.svg"
          alt=""
          className="mx-auto w-[90px] h-[90px] object-cover rounded-full"
        />
        <h3 className="mx-auto text-center text-[20px] text-[#322F37] font-bold">
          Emmanuel Akinwale
        </h3>
        <div className="w-auto h-auto flex flex-row py-6 gap-4">
          <h3 className="mx-auto px-4 text-[12px] text-green-600 flex flx-row items-center border-r-2 border-gray-700">
            <FaCircle color="#007F00" size={15} className="mx-2" />
            Available
          </h3>
          <h3 className="mx-auto text-[12px] text-gray-600 flex flx-row items-center">
            <TbCurrentLocation color="#007F00" size={17} className="mx-2" />
            Lagos, Nigeria
          </h3>
        </div>

        <a
          href={PUBLIC_ROUTES.GOUFER_PROFILE}
          className="w-10/12 h-auto py-2 rounded-3xl border border-[#007F00] text-[#007F00]  hover:text-white  bg-white hover:bg-[#007F00] items-center cursor-pointer"
        >
          <p className="  text-center text-14">View Profile</p>
        </a>
      </div>
    </div>
  );
};

export default GoferProfile;
