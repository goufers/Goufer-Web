// const WorkExperience = () => {
//   return (
//     <div className="w-fit h-fit mx-auto my-[16px]">
//       <h1 className="font-semibold text-[13px] ">Expertise</h1>
//       <div className="flex flex-row justify-center gap-8  border-b border-[#E6F2E6] w-full py-3 text-[12px] ">
//         <div className="rounded-full bg-[#E6F2E6] text-[#007F00]  px-4 py-2  cursor-pointer">
//           Food & Beverage
//         </div>
//         <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
//           Nutritionist
//         </div>
//         <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
//           Agriculture
//         </div>
//         <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
//           Animal Husbandry
//         </div>
//       </div>
//       <h1 className="font-semibold text-[13px] py-3 ">Experience</h1>
//       <div className="h-full border-l-2 border-dotted border-gray-400 px-4">
//         <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>

//         <div>
//           <h1 className="text-[12px]">Head Hospital Department</h1>
//           <p className="text-[#007f00] font-semibold">
//             Alphonso Report <span className="text-black">20/05/2024-Till Date</span>
//           </p>
//           <p className="items-normal text-[12px]  ">
//             The Head of Hospitality Department at our Luxury resort is responsible for ensuring
//             exceptional guest experience and overseeing all hospitality operations.This is
//             leadership role demands a commitment to excellence, innovative thinking, a passion
//             for delivering world-class service
//           </p>
//         </div>

//         <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>
//         <div>
//           <h1 className="text-[12px]">Head Hospital Department</h1>
//           <p className="text-[#007f00] font-semibold">
//             Alphonso Report <span className="text-black">20/05/2024-Till Date</span>
//           </p>
//           <p className="items-normal text-[12px]  ">
//             The Head of Hospitality Department at our Luxury resort is responsible for ensuring
//             exceptional guest experience and overseeing all hospitality operations.This is
//             leadership role demands a commitment to excellence, innovative thinking, a passion
//             for delivering world-class service
//           </p>
//         </div>

//         <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>
//         <h1 className="text-[12px]">Community Manager</h1>
//         <p className="text-[#007f00] font-semibold">
//           Green Life Lagos <span className="text-black">20/05/2024-20/05/2024</span>
//         </p>
//         <p className="items-normal text-[12px]  ">
//           The Head of Hospitality Department at our Luxury resort is responsible for ensuring
//           exceptional guest experience and overseeing all hospitality operations.This is
//           leadership role demands a commitment to excellence, innovative thinking, a passion
//           for delivering world-class service
//         </p>
//       </div>
//     </div>
//   );
// };

// export default WorkExperience;




import React from "react";

interface WorkExperienceProps {
  data: {
    expertise: string[]; // Assuming expertise is an array of strings
    experience: {
      title: string;
      company: string;
      date: string;
      description: string;
    }[];
  };
}


const WorkExperience = ({ data }: { data: any }) => {
  if (!data || !data.workExperience) {
    return null; // Or render a loading indicator or error message
  }


  return (
    <div className="w-fit h-fit mx-auto my-[16px]">
      <h1 className="font-semibold text-[13px] ">Expertise</h1>
      <div className="flex flex-row justify-center gap-8 border-b border-[#E6F2E6] w-full py-3 text-[12px]">
        {data.expertise.map((expertise: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, index: React.Key | null | undefined) => (
          <div
            key={index}
            className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer"
          >
            {expertise}
          </div>
        ))}
      </div>
      <h1 className="font-semibold text-[13px] py-3">Experience</h1>
      <div className="h-full border-l-2 border-dotted border-gray-400 px-4">
        {data.experience.map((exp: { title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; company: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; date: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <div key={index}>
            <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>
            <div>
              <h1 className="text-[12px]">{exp.title}</h1>
              <p className="text-[#007f00] font-semibold">
                {exp.company} <span className="text-black">{exp.date}</span>
              </p>
              <p className="items-normal text-[12px]">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;


