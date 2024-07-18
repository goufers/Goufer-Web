// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useEffect, useState } from "react";
// import { fetchGouferProfile } from "../../Redux/GouferProfileSlice";
// import PUBLIC_ROUTES from "../../utils/PublicRoutes";
// import Mainbar from "./Mainbar";
// import Sidebar from "./Sidebar";
// import { useDispatch, useSelector } from "react-redux";
// import { Loading } from "../../components/Loading";
// import { useParams } from "react-router-dom";
// // import delay from "delay";

// const GouferProfile = () => {
//   const dispatch = useDispatch();
//   const gouferData = useSelector((state: any) => state.gouferProfile);
//   const [data, setData] = useState<any>({ status: "idle" });
//   const { id } = useParams();

//   const getGoufer = async () => {
//     dispatch(fetchGouferProfile(Number(id)));
//     // await delay(2000);
//     setData(gouferData);
//   };

//   useEffect(() => {
//     dispatch(fetchGouferProfile(Number(id)));
//   }, []);

//   return (
//     <>
//       {gouferData.status == "idle" && <Loading />}

//       {gouferData.status == "succeeded" && (
//         <div className="w-full items-center">
//           <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427096/Rectangle_10_1_swotsr.png)] bg-contain w-full h-[181px] relative ">
//             <h1 className="text-left text-[white] text-[32px] font-bold ml-[150px] pt-[20px]">
//               Goufer Details
//             </h1>
//             <p className="text-left text-white text-[16px] ml-[150px] pt-[20px]">
//               Home / Goufer Profile
//             </p>
//             <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427098/Rectangle_7_hitjl4.svg)] bg-contain w-[636px] h-[181px] bottom-[0px] absolute right-[0px]"></div>
//           </div>
//           <div className="flex flex-row justify-end items-end mr-[100px] gap-4 mt-[20px]">
//             <button className="bg-white text-[#007F00] border border-[#007f00] rounded-full px-[25px] py-[10px] hover:bg-[#dfffdf] ">
//               Add Favorite
//             </button>
//             <a
//               href={PUBLIC_ROUTES.CHAT}
//               className="bg-[#007f00] text-white hover:bg-[#287028] rounded-full px-[25px] py-[10px] hover:text-white"
//             >
//               Contact Goufer
//             </a>
//           </div>
//           <div className="flex flex-row items-center">
//             <Sidebar gouferData={data.profile} />
//             <Mainbar />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default GouferProfile;



/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Adjust the path as needed
import PUBLIC_ROUTES from '../../utils/PublicRoutes';
import Mainbar from './Mainbar';
import Sidebar from './Sidebar';
import { fetchData } from '../../Redux/GouferProfileSlice';
import { Loading } from '../../components/Loading';

const GouferProfile = () => {
  const dispatch = useDispatch();
  const { profile, status, error } = useSelector((state:any) => state.goferProfile);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchData()); // Dispatch fetchData when the component mounts
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div><Loading /></div>; // Display loading state
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>; // Display error message
  }

  return (
    <div className="w-full items-center">
      <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427096/Rectangle_10_1_swotsr.png)] bg-contain w-full h-[181px] relative ">
        <h1 className="text-left text-[white] text-[32px] font-bold ml-[150px] pt-[20px]">
          Goufer Details
        </h1>
        <p className="text-left text-white text-[16px] ml-[150px] pt-[20px]">
          Home / Goufer Profile
        </p>
        <div className="bg-[url(https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717427098/Rectangle_7_hitjl4.svg)] bg-contain w-[636px] h-[181px] bottom-[0px] absolute right-[0px]"></div>
      </div>
      <div className="flex flex-row justify-end items-end mr-[100px] gap-4 mt-[20px]">
        <button className="bg-white text-[#007F00] border border-[#007f00] rounded-full px-[25px] py-[10px] hover:bg-[#dfffdf] ">
          Add Favorite
        </button>
        <a
          href={PUBLIC_ROUTES.CHAT}
          className="bg-[#007f00] text-white hover:bg-[#287028] rounded-full px-[25px] py-[10px] hover:text-white"
        >
          Contact Goufer
        </a>
      </div>
      <div className="flex flex-row items-center">
        <Sidebar gouferData={profile} />
        <Mainbar />
      </div>
      {/* Display the profile data */}
      {profile && (
        <div className="p-4">
          <h2 className="text-xl font-semibold">Profile Details</h2>
          <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default GouferProfile;
