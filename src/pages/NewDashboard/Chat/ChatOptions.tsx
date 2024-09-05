/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import { BiTask } from "react-icons/bi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { LiaUserSlashSolid } from "react-icons/lia";
import { LuDelete } from "react-icons/lu";
import { RiUserForbidLine } from "react-icons/ri";

const ChatOptions = () => {
  const chatOptions = [
    {
      title: "Close chat",
      icon: <IoIosCloseCircleOutline size={23} color="#595c59" className="mx-2" />,
    },

    {
      title: "Create task",
      icon: <BiTask size={23} color="#595c59" className="mx-2" />,
    },
    { title: "Clear chat", icon: <LuDelete size={23} color="#595c59" className="mx-2" /> },
    {
      title: "Report",
      icon: <LiaUserSlashSolid size={23} color="#595c59" className="mx-2" />,
    },
    {
      title: "Block",
      icon: <RiUserForbidLine size={23} color="#595c59" className="mx-2" />,
    },
  ];
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
      className={`mx-0 py-2 absolute top-16 right-2 w-[140px]  bg-white   rounded-b-md shadow  h-auto   flex-col  items-center ${
        isOpen ? "flex" : "hidden"
      } `}
    >
      {chatOptions.map((d, i) => (
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

export default ChatOptions;
