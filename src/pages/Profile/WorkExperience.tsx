// 

// WorkExperience.tsx

import React from 'react';

interface WorkExperienceProps {
  data: {
    workExperience: {
      title: string;
      company: string;
      duration: string;
      description: string;
    }[];
  };
}

const WorkExperience: React.FC<WorkExperienceProps> = ({ data }) => {
  return (
    <div className="w-fit h-fit mx-auto my-[16px]">
      <h1 className="font-semibold text-[13px] ">Expertise</h1>
      <div className="flex flex-row justify-center gap-8 border-b border-[#E6F2E6] w-full py-3 text-[12px]">
        {/* Example expertise tags */}
        <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
          Food & Beverage
        </div>
        <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
          Nutritionist
        </div>
        <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
          Agriculture
        </div>
        <div className="rounded-full bg-[#E6F2E6] text-[#007F00] px-4 py-2 cursor-pointer">
          Animal Husbandry
        </div>
      </div>
      <h1 className="font-semibold text-[13px] py-3">Experience</h1>
      <div className="h-full border-l-2 border-dotted border-gray-400 px-4">
        {data.workExperience.map((experience, index) => (
          <div key={index} className="flex items-start mt-4">
            <div className="w-5 h-5 border rounded-full border-[#008307] bg-[white]"></div>
            <div className="ml-3">
              <h1 className="text-[12px]">{experience.title}</h1>
              <p className="text-[#007f00] font-semibold">
                {experience.company}{' '}
                <span className="text-black">{experience.duration}</span>
              </p>
              <p className="items-normal text-[12px]">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
