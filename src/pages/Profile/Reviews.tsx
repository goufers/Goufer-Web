// import Star from "./Star";
// import { FaStar } from "react-icons/fa";

// const Reviews = () => {
//   const ReviewsData = [
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//     {
//       image:
//         "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718296072/image_68_cfboe2.svg",
//       name: "Quamdeen Brain",
//       review:
//         " He is simple fanastic! I needed help with organising a last-minute event, and he handled everything with such professionalism and efficiency.From coordinate",
//       date: "20/05/2024",
//       rating: <Star />,
//     },
//   ];
//   return (
//     <div className="mx-0 space-y-2">
//       <div className="h-[600px]  ">
//         <div className="space-y-2 ">
//           <h4>Ratings</h4>
//           <div className="flex pb-6 flex-row gap-2">
//             <span className="bg-[#007f00] flex flex-row gap-3 items-center text-white rounded-sm px-1">
//               4.8 <FaStar color="white" />
//             </span>
//             <span>From 6 Verified reviews </span>
//           </div>

//           <div className="w-full h-[500px]  overflow-y-scroll">
//             <div className="w-full h-min px-4 ">
//               {ReviewsData &&
//                 ReviewsData.map((d, i) => (
//                   <div className=" h-min py-3 cursor-pointer" key={i}>
//                     <div className="flex flex-row justify-between">
//                       <div className="flex items-start gap-3">
//                         <img src={d.image} alt="" className="rounded-full" />
//                         <div className="flex flex-col">
//                           <h3 className="text-[14px]">{d.name}</h3>
//                           <p className="text-[12px]">{d.date}</p>
//                         </div>
//                       </div>
//                       <div className="flex items-end mb-4">
//                         <Star />
//                       </div>
//                     </div>
//                     <div className=" py-2 text-[13px] space-x-2">{d.review}</div>
//                   </div>
//                 ))}
//             </div>{" "}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Reviews;



// Reviews.tsx

import React from 'react';
import Star from './Star';
import { FaStar } from 'react-icons/fa';

interface Review {
  image: string;
  name: string;
  review: string;
  date: string;
  rating: number; // Assuming rating is a number
}

interface ReviewsProps {
  reviewsData: Review[];
}

const Reviews: React.FC<ReviewsProps> = ({ reviewsData }) => {
  return (
    <div className="mx-0 space-y-2">
      <div className="h-[600px]">
        <div className="space-y-2">
          <h4>Ratings</h4>
          <div className="flex pb-6 flex-row gap-2">
            <span className="bg-[#007f00] flex flex-row gap-3 items-center text-white rounded-sm px-1">
              4.8 <FaStar color="white" />
            </span>
            <span>From {reviewsData.length} Verified reviews </span>
          </div>

          <div className="w-full h-[500px] overflow-y-scroll">
            <div className="w-full h-min px-4">
              {reviewsData.map((review, index) => (
                <div className="h-min py-3 cursor-pointer" key={index}>
                  <div className="flex flex-row justify-between">
                    <div className="flex items-start gap-3">
                      <img src={review.image} alt="" className="rounded-full" />
                      <div className="flex flex-col">
                        <h3 className="text-[14px]">{review.name}</h3>
                        <p className="text-[12px]">{review.date}</p>
                      </div>
                    </div>
                    <div className="flex items-end mb-4">
                      {/* Assuming Star component receives rating as props */}
                      <Star rating={review.rating} />
                    </div>
                  </div>
                  <div className="py-2 text-[13px] space-x-2">{review.review}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
