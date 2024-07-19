// const Media = () => {
     

//     const data = [
//       {ImgalT:"man",Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282501/image_17_fq7kgb.png"},
//       { alImgalTt:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282500/image_16_u21nec.png"},
//       { ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282499/image_3_q8nvi8.png"},
//       { ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282499/image_18_bk2qbx.png"},
//       { ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282499/image_21_ravbf5.png"},
//       { ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282498/image_30_2_gylhed.png"},
//       {ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282497/image_28_1_zaxgee.png"},
//       { ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282497/image_2_xktnqr.png"},
//       {ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718283008/image_1_aq4kdo.svg"},
//       {ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718283008/image_29_umnpmh.svg"},
//       {ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718283003/image_7_fhsoda.svg"},
//       {ImgalT:"man", Image:"https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718282999/image_31_brahga.svg"},
  
//            ]
  
//       return (
  
  
//         <div className="grid grid-cols-4 gap-2 ">
  
//           {data.map((d,i)=>(
//           <div key={i} className="">     
//                  <img src={d.Image} alt={d.ImgalT} />
//           </div>
//           ))}
  
//         </div>
  
         
//        );
//   }
   
//   export default Media;
  
  
  
  


import React from 'react';

interface MediaItem {
  ImgAlt: string;
  Image: string;
}

interface MediaProps {
  mediaData: MediaItem[];
}

const Media: React.FC<MediaProps> = ({ mediaData }) => {
  return (
    <div className="h-[350px]">
      <div className="flex flex-col space-y-7">
        <p className="font-semibold text-[20px] text-left">Media</p>
        <div className="grid grid-cols-4 gap-2">
          {mediaData.map((mediaItem, index) => (
            <div key={index} className="">
              <img src={mediaItem.Image} alt={mediaItem.ImgAlt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Media;

  
  
 