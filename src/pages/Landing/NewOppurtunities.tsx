/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Slider from "./Sliders";

const NewOppurtunities = () => {
  const [showExpertPop, setShowExpertPop] = useState<any>();
  const infos = [
    {
      id: 1,
      Categories: "Food & Beverage",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Azeez Ibrahim",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+ ",
    },
    {
      id: 2,
      GouferCategories: "Transport",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Pius Lucky",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 3,
      GouferCategories: "Entertainment",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Chika Chime",

      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 4,
      GouferCategories: "Donation",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Choosen Abdullahi",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    // {
    //   id: 5,
    //   GouferCategories: "Shopper",
    //   Shopimage:
    //     "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    //   Gouferimage:
    //     "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    //   Goufername: "Oladosu Teslimat",
    //   text: " These are professional goufer which are expertise in resturant knowledge and update",
    //   Rate: "4.8",
    //   City: "Lagos,Nigeria",
    //   Task: " 50+",
    // },
  ];

  const JoinUs = [
    {
      icon: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716812814/Goufer/wpf_happy_eklxev.png",
      title: "35,000+",
      text: "Happy Global Client",
    },
    {
      icon: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716813478/Goufer/Union_kere7l.png",
      title: "Flexible",
      text: " Task that fit your schedule and skill set",
    },
    {
      icon: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716814001/Goufer/Group_ozomfy.png",
      title: "Secure Payment",
      text: "Enjoy peace of mind with our secure payment system",
    },
    {
      icon: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716814175/Goufer/carbon_star-review_qrs56u.svg",
      title: "Build Reputation",
      text: "Collecting to showcase your expertise and more clients",
    },
  ];

  return (
    <div className=" items-center   ">
      <div className="px-16 bg-[url(https://res.cloudinary.com/dxnznpglg/image/upload/v1716810848/Goufer/Rectangle_10_3_f1j8j4.svg)] w-full bg-center flex flex-col ">
        <div className="bg-[#333E78] w-72 h-auto my-5 text-white px-4 py-3 text-2xl text-center ">
          Goufer is growing fast
        </div>
        <div className=" w-full">
          <h3 className=" text-[32px]  text-white font-Roboto font-bold mb-2">
            Unlock New Opportunities and Grow Your Business
          </h3>

          <div className="w-full  text-white flex flex-row items-center">
            <p className="w-3/5 mr-auto text-sm mb-3 text-[16px] font-Roboto">
              Are you an experience professional looking to expand your client base? Join
              Goufer today and Connect with individuals and businesses seeking your expertise.
            </p>
            <button className=" mx-auto py-1.5 px-6 items-end  text-[18px]  text-white border border-white rounded-full hover:border-b-2 hover:border-l-4">
              Become a Goufer Now!
            </button>
          </div>
        </div>

        <div className="flex flex-row my-6 mt-10 items-center">
          {JoinUs.map((i, n) => (
            <div className="flex flex-row mx-auto justify-start items-start " key={n}>
              <img
                src={i.icon}
                className="w-10 h-10 mx-2 object-contain p-1 bg-white rounded-full"
                alt=""
              />
              <div className="flex flex-col ">
                <h1 className="text-sm  text-white font-semibold font-Roboto">{i.title}</h1>
                <p className="text-xs  text-white font-Roboto">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" pl-12 ">
        <h1 className="text-[40px] font-bold pl-2 tex-start mt-16   border-l-4 border-blue-gray-800 ">
          Meet Some of Our Esteem Team <br />
          of Expertise on <span className="text-[#007F00] text-5xl">Goufers</span>
        </h1>
        <p className="text-sm tex-start   mt-2 mx-2">
          Over 20k Professional Categories - 15+ Subcategories Goufers
        </p>
      </div>

      <div className="flex flex-row justify-evenly my-10 items-center relative  ">
        {infos &&
          infos.map((info: any, index: number) => (
            <div
              className="mx-auto flex flex-col relative items-center w-64 pb-4 rounded-xl  shadow-sm shadow-blue-gray-300  "
              key={index}
              onMouseOver={() => setShowExpertPop(index)}
              onMouseLeave={() => setShowExpertPop("")}
            >
              <div className="">
                <img
                  src={info.Shopimage}
                  alt=""
                  className="w-full h-28 p-1 rounded-md  object-cover"
                />
                <img
                  src={info.Gouferimage}
                  alt=""
                  className="w-16 h-16 rounded-full absolute left-4 top-16 border border-white outline-white"
                />
              </div>
              <div className=" pt-5 pl-3">
                <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto ">
                  {info.Goufername}
                </h1>
                <p className=" pr-2 text-[11px] mb-2">{info.text}</p>
                <div className="flex flex-row justify-start items-center pb-1 ">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                    className="w-4 h-4 object-contain"
                    alt=""
                  />
                  <p className="text-[#2e332e] px-2 text-[12px]">
                    <span className="text-[#007F00] pr-0.5  ">{info.Task}</span>Task Complete
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 ">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                  <p className="text-[#2a2b2a] px-2 text-[12px]">{info.City}</p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 ">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                  <p className="text-[#2a2b2a] px-2 text-[12px]">{info.Rate}</p>
                </div>
              </div>
              {showExpertPop === index && (
                <div className=" transition delay-100 duration-0 hover:duration-300 ease-in-out w-full h-[130px] absolute bottom-0 hover:top-39 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00]   flex flex-col ">
                  <div className="flex flex-row justify-start items-center pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                      className="w-5 h-5 object-contain bg-white rounded-full p-1"
                      alt=""
                    />
                    <p className="text-white px-2 text-[12px]">{info.Task} Task Complete</p>
                  </div>
                  <div className="flex flex-row justify-start items-center pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                      className="w-5 h-5 object-contain bg-white rounded-full p-1"
                      alt=""
                    />
                    <p className="text-white px-2 text-[12px]">{info.City}</p>
                  </div>
                  <div className="flex flex-row justify-start items-center pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                      className="w-5 h-5 object-contain bg-white rounded-full p-1"
                      alt=""
                    />
                    <p className="text-white px-2 text-[12px]">{info.Rate}</p>
                  </div>
                  <div className=" w-full pr-3 justify-end  flex flex-row ">
                    <div className=" w-4/5  px-0 py-1 text-[] flex flex-row  bg-white items-center  rounded-full ">
                      <p className=" mx-5 text-sm text-[#007F00] font-bold bg-white cursor-pointer">
                        View Gofer Profile
                      </p>
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                        className="w-2 h-4    justify-end"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        <div className="  w-8 h-8 bg-white items-center flex flex-col rounded-full shadow-lg shadow-gray-600 ">
          <img
            src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
            className="w-4 h-5  m-auto"
            alt=""
          />
        </div>
      </div>

      <div className="mx-7 items-center  flex flex-row justify-end  ">
        <button className=" text-right  px-8 py-4  text-white my-6 bg-[#007F00] hover:bg-[#30a730] shadow rounded-full">
          Search for a Goufer
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default NewOppurtunities;
