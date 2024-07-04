import { useState } from "react";
import {
  MdKeyboardArrowDown,
  MdOutlineCall,
  MdOutlineChatBubbleOutline,
  MdOutlineSearch,
} from "react-icons/md";
import { TbDotsVertical, TbVideo } from "react-icons/tb";
import { BsPin, BsThreeDotsVertical } from "react-icons/bs";
import { GrEmoji } from "react-icons/gr";
import { CiMicrophoneOff } from "react-icons/ci";
<<<<<<< HEAD
import { RiUserForbidLine } from "react-icons/ri";
import { LiaUserSlashSolid } from "react-icons/lia";
import { LuDelete } from "react-icons/lu";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { BiTask } from "react-icons/bi";
import { AiOutlineExclamationCircle } from "react-icons/ai";
=======
import { AiOutlineExclamationCircle } from "react-icons/ai";
import GoferProfile from "./GoferProfile";
import SendFileOptions from "./SendFileOptions";
import Icons from "./Icons";
import ChatOptions from "./ChatOptions";
>>>>>>> 1cc2dfadfa6d1952ab5b3a938109cc38ef7e705c

const ChatContent = () => {
  const [showChatOptions, setShowChatOptions] = useState(false);
  const [showGouferProfile, setShowGouferProfile] = useState(false);
  const [showSendFileOptions, setShowSendFileOptions] = useState(false);
  const [showIcons, setShowIcons] = useState(false);
  const onlineChats = [
    { image: "/images/Mask group.svg", name: "James Christopher" },
    { image: "/images/Mask group.svg", name: "James Christopher" },
    { image: "/images/Mask group.svg", name: "James Christopher" },
    { image: "/images/Mask group.svg", name: "James Christopher" },
    { image: "/images/Mask group.svg", name: "James Christopher" },
    { image: "/images/Mask group.svg", name: "James Christopher" },
  ];

  const Chats = [
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "just now",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "just now",
    },

    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "just now",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "just now",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "just now",
    },

    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "1/2/24",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "yesterday",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "1/2/24",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "yesterday",
    },
    {
      image: "/images/Mask group.svg",
      name: "James Christopher",
      message: "hellow how are you doing today",
      time: "1/2/24",
    },
  ];

  // const [selectedChat, setSelectedChat] = useState(0);

  const chatMessages = [
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in diam pellentesque placerat ultricies.",
      user: "me",
      time: "10:28pm",
    },
    {
      message: "Lorem consectetur adipiscing elit. In in diam  ultricies.",
      user: "other",
      time: "10:28pm",
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur   placerat ultricies.",
      user: "me",
      time: "10:28pm",
    },
    {
      message: "Lorem ipsum dolor sit amet,  lacerat ultricies.",
      user: "other",
      time: "10:28pm",
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur.",
      user: "me",
      time: "10:28pm",
    },
    {
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in diam pellentesque placerat ultricies.",
      user: "other",
      time: "10:28pm",
    },
  ];

  return (
    <div className="w-3/4 h-screen mt-16 ">
      <div className="w-full h-auto m-1 p-1 flex flex-row bg-white rounded">
        {/* chat contacts */}

        <div className="w-[290px] h-screen  flex flex-col border border-[#c3c3c459]  bg-white rounded-md">
          <div className="w-full h-auto p-2 px-2 flex flex-row border-b border-gray-400 rounded-t">
            <h3 className="mx-1 justify-start font-roboto text-[14px] text-[#49454F]  flex flex-row items-center">
              All chat <MdKeyboardArrowDown color="#49454F" size={25} />
            </h3>

            <div className="ml-auto justify-end w-2/5 flex flex-row">
              <img
                src="/images/lets-icons_search-alt-light.svg"
                alt="goufer logo"
                className=" mx-2 w-[21px] h-[21px] object-cover"
              />
              <TbDotsVertical color="#49454F" size={22} />
            </div>
          </div>
          {/* Online Chats */}
          <p className="  mx-2 my-3  text-[14px] flex flex-row items-center   text-[#49454F] ">
            Available <span className="mx-1 p-[4px] bg-[#28DA24] rounded-full"></span>
          </p>
          <div className="px-0.5 w-full h-auto overflow-x-scroll">
            <div className="w-max py-2 h-auto  flex flex-row  ">
              {onlineChats &&
                onlineChats.map((d, i) => (
                  <div
                    className="mx-1 w-[40px] h-auto relative flex flex-col rounded-full bg-blue-gray-400 "
                    key={i}
                  >
                    <img
                      src={d.image}
                      alt=""
                      className="w-[40px] h-[40px] rounded-full object-cover"
                    />

                    <span className="absolute top-0 right-1 p-[4px] bg-[#28DA24] rounded-full"></span>
                  </div>
                ))}
            </div>
          </div>

          <div className="w-full pb-16 h-3/4 overflow-y-scroll">
            <div className="w-full h-auto  ">
              {/*   Chats */}
              <h3 className="py-1.5 pt-2 mx-2 justify-start font-roboto text-[13px] text-[#49454F] font-bold flex flex-row items-center">
                <BsPin color="#49454F" size={14} /> Pined Chat
              </h3>
              <div className="w-full h-auto flex flex-col justify-start">
                {Chats &&
                  Chats.slice(0, 3).map((d, i) => (
                    <div
                      className=" py-2.5 px-1 mx-auto w-full h-auto   flex flex-row items-center cursor-pointer border border-[#c3c3c413] hover:bg-[#27da2462] rounded-sm"
                      key={i}
                    >
                      <img
                        src={d.image}
                        alt=""
                        className="w-[36px] h-[36px] rounded-full object-cover"
                      />
                      <div className="  w-full h-auto flex flex-col">
                        <div className="w-full h-auto flex flex-row">
                          <p className=" mx-2   font-roboto text-[12px] text-[#000000] font-bold  ">
                            {d.name}
                          </p>
                          <p className="ml-auto pr-1 flex text-[10px] justify-end  ">
                            {d.time}
                          </p>
                        </div>
                        <div className="truncate w-full h-auto flex flex-row">
                          <p className=" w-[160px] truncate mx-2   font-roboto text-[10px] text-[#49454F]    ">
                            {d.message} twtwtw4tw4t34y356563
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              {/*   Chats */}
              <h3 className="py-1.5 mx-2 justify-start font-roboto text-[13px] text-[#49454F] font-bold flex flex-row items-center">
                <MdOutlineChatBubbleOutline color="#49454F" size={14} className="mx-1" />
                Recent Chat
              </h3>
              <div className="w-full h-auto flex flex-col justify-start">
                {Chats &&
                  Chats.map((d, i) => (
                    <div
                      className=" py-2.5 px-1 mx-auto w-full h-auto   flex flex-row items-center cursor-pointer border border-[#c3c3c413] hover:bg-[#27da2462] rounded-sm"
                      key={i}
                    >
                      <img
                        src={d.image}
                        alt=""
                        className="w-[36px] h-[36px] rounded-full object-cover"
                      />
                      <div className="  w-full h-auto flex flex-col">
                        <div className="w-full h-auto flex flex-row">
                          <p className=" mx-2   font-roboto text-[12px] text-[#49454F] font-bold  ">
                            {d.name}
                          </p>
                          <p className="ml-auto pr-1 flex text-[10px] justify-end  ">
                            {d.time}
                          </p>
                        </div>
                        <div className="truncate w-full h-auto flex flex-row">
                          <p className=" w-[160px] truncate mx-2   font-roboto text-[10px] text-[#49454F]    ">
                            {d.message} twtwtw4tw4t34y356563
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        {/* chat area */}
        <div className="w-3/4 h-full flex flex-col bg-white rounded">
          {/* Chat Space  Header   */}
          <div className=" w-full h-auto relative p-6 py-2 flex flex-row items-center border-b border-[#d9eed9]  ">
            <div className="mx-auto w-[170px] flex flex-row ">
              <img
                src="/images/Mask group.svg"
                alt=""
                className="ml-2 w-[48px] h-[48px] rounded-full object-cover"
              />
              <div className="w-auto mx-2  flex flex-col">
                <h2 className=" truncate w-full text-[16px]   font-bold   text-[#322F37]">
                  Devon Lane
                </h2>
                <p className="truncate w-full   text-[14px] text-center   text-[#74788D]">
                  Last Seen, 11:17 AM
                </p>
              </div>
            </div>
            {/* Empty space */}
            <div className="mx-auto  w-3/5 p-2 rounded  h-auto flex flex-row  items-center "></div>

            <div className=" mx-auto p-2 flex flex-row items-center">
              <MdOutlineSearch
                size={22}
                color="black"
                className="mx-1.5 rounded-full  cursor-pointer "
              />
              <TbVideo
                size={22}
                color="black"
                className="mx-1.5 rounded-full cursor-pointer "
              />

<<<<<<< HEAD
              <MdOutlineCall size={22} color="black" className="mx-1.5 rounded-full " />
              <AiOutlineExclamationCircle
                size={22}
                color="black"
                className="mx-1.5 rounded-full "
=======
              <MdOutlineCall
                size={22}
                color="black"
                className="mx-1.5 rounded-full cursor-pointer "
              />
              <AiOutlineExclamationCircle
                size={22}
                color="black"
                className="mx-1.5 rounded-full cursor-pointer "
                onClick={() => setShowGouferProfile(!showGouferProfile)}
>>>>>>> 1cc2dfadfa6d1952ab5b3a938109cc38ef7e705c
              />
              <BsThreeDotsVertical
                size={22}
                color="black"
                className="mx-1.5 rounded-full cursor-pointer "
                onClick={() => setShowChatOptions(!showChatOptions)}
              />
            </div>
            {/* options */}
            {showChatOptions && <ChatOptions />}

            {showGouferProfile && <GoferProfile setShowGouferProfile={setShowGouferProfile} />}
          </div>

          <div className="w-full   h-full bg-chat-background bg-cover">
            <div className="w-full h-auto overflow-y-scroll">
              <div className=" w-full h-[470px] flex flex-col ">
                {chatMessages.map((d, i) => (
                  <div
                    className={`w-full h-auto flex ${
                      d.user !== "me" ? "justify-end" : "justify-start"
                    } `}
                    key={i}
                  >
                    <div
                      className={`w-2/5 h-auto flex flex-col  ${
                        d.user !== "me" ? "justify-start" : "justify-end"
                      }`}
                    >
                      <p
                        className={`text-[13px] font-light m-6 p-3 pb-1 text-black shadow-md  ${
                          d.user !== "me"
                            ? "bg-[#affcaf]  rounded-t-lg rounded-l-lg"
                            : " bg-[#f3f3f3]  rounded-b-lg rounded-r-lg"
                        }`}
                      >
                        {d.message}
                        <p className=" text-[10px] m-1 text-right text-[#222222b0] ">
                          {d.time}
                        </p>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full h-auto p-2 flex flex-row bg-[#F9F9F9] items-center">
              <h1
                className="bg-white p-2 rounded-full mx-auto cursor-pointer"
                onClick={() => setShowSendFileOptions(!showSendFileOptions)}
              >
                <BsThreeDotsVertical
                  size={22}
                  color="black"
                  className="m-auto rounded-full "
                />
              </h1>

              <h1
                className="bg-white p-2 rounded-full mx-auto cursor-pointer"
                onClick={() => setShowIcons(!showIcons)}
              >
                <GrEmoji size={22} color="black" className="m-auto rounded-full " />
              </h1>
              <h1 className="bg-white p-2 rounded-full mx-auto cursor-pointer">
                <CiMicrophoneOff size={22} color="black" className="m-auto rounded-full " />
              </h1>
              <div className="mx-auto py-2 w-8/12 h-auto items-center flex flex-row   rounded-md bg-[#feffff]">
                <input
                  type="text"
                  name=""
                  placeholder="Type your message"
                  id=""
                  className="mx-2 w-4/6 text-black bg-white outline-none"
                />
              </div>
              <img src="/images/Frame 197.svg" alt="" className=" mx-auto w-[42px] h-[42px]" />
              {showSendFileOptions && <SendFileOptions />}
              {showIcons && <Icons showIcons={showIcons} setShowIcons={setShowIcons} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
