import { FaStar } from "react-icons/fa";
import { useState } from "react";


const Sidebar = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex w-[250px] h-[400px] mt-[30px] ml-[100px] bg-white border rounded-xl hover-shadow-md shadow-md">
      <div className="flex flex-col pt-[10px]">
        <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717508622/Mask_group_t0yya0.svg" alt="main color" className="w-[100px] h-[100px] ml-[80px] border-4 rounded-full border-[#E6F2E6] object-contain" />
        <h1 className="text-[20px] font-semibold text-center ml-[50px]">Azeez Ibrahim</h1>
        <div className="flex flex-row gap-[16px] justify-center items-center text-[12px] ml-[40px]">
          <div className="w-2 h-2 rounded-full bg-[#007F00]"></div>
          <p className="text-[#007F00] border-r-2 border-[#a4e0a4] pr-2">Available </p>
          
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717594238/material-symbols-light_my-location-outline_lontt0.svg" alt="shopimage" />
          <p>Lagos</p>
        </div>
        <div className="border-t-2 border-[#E6F2E6] border-b-2 w-[200px] ml-[20px] py-2">
            <h1>Information</h1>
            <div className="flex flex-col w-[90px] focus-within:outline-0 focus-within:border-0 ">
            <label htmlFor="">Gender</label>
            <select name="gender" id="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            </div>
            <p className="text-[14px]">Ratings</p>
            <div className="flex flex-row justify-normal" > 
               {[...Array(5)].map(( star ,index:any) => {
                const currentRating = index + 1;
                 return (
                 
                    <label htmlFor="">
                    <input 
                    type="radio"
                    name="rating"
                    value={currentRating} 
                    className="hidden"
                    // onClick={() => setRating(currentRating)}
                    
                     />
                    <FaStar 
                    className="cursor-pointer" 
                    size={18} 
                    color={currentRating <= ( hover || rating ) ? "#007f00" : "grey"}
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)} 
                    onClick={() => setRating(currentRating)}
                   />
                   </label>
                   
                   
                 );
              })}
            
            </div>
            <p className="text-[14px]">Statistics</p>
            <p className="text-[14px]"><span className="text-[#007F00]">50+</span>Tasks Completed</p>
            <p className="text-[14px]">Joined</p>
            <p className="text-[#007f00] text-[14px]">2024</p>

        </div>
        <div className="flex flex-row justify-center gap-1 pt-1">
          <img src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718014253/Union_2_mbgnvb.png" className="w-3 h-3" alt="main logo" />
          <p className="text-xs text-center">Goufer <span className="text-[#007F00] ">Verified</span> User.</p>
        </div>

      </div>
    </div>
  );
}

export default Sidebar;
