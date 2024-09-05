/* eslint-disable @typescript-eslint/no-explicit-any */
// import { FaStar } from "react-icons/fa";
// import { useState } from "react";
// import { useSelector } from "react-redux";

import { useState } from "react";
import { FaStar } from "react-icons/fa";

// const Sidebar = () => {
//   // const [rating, setRating] = useState(null);
//   const gouferData = useSelector((state:any) => state.gouferProfile.profile);
//   const [hover, setHover] = useState<any>(null);

//   return (
//     <div className="flex w-[250px] h-auto  ml-[100px] bg-white border rounded-xl hover-shadow-md shadow-md">
//       <div className="flex flex-col pt-[10px]">
//         <img
//           src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717508622/Mask_group_t0yya0.svg"
//           alt="main color"
//           className="w-[100px] h-[100px] ml-[80px] border-4 rounded-full border-[#E6F2E6] object-contain"
//         />
//         <h1 className="text-[20px] font-semibold text-center ml-[50px]"> {gouferData.name || "Azeez Ibrahim"}</h1>
//         <div className="mx-auto flex flex-row gap-[16px] justify-center items-center text-[12px] ml-[40px]">
//           <div className="w-2 h-2 rounded-full bg-[#007F00]"></div>
//           <p className="text-[#007F00] border-r-2 border-[#a4e0a4] pr-2">{gouferData.availability || "Available"}</p>

//           <img
//             src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717594238/material-symbols-light_my-location-outline_lontt0.svg"
//             alt="shopimage"
//           />
//           <p className="py-1 text-[14px]">{gouferData.location || "Lagos"}</p>
//         </div>
//         <div className="border-t-2 border-[#E6F2E6] border-b-2 w-[200px] ml-[20px] py-2 gap-1">

//           <h1 className="text-[14px] text-[#322F37] font-bold font-Roboto">Information</h1>

//           <div className="flex flex-col w-[90px] focus-within:outline-0 focus-within:border-0  mt-3">
//             <p className=" text-[#322F37] text-[14px] ">Gender</p>

//             <p className=" text-[#322F37]  text-[14px] pt-1">{gouferData.gender || "Male"}</p>
//           </div>

//           <div className="flex flex-col mt-4">
//           <h1 className=" text-[#322F37] text-[14px]">Ratings</h1>
//           <div className="flex justify-between pt-2">
//           <div className="flex flex-row justify-normal ">
//       {[...Array(5)].map((_, index) => {
//         const currentRating = index + 1;
//         return (
//           <label key={index}>
//             <input
//               type="radio"
//               name="rating"
//               value={currentRating}
//               className="hidden"
//               readOnly
//             />
//             <FaStar
//               className="cursor-default"
//               size={18}
//               color="green"
//             />
//           </label>
//         );
//       })}

//       <p className="pl-2">{gouferData.rating || 5}</p>
//            </div>

//           </div>
//           </div>

//           <div className="flex flex-col mt-4">
//           <h1 className=" text-[#322F37] text-[14px]">Statistics</h1>
//           <p className="mt-1 text-[#322F37] text-[14px]">
//             <span className="text-[#007F00]">{gouferData.tasksCompleted || "50+"}</span>Tasks Completed
//           </p>

//           <div className="flex flex-col pt-1">
//           <p className="text-[#322F37]  text-[14px]">Joined</p>
//           <p className="text-[#007f00] text-[14px]">{gouferData.joined || "2024"}</p>
//           </div>

//           </div>

//         </div>
//         <div className="flex flex-row justify-center gap-1 mt-1 py-1">
//           <img
//             src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718014253/Union_2_mbgnvb.png"
//             className="w-3 h-3"
//             alt="main logo"
//           />
//           <p className="text-xs  text-[#322F37]   text-center">
//             Goufer <span className="text-[#007F00] ">Verified</span> User.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */
import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import About from "./About";
import WorkExperience from "./WorkExperience";
import HonoursAwards from "./HonoursAwards";
import Media from "./Media";
import Reviews from "./Reviews";

interface SidebarProps {
  gouferData: any;
}

const Sidebar: React.FC<SidebarProps> = ({ gouferData }) => {
  const [active, setActive] = useState("About");

  const Menu = [
    { title: "About" },
    { title: "Work Experience" },
    { title: "Honours & Awards" },
    { title: "Reviews" },
    { title: "Media" },
  ];
  // Extracting necessary data with default values
  const firstName = gouferData?.custom_user?.first_name || "First";
  const lastName = gouferData?.custom_user?.last_name || "User";
  const name = `${firstName} ${lastName}`;
  const availability = gouferData?.availability || "Available";
  const location = gouferData?.custom_user?.address?.city || "City";
  const gender = gouferData?.custom_user?.gender === "F" ? "Female" : "Male";
  const rating = gouferData?.rating || 4.5;
  const joined = gouferData?.custom_user?.date_joined || "2024";
  const verifiedUser = gouferData?.custom_user?.phone_verified ? "Verified" : "Not Verified";

  // Use a default image if gouferData.custom_user.profile_picture is not available
  const profileImageUrl =
    gouferData?.custom_user?.profile_picture ||
    "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717508622/Mask_group_t0yya0.svg";

  return (
    <div className="flex flex-row w-[1200px] mx-auto justify-between mt-9">
      <div className="flex w-[250px] h-auto ml-[110px] bg-white border rounded-xl hover-shadow-md shadow-md ">
        <div className="flex flex-col pt-[10px]">
          <img
            src={profileImageUrl}
            alt="Profile"
            className="w-[100px] h-[100px] ml-[80px] border-4 rounded-full border-[#E6F2E6] object-contain"
          />
          <h1 className="text-[20px] font-semibold text-center ml-[50px]">{name}</h1>
          <div className="mx-auto flex flex-row gap-[16px] justify-center items-center text-[12px] ml-[40px]">
            <div className="w-2 h-2 rounded-full bg-[#007F00]"></div>
            <p className="text-[#007F00] border-r-2 border-[#a4e0a4] pr-2">{availability}</p>
            <img
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717594238/material-symbols-light_my-location-outline_lontt0.svg"
              alt="Location Icon"
            />
            <p className="py-1 text-[14px]">{location}</p>
          </div>

          <div className="border-t-2 border-[#E6F2E6] border-b-2 w-[200px] ml-[20px] py-2 gap-1">
            <h1 className="text-[14px] text-[#322F37] font-bold font-Roboto">Information</h1>
            <div className="flex flex-col w-[90px] focus-within:outline-0 focus-within:border-0 mt-3">
              <p className="text-[#322F37] text-[14px]">Gender</p>
              <p className="text-[#322F37] text-[14px] pt-1">{gender}</p>
            </div>

            <div className="flex flex-col mt-4">
              <h1 className="text-[#322F37] text-[14px]">Ratings</h1>
              <div className="flex justify-between pt-2">
                <div className="flex flex-row justify-normal">
                  {[...Array(5)].map((_, index) => {
                    const isFilled = index < Math.floor(rating);
                    const isHalfFilled = index < rating && index + 1 > rating;
                    return (
                      <span key={index}>
                        {isFilled ? (
                          <FaStar size={18} color="green" className="cursor-default" />
                        ) : isHalfFilled ? (
                          <FaStarHalfAlt size={18} color="green" className="cursor-default" />
                        ) : (
                          <FaRegStar size={18} color="lightgray" className="cursor-default" />
                        )}
                      </span>
                    );
                  })}
                  <p className="pl-2">{rating.toFixed(1)}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col mt-4">
              <h1 className="text-[#322F37] text-[14px]">Statistics</h1>
              <p className="flex flex-row mt-1 text-[#322F37] text-[14px] gap-2">
                <span className="text-[#007F00]">{gouferData?.tasksCompleted || "0"}</span>
                <p>Tasks Completed</p>
              </p>
              <div className="flex flex-col pt-2">
                <p className="text-[#322F37] text-[14px]">Joined</p>
                <p className="text-[#007f00] text-[14px]">{joined}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-1 mt-1 py-1">
            <img
              src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718014253/Union_2_mbgnvb.png"
              className="w-3 h-3"
              alt="Main Logo"
            />
            <p className="text-xs text-[#322F37] text-center">
              Goufer <span className="text-[#007F00]">{verifiedUser}</span> User.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto p-4 w-[650px]  justify-center items-center h-auto  flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788] mt-[40px] ">
        <div className="mx-auto flex flex-row bg-white gap-6  w-auto items-center  mt-[10px] border-[#007F00]   ">
          {Menu.map((i, n) => (
            <h2
              className={`{mx-auto border-b-2 text-center items-center border-[#007F00] hover:text-[#007F00] cursor-pointer rounded-t-xl
          ${
            active == i.title
              ? "border-[#007F00] text-[#007F00] font-semibold"
              : "border-[#ffffff]"
          }
          `}
              key={n}
              onClick={() => setActive(i.title)}
            >
              {i.title}
            </h2>
          ))}
        </div>
        <div className=" h-full   w-full   bg-white   px-[20px] py-[20px] ">
          {active === "About" && <About data={gouferData?.bio} />}
          {active === "Work Experience" && (
            <WorkExperience data={gouferData?.workExperience} />
          )}
          {active === "Honours & Awards" && (
            <HonoursAwards honours={gouferData?.honours} awards={gouferData.awards} />
          )}
          {active === "Reviews" && <Reviews reviewsData={gouferData?.reviews} />}
          {active === "Media" && <Media mediaData={gouferData?.media} />}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
