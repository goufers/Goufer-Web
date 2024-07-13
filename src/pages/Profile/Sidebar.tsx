
import { useSelector } from 'react-redux';

import { FaStar } from 'react-icons/fa';
import { RootState } from '../../Redux/store';

const Sidebar = () => {
  const gouferData = useSelector((state: RootState) => state.gouferProfile.profile);

 
  if (!gouferData) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="flex w-[250px] h-auto ml-[100px] bg-white border rounded-xl hover-shadow-md shadow-md">
      <div className="flex flex-col pt-[10px]">
        <img
          src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717508622/Mask_group_t0yya0.svg"
          alt="main color"
          className="w-[100px] h-[100px] ml-[80px] border-4 rounded-full border-[#E6F2E6] object-contain"
        />
        <h1 className="text-[20px] font-semibold text-center ml-[50px]">
          {gouferData.name || "Azeez Ibrahim"}
        </h1>
        <div className="mx-auto flex flex-row gap-[16px] justify-center items-center text-[12px] ml-[40px]">
          <div className="w-2 h-2 rounded-full bg-[#007F00]"></div>
          <p className="text-[#007F00] border-r-2 border-[#a4e0a4] pr-2">
            {gouferData.availability || "Available"}
          </p>

          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717594238/material-symbols-light_my-location-outline_lontt0.svg"
            alt="shopimage"
          />
          <p className="py-1 text-[14px]">{gouferData.location || "Lagos"}</p>
        </div>
        <div className="border-t-2 border-[#E6F2E6] border-b-2 w-[200px] ml-[20px] py-2 gap-1">
          <h1 className="text-[14px] text-[#322F37] font-bold font-Roboto">Information</h1>
          <div className="flex flex-col w-[90px] focus-within:outline-0 focus-within:border-0 mt-3">
            <p className="text-[#322F37] text-[14px]">Gender</p>
            <p className="text-[#322F37] text-[14px] pt-1">{gouferData.gender || "Male"}</p>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-[#322F37] text-[14px]">Ratings</h1>
            <div className="flex justify-between pt-2">
              <div className="flex flex-row justify-normal ">
                {[...Array(5)].map((_, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        className="hidden"
                        readOnly
                      />
                      <FaStar className="cursor-default" size={18} color="green" />
                    </label>
                  );
                })}
                <p className="pl-2">{gouferData.rating || 5}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <h1 className="text-[#322F37] text-[14px]">Statistics</h1>
            <p className="mt-1 text-[#322F37] text-[14px]">
              <span className="text-[#007F00]">
                {gouferData.tasksCompleted || "50+"}
              </span>
              Tasks Completed
            </p>
            <div className="flex flex-col pt-1">
              <p className="text-[#322F37] text-[14px]">Joined</p>
              <p className="text-[#007f00] text-[14px]">{gouferData.joined || "2024"}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row justify-center gap-1 mt-1 py-1">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718014253/Union_2_mbgnvb.png"
            className="w-3 h-3"
            alt="main logo"
          />
          <p className="text-xs text-[#322F37] text-center">
            Goufer <span className="text-[#007F00]">{gouferData.Verified || "Verified"}</span> User.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
