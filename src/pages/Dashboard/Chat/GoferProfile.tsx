/* eslint-disable @typescript-eslint/no-explicit-any */
import { IoCloseCircleOutline } from "react-icons/io5";
import { FaCircle } from "react-icons/fa6";
import { TbCurrentLocation } from "react-icons/tb";
import PUBLIC_ROUTES from "../../../utils/PublicRoutes";
import { useState, useRef, useEffect } from "react";

interface componentState {
  setShowGouferProfile: (item: any) => void;
}
const GoferProfile = ({ setShowGouferProfile }: componentState) => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  // const handleClickOutside = (event: any) => {
  //   if (modalRef.current && !modalRef.current.contains(event.target)) {
  //     setIsOpen(false);
  //   }
  // };

  const handleClickOutside = (event: any) => {
    const node = modalRef.current as HTMLElement | null;
    if (node && !node.contains(event.target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div
      ref={modalRef}
      className={`mx-0 py-2 absolute top-16 right-2 w-[340px]  bg-white   rounded-b-md shadow  h-auto   flex-col  items-center  ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <h3 className="ml-auto px-4 justify-end" onClick={() => setShowGouferProfile(false)}>
        <IoCloseCircleOutline size={24} color="red" />
      </h3>
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
