/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { GrDocumentText } from "react-icons/gr";
import { IoMdContact } from "react-icons/io";
import { IoImagesOutline } from "react-icons/io5";
import { LuDelete } from "react-icons/lu";
import { MdOutlineLocationOn, MdOutlinePhotoCamera } from "react-icons/md";
import { RxSpeakerLoud } from "react-icons/rx";

const SendFileOptions = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef(null);

  const handleClickOutside = (event: any) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fileOptions = [
    {
      title: "Document",
      icon: <GrDocumentText size={23} color="#595c59" className="mx-2" />,
    },
    {
      title: "Camera",
      icon: <MdOutlinePhotoCamera size={23} color="#595c59" className="mx-2" />,
    },
    { title: "Clear chat", icon: <LuDelete size={23} color="#595c59" className="mx-2" /> },
    {
      title: "Gallery",
      icon: <IoImagesOutline size={23} color="#595c59" className="mx-2" />,
    },
    {
      title: "Audio",
      icon: <RxSpeakerLoud size={23} color="#595c59" className="mx-2" />,
    },
    {
      title: "Location",
      icon: <MdOutlineLocationOn size={23} color="#595c59" className="mx-2" />,
    },
    {
      title: "Contact",
      icon: <IoMdContact size={23} color="#595c59" className="mx-2" />,
    },
  ];

  return (
    <div
      ref={modalRef}
      className={`mx-0 py-2 absolute bottom-16 left-2 w-[160px]  bg-white   rounded-md shadow  h-auto   flex-col  items-center ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      {fileOptions.map((d, i) => (
        <div
          className="h-auto w-full px-2  py-2 flex flex-row hover:bg-[#7df5a142] cursor-pointer"
          key={i}
        >
          {d.icon}
          <p className="text-[14px] text-black ">{d.title}</p>
        </div>
      ))}
    </div>
  );
};

export default SendFileOptions;
