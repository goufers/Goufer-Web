import React, { useState } from "react";
import Nav from "../../components/Nav";

const Searchmore: React.FC = () => {
  const [rating, setRating] = useState(0);
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
    {
      id: 5,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 6,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 7,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },

    {
      id: 8,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },

    {
      id: 9,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 10,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 11,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 12,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 13,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 14,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 15,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
  ];
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="w-full h-auto mb-24">
      <Nav />

      {/* --------------------------------1 image----------------- */}
      <div className="flex flex-row w-[1440px] h-[181px] mt-20">
        <div
          className="bg-cover bg-center w-[801px] h-[181px] flex flex-col text-white  items-center justify-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1717507574/Rectangle_13_gdsbji.svg)",
          }}
        >
          <h1 className="text-xl">Search</h1>
          <p>Home / Search Goufer</p>
        </div>
        <img
          className="w-[631px"
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717537768/image_3_eodlrc.svg"
          alt=""
        />
      </div>
      {/* 
      -----------------------------------2 search bar------------------------------ */}
      <div className="w-[1127px] flex flex-row item-center justify-between mx-auto gap[206px] mt-10">
        <h1 className="w-[79px] pt-5">Filter by</h1>

        <div className="w-[842px] h-[55px] flex items-center justify-around gap[73px]">
          <p className="w-[125px] h-[24px]">Found 8 Goufers</p>

          <div className="w-[644px] h-[55px] p-4 bg-white rounded-full shadow-md hover:shadow-lg flex flex-row items-center">
            <h3>
              <svg
                width="15"
                height="14"
                viewBox="0 0 15 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 "
              >
                <path
                  d="M6.16669 10.6667C8.92811 10.6667 11.1667 8.42809 11.1667 5.66666C11.1667 2.90524 8.92811 0.666664 6.16669 0.666664C3.40526 0.666664 1.16669 2.90524 1.16669 5.66666C1.16669 8.42809 3.40526 10.6667 6.16669 10.6667Z"
                  stroke="#605D64"
                />
                <path
                  d="M6.16669 3.16666C5.50365 3.16666 4.86776 3.43006 4.39892 3.8989C3.93008 4.36774 3.66669 5.00362 3.66669 5.66666M13.6667 13.1667L11.1667 10.6667"
                  stroke="#605D64"
                  strokeLinecap="round"
                />
              </svg>
            </h3>
            <input
              type="text"
              placeholder="Profession or Keyword"
              className="w-36 px-2 text-xs text-slate-800 border-none focus:outline-none"
            />
            <div className="flex flex-row gap-3">
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
                alt="topline1"
              />
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717618131/Vector_uvjbhb.svg"
                alt="location"
              />
              <input
                type="text"
                placeholder="City / Location"
                className="w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-row gap-3 w-full mx-auto items-center ml-9">
              <img
                className="h-[44px]"
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
                alt="topline1"
              />
              <span className="w-full">Reset Search</span>
              <input
                type="button"
                value={"search"}
                className="w-[99px] px-6 ml-6 py-2 text-sm text-center text-white bg-[#007F00] hover:bg-[#148a14] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------3 filter and categories----------------------------------- */}

      <div className="w-[1130px] flex flex-row item-center justify-center mx-auto gap-6 mt-10 h-[1544px]">
        <div className="flex flex-col gap-6 items-center rounded-[15px] h-[816px] w-[264px] mb-14 hover:shadow-lg bg-white shadow-md">
          <div className="flex flex-col w-[245px] h-[78px] bg-gray-300 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Keyword</h1>
            </div>
            <input
              type="text"
              className="w-[230px] h-[30px] rounded-[50px] border-none pl-4"
            />
          </div>

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-300 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Categories</h1>
            </div>

            <select className="w-[230px] h-[30px] rounded-[50px] border-none pl-4 bg-white">
              <option value="" disabled selected>
                {" "}
                Select Categories
              </option>
              <option value="hurr">Food</option>
              <option value="hurr">Transport</option>
              <option value="hurr">Entertainment</option>
            </select>
          </div>

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-300 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Location</h1>
            </div>
            <input
              type="text"
              className="w-[230px] h-[30px] rounded-[50px] border-none pl-4"
            />
          </div>

          <div className="flex flex-col w-[245px] bg-gray-300 items-start justify-center gap-2 rounded-[15px] h-[85px]">
            <h1 className="w-[65px] h-[24px] ml-4">Ratings</h1>
            <div className="flex flex-row w-[230px] items-center">
              <div className="flex justify-end space-x-1 w-[233px] mr-5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${
                      index < rating ? "text-green-500" : "text-slate-400"
                    }`}
                    fill={index < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => handleStarClick(index)}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    />
                  </svg>
                ))}
              </div>
              <span className="w-[65px] h-[24px] text-right">{rating}</span>
            </div>
          </div>

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-300 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Gender</h1>
            </div>

            <select className="w-[230px] h-[30px] rounded-[50px] border-none pl-4 bg-white">
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="hurr">Male</option>
              <option value="hurr">Female</option>
              <option value="hurr">Other</option>
            </select>
          </div>

          <div className="flex flex-col w-[245px] bg-gray-300 items-center justify-center gap-2 rounded-[15px] h-[140px]">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Urgency</h1>
            </div>
            <div className="flex flex-col items-start gap-2 w-[233px] h-[94px]">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Available Now
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Online
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" className="form-checkbox" />
                Offline
              </label>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <button className="w-[248px] h-[30px] rounded-full bg-[#007F00] mb-12 text-white hover:bg-green-900 transition-colors duration-300">
              Search Criteria
            </button>
            <h1 className="mb-6">Clear all Filters</h1>
          </div>
        </div>

        {/* ---------------------4 cards sections----------------- */}

        <div className="w-[930] h-[2000px] flex flex-col gap-6 items-center">
          <div className="w-11/10 grid grid-cols-3 items-center w-[842px] gap-3">
            {infos &&
              infos.map((info: any, index: number) => (
                <div
                  className="mx-auto flex flex-col relative items-center w-[270px]  h-[296px] pb-4 rounded-xl  shadow-sm shadow-blue-gray-300  transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400 hover:top-[-20px]"
                  key={index}
                  onMouseOver={() => setShowExpertPop(index)}
                  onMouseLeave={() => setShowExpertPop("")}
                >
                  <div className="transition duration-300 ease-in-out hover:scale-105 hover:transition">
                    <div className="relative ">
                      <div className="absolute z-10 flex justify-between w-[255px] h-[26px] items-center  m-3">
                        <div className=" text-black text-xs h-[26px] w-[116px] rounded-full bg-white flex items-center justify-center">
                          <p>Food and Beverage</p>
                        </div>
                        <img
                          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717687970/Vector_1_obvbdm.svg"
                          alt="favorite"
                        />
                      </div>

                      <img
                        src={info.Shopimage}
                        alt=""
                        className="w-full h-28   rounded-md  object-cover relative"
                      />
                    </div>
                    <img
                      src={info.Gouferimage}
                      alt=""
                      className="w-16 h-16 rounded-full absolute left-4 top-16 border border-white outline-white transition duration-300 ease-in-out hover:scale-105 hover:transition"
                    />
                  </div>
                  <div className=" pt-5 pl-3">
                    <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      {info.Goufername}
                    </h1>
                    <p className=" pr-2 text-[11px] mb-2 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      {info.text}
                    </p>
                    <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                        className="w-4 h-4 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                        alt=""
                      />
                      <p className="text-[#2e332e] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        <span className="text-[#007F00] pr-0.5  transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                          {info.Task}
                        </span>
                        Task Complete
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                        className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                        alt=""
                      />
                      <p className="text-[#2a2b2a] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        {info.City}
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                        className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                        alt=""
                      />
                      <p className="text-[#2a2b2a] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        {info.Rate}
                      </p>
                    </div>
                  </div>
                  {showExpertPop === index && (
                    <div className="transition delay-100 duration-300 ease-in-out w-full max-h-[130px] absolute bottom-0 hover:top-39 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00]   flex flex-col ">
                      <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        <img
                          src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                          className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition"
                          alt=""
                        />
                        <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                          {info.Task} Task Complete
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        <img
                          src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                          className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition"
                          alt=""
                        />
                        <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                          {info.City}
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        <img
                          src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                          className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition"
                          alt=""
                        />
                        <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                          {info.Rate}
                        </p>
                      </div>
                      <div className=" w-full pr-3 justify-end  flex flex-row transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                        <div className=" w-4/5  px-0 py-1 text-[] flex flex-row  bg-white items-center  rounded-full transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                          <p className=" mx-5 text-sm text-[#007F00] font-bold bg-white cursor-pointer transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                            View Gofer Profile
                          </p>
                          <img
                            src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                            className="w-2 h-4    justify-end transition duration-300 ease-in-out hover:scale-105 hover:transition"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="w-[846px] h-[68px] mx-auto items-center justify-center mb-12 mt-6">
            <div className="flex flex-row w-[497px] h-[40px] mx-auto item-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px]  border-[#E6F2E6]">
              <div className="w-[119px] h-[40px]  flex items-center justify-center border-[#E6F2E6]">
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717681157/arrow-left_cq1gnw.svg"
                  alt="previous"
                />
                Previous
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                1
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                2
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                3
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                ...
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                8
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]">
                9
              </div>
              <div className="flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6] border-l-none">
                10
              </div>
              <div className="w-[92px] h-[40px]  flex items-center justify-center border-[#E6F2E6] border-l-none">
                Next{" "}
                <img
                  src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717685150/arrow-right_lmffkb.svg"
                  alt="next"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-12 mt-12"></div>

      {/* ----------------------botton banner----------------- */}
      <div className="w-[1440px] h-auto mx-auto flex flex-row mt-24">
        <div className="bg-[#007400] w-[720px] py-16 flex flex-col justify-center items-center">
          <div className="w-[437px]  ">
            <p className="text-white text-[22px] font-Roboto ">
              Boost Your Business with Goufer
            </p>
            <h1 className="text-white  text-[32px] font-bold mt-2 mb-5">
              Expand Your Reach and Increase Sales
            </h1>

            <div className="mt-12">
              <p className="mt-6 text-white text-[14px] font-Roboto w-[488px]">
                Partner with Goufer to showcase your products to a targeted audience of experts
                and clients. Enjoy increased visibility, connect with professionals who need
                your products, and grow your business on our trusted and secure platform.
              </p>
              <button className=" border-white rounded-[50px] py-3 px-8 text-[14px] text-white mt-12   border hover:border-b-2">
                Become a Vendor on Goufer
              </button>
            </div>
          </div>
        </div>
        <img src="./images/gofffice.svg" alt="office" />
      </div>
    </div>
  );
};

export default Searchmore;
