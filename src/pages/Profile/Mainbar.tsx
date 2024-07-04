import { useState } from "react";
 import About from "./About";
import WorkExperience from "./WorkExperience";
import HonoursAwards from "./HonoursAwards";
import Reviews from "./Reviews";
import Media from "./Media";
import { useSelector } from "react-redux";
 
function Mainbar() {
  const [active, setActive] = useState("About");
  const gouferData = useSelector((state:any) => state.gouferProfile.profile);
  const Menu = [
    { title: "About" },
    { title: "Work Experience" },
    { title: "Honours & Awards" },
    { title: "Reviews" },
    { title: "Media" },
  ];

  return (
    <div className="mx-16 p-4 w-[650px] justify-center items-center h-auto  flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788] mt-[40px] ">
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
      {active === "About" && <About data={gouferData.about} />}
        {active === "Work Experience" && <WorkExperience data={gouferData.workExperience} />}
        {active === "Honours & Awards" && (
          <HonoursAwards honours={gouferData.honours} awards={gouferData.awards} />
        )}
        {active === "Reviews" && <Reviews reviewsData={gouferData.reviews} />}
        {active === "Media" && <Media mediaData={gouferData.media} />}
      </div>
    </div>
  );
}

export default Mainbar;






// import { useSelector } from 'react-redux';
// import { useState } from 'react';
// import About from './About';
// import WorkExperience from './WorkExperience';
// import HonoursAwards from './HonoursAwards';
// import Reviews from './Reviews';
// import Media from './Media';


// function Mainbar() {
//   const [active, setActive] = useState('About');
//   const gouferData = useSelector((state: any) => state.goufer.goferData) 

//   const Menu = [
//     { title: 'About' },
//     { title: 'Work Experience' },
//     { title: 'Honours & Awards' },
//     { title: 'Reviews' },
//     { title: 'Media' },
//   ];

//   return (
//     <div className="mx-16 p-4 w-[650px] justify-center items-center h-auto flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788] mt-[40px]">
//       <div className="mx-auto flex flex-row bg-white gap-6 w-auto items-center mt-[10px] border-[#007F00]">
//         {Menu.map((i, n) => (
//           <h2
//             className={`mx-auto border-b-2 text-center items-center border-[#007F00] hover:text-[#007F00] cursor-pointer rounded-t-xl ${
//               active === i.title
//                 ? 'border-[#007F00] text-[#007F00] font-semibold'
//                 : 'border-[#ffffff]'
//             }`}
//             key={n}
//             onClick={() => setActive(i.title)}
//           >
//             {i.title}
//           </h2>
//         ))}
//       </div>
//       <div className="h-full w-full bg-white px-[20px] py-[20px]">
//         {active === 'About' && <About data={gouferData.about} />}
//         {active === 'Work Experience' && <WorkExperience data={gouferData.workExperience} />}
//         {active === 'Honours & Awards' && (
//           <HonoursAwards honours={gouferData.honours} awards={gouferData.awards} />
//         )}
//         {active === 'Reviews' && <Reviews reviewsData={gouferData.reviews} />}
//         {active === 'Media' && <Media mediaData={gouferData.media} />}
//       </div>
//     </div>
//   );
// }

// export default Mainbar;






// import { useSelector } from "react-redux";
// import About from "./About";
// import WorkExperience from "./WorkExperience";
// import HonoursAwards from "./HonoursAwards";
// import Reviews from "./Reviews";
// import Media from "./Media";
// import { useState } from "react";

// function Mainbar() {
//   const [active, setActive] = useState("About");
//   const gouferData = useSelector((state) => state.gouferProfile.profile);

//   const Menu = [
//     { title: "About" },
//     { title: "Work Experience" },
//     { title: "Honours & Awards" },
//     { title: "Reviews" },
//     { title: "Media" },
//   ];

//   return (
//     <div className="mx-16 p-4 w-[650px] justify-center items-center h-auto flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788] mt-[40px]">
//       <div className="mx-auto flex flex-row bg-white gap-6 w-auto items-center mt-[10px] border-[#007F00]">
//         {Menu.map((i, n) => (
//           <h2
//             className={`{mx-auto border-b-2 text-center items-center border-[#007F00] hover:text-[#007F00] cursor-pointer rounded-t-xl
//               ${
//                 active === i.title
//                   ? "border-[#007F00] text-[#007F00] font-semibold"
//                   : "border-[#ffffff]"
//               }
//               `}
//             key={n}
//             onClick={() => setActive(i.title)}
//           >
//             {i.title}
//           </h2>
//         ))}
//       </div>
//       <div className="h-full w-full bg-white px-[20px] py-[20px]">
//         {active === "About" && <About data={gouferData.about} />}
//         {active === "Work Experience" && <WorkExperience data={gouferData.workExperience} />}
//         {active === "Honours & Awards" && (
//           <HonoursAwards honours={gouferData.honours} awards={gouferData.awards} />
//         )}
//         {active === "Reviews" && <Reviews reviewsData={gouferData.reviews} />}
//         {active === "Media" && <Media mediaData={gouferData.media} />}
//       </div>
//     </div>
//   );
// }

// export default Mainbar;
