import React from 'react';

interface AboutProps {
  data: {
    bio: string; // Assuming 'bio' is a string in your gouferData
  };
}


const About: React.FC<AboutProps> = ({ data }) =>{
  return (
    <div className="h-[350px]">
      <div className="flex flex-col space-y-7">
        <p className="font-semibold text-[20px] text-left">Bio</p>
        <p className=" font-Roboto text-[14px] mt-10 ">{data.bio || " Hi, I'm Alex, your dedicated Goufer with a knack for making life easier! Whether you need help with errands, organizing your space, or managing day-to-day task's, I'm here to lend to lend a hand. With a background in hospitality and a passion for helping others, I ensure that every task is handled with effiecency and a smile. Let me take care of the details so you can focus on what matters most to you. Lookng forward to assisting you soon!"}
         
        </p>
      </div>
    </div>
  );
}

export default About;



// About.tsx

// import React from 'react';

// interface AboutProps {
//   data: {
//     bio: string; // Assuming 'bio' is a string in your gouferData
//   };
// }

// const About: React.FC<AboutProps> = ({ data }) => {
//   return (
//     <div className="h-[350px]">
//       <div className="flex flex-col space-y-7">
//         <p className="font-semibold text-[20px] text-left">Bio</p>
//         <p className="font-Roboto text-[14px] mt-10">{data.bio}</p>
//       </div>
//     </div>
//   );
// };

// export default About;
