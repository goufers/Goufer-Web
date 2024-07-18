// Mainbar.tsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// Import your async thunk action
import About from './About';
import WorkExperience from './WorkExperience';
import HonoursAwards from './HonoursAwards';
import Reviews from './Reviews';
import Media from './Media';
import { fetchData } from '../../Redux/GouferProfileSlice';

function Mainbar() {
  const dispatch = useDispatch();
  const [active, setActive] = useState("About");

  // Fetch data from Redux state
  const gouferData = useSelector((state: any) => state.goferProfile.profile); // Adjust according to your slice name

  useEffect(() => {
    // Fetch data when component mounts
    dispatch(fetchData());
  }, [dispatch]);

  // Handle loading state
  if (!gouferData || gouferData.status === 'loading') {
    return <div>Loading...</div>; // Replace with your loading indicator or message
  }

  // Handle error state
  if (gouferData.status === 'failed') {
    return <div>Error: {gouferData.error}</div>; // Replace with your error handling UI
  }

  // Menu items
  const Menu = [
    { title: "About" },
    { title: "Work Experience" },
    { title: "Honours & Awards" },
    { title: "Reviews" },
    { title: "Media" },
  ];

  // Render component based on active menu item
  return (
    <>
      <div className="mx-16 p-4 w-[650px] justify-center items-center h-auto flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788] mt-[40px]">
        <div className="mx-auto flex flex-row bg-white gap-6 w-auto items-center mt-[10px] border-[#007F00]">
          {Menu.map((item, index) => (
            <h2
              key={index}
              className={`mx-auto border-b-2 text-center items-center border-[#007F00] hover:text-[#007F00] cursor-pointer rounded-t-xl ${
                active === item.title ? "border-[#007F00] text-[#007F00] font-semibold" : "border-[#ffffff]"
              }`}
              onClick={() => setActive(item.title)}
            >
              {item.title}
            </h2>
          ))}
        </div>
        <div className="h-full w-full bg-white px-[20px] py-[20px]">
          {active === "About" && <About data={gouferData.about} />}
          {active === "Work Experience" && <WorkExperience data={gouferData.workExperience} />}
          {active === "Honours & Awards" && (
            <HonoursAwards honours={gouferData.honours} awards={gouferData.awards} />
          )}
          {active === "Reviews" && <Reviews reviewsData={gouferData.reviews} />}
          {active === "Media" && <Media mediaData={gouferData.media} />}
        </div>
      </div>
    </>
  );
}

export default Mainbar;
