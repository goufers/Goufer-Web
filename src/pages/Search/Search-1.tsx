/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Search: React.FC = () => {
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
  ];
  const handleStarClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="w-full h-auto mb-24 bg-white">
      <Nav />

      {/* --------------------------------1 image----------------- */}
      <div className="flex flex-row w-full md:w-full h-[181px] mt-20">
        <div
          className="bg-cover bg-center w-3/5 h-full flex flex-col text-white mx-auto items-center justify-center"
          style={{
            backgroundImage:
              "url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1717507574/Rectangle_13_gdsbji.svg)",
          }}
        >
          <h1 className="text-xl">Search</h1>
          <p>Home / Search Goufer</p>
        </div>
        <img
          className="w-[200px] md:w-[631px] h-full object-cover"
          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717537768/image_3_eodlrc.svg"
          alt=""
        />
      </div>
      {/* 
      -----------------------------------2 search bar------------------------------ */}
      <div className="w-full px-1 md:w-[1127px] flex flex-col md:flex-row  item-center md:justify-between mx-auto md:gap[206px] mt-10">
        <h1 className="text-gray-800 w-full md:w-[79px] py-10 md:py-5 ">Filter by</h1>

        <div className="mx-1 w-full md:w-[842px] h-[55px] flex flex-col-reverse md:flex-row md:items-center justify-around md:gap[73px] mt-2">
          <div className="flex flex-row justify-between w-[390px]  items-center p-2">
            <p className="text-gray-800 w-auto py-4 md:py-auto md:w-[125px] h-[24px]">
              Found 8 Goufers
            </p>

            <button className="flex item-center h-[24px] w-[100px] border border-green-500 rounded-[50px] font-[400] text-xs gap-2 p-1 md:hidden mt-3">
              <img
                src="/images/Filters lines.svg"
                alt="filter"
                className="w-[11px] h-[11px]"
              />{" "}
              Filter Search
            </button>
          </div>

          <div className="mx-auto w-full md:w-[644px] h-[55px] p-4 bg-white rounded-full shadow-md hover:shadow-lg flex flex-row items-center">
            <div className="w-4/5 flex flex-row justify-center md:gap-3 items-center  ">
              <h3>
                <svg
                  width="15"
                  height="14"
                  viewBox="0 0 15 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 md:w-5  h-4 md:h-5 "
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
                className="w-2/5 md:w-36 px-2 text-xs text-slate-800 border-none focus:outline-none"
              />
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
                alt="top_line1"
                className=" w-2  h-6   "
              />
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717618131/Vector_uvjbhb.svg"
                alt="location"
                className="w-4 md:w-5  h-4 md:h-5 "
              />
              <input
                type="text"
                placeholder="City / Location"
                className="w-2/5 md:w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-row md:gap-3  justify-center mx-auto items-center  md:ml-9">
              <img
                className="m-0 h-[40px]"
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717617979/Vector_4_pepcv9.svg"
                alt="top_line1"
              />
              <span className="   mx-1 px-1    text-xs md:text-base text-gray-800 md:w-full hover:bg-gray-200 rounded-xl cursor-pointer">
                Reset
              </span>
              <input
                type="button"
                value={"search"}
                className="w-[58px] md:w-[99px] px- md:px-6 md:ml-6 py-2 text-xs md:text-sm text-center text-white bg-[#007F00] hover:bg-[#148a14] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------3 filter and categories----------------------------------- */}

      <div className="w-full md:w-[1140px] flex flex-col md:flex-row item-center justify-center mx-auto md:gap-6 mt-10">
        <div className="hidden md:flex  flex-col gap-6 items-center mx-auto rounded-[15px] h-[816px] w-[264px] mb-14 hover:shadow-lg bg-white shadow-md">
          <div className="flex flex-col w-[245px] h-[78px] bg-gray-200 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Keyword</h1>
            </div>
            <input
              type="text"
              className="w-[230px] h-[30px] rounded-[25px] border-none pl-4 outline-green-400"
            />
          </div>

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-200 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Categories</h1>
            </div>

            <select className="w-[230px] h-[30px] rounded-[25px] border-none pl-4 bg-white outline-none">
              <option value="" disabled selected>
                Select Categories
              </option>
              <option value="hurr">Food</option>
              <option value="hurr">Transport</option>
              <option value="hurr">Entertainment</option>
            </select>
          </div>

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-200 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Location</h1>
            </div>
            <input
              type="text"
              className="w-[230px] h-[30px] rounded-[25px] border-none pl-4  outline-green-400"
            />
          </div>

          <div className="flex flex-col w-[245px] bg-gray-200 items-start justify-center gap-2 rounded-[15px] h-[85px]">
            <h1 className="w-[65px] h-[24px] ml-4">Ratings</h1>
            <div className="flex flex-row w-[230px] items-center">
              <div className="flex justify-end space-x-1 w-[233px] mr-5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${
                      index < rating ? "text-green-500" : "text-green-300"
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

          <div className="flex flex-col w-[245px] h-[78px] bg-gray-200 items-center justify-center gap-2 rounded-[15px]  mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Gender</h1>
            </div>

            <select className="w-[230px] h-[30px] rounded-[25px] border-none pl-4 bg-white">
              <option value="" disabled selected>
                Select gender
              </option>
              <option value="hurr">Male</option>
              <option value="hurr">Female</option>
              <option value="hurr">Other</option>
            </select>
          </div>

          <div className="flex flex-col w-[245px] bg-gray-200 items-center justify-center gap-2 rounded-[15px] h-[140px]">
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

        {/* ----------------cards contents------------- */}
        <div className=" w-full md:w-11/10 h-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center ">
          {infos &&
            infos.map((info: any, index: number) => (
              <div
                className="mx-auto flex flex-col my-4 relative bg-white items-center w-10/12 md:w-[270px] lg:w-[250px]  h-[296px] pb-4 rounded-xl  shadow-sm shadow-blue-gray-300  transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400 hover:top-[-20px]"
                key={index}
                onMouseOver={() => setShowExpertPop(index)}
                onMouseLeave={() => setShowExpertPop("")}
              >
                <div className=" ">
                  <div className="relative ">
                    <div className="absolute z-10 flex justify-between gap-12 w-[300px]  md:w-[230px] h-[26px] items-center  m-3">
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
                      className="w-[400px] md:w-full h-28 rounded-md  object-cover relative "
                    />
                  </div>
                  <img
                    src={info.Gouferimage}
                    alt=""
                    className="w-16 h-16 rounded-full absolute left-4 top-16 border border-white outline-white "
                  />
                </div>
                <div className=" pt-5 pl-3">
                  <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto cursor-pointer hover:text-[#007F00]  ">
                    {info.Goufername}
                  </h1>
                  <p className=" pr-2 text-[11px] mb-2 ">{info.text}</p>
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
                      <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out    hover:transition cursor-pointer">
                        {info.Task} Task Completed
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out   hover:scale-105 hover:transition cursor-pointer">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                        className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition cursor-pointer"
                        alt=""
                      />
                      <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out   hover:scale-105 hover:transition cursor-pointer">
                        {info.City}
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out   hover:scale-105 hover:transition cursor-pointer">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                        className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition cursor-pointer"
                        alt=""
                      />
                      <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out  hover:scale-105 hover:transition cursor-pointer">
                        {info.Rate}
                      </p>
                    </div>
                    <div className=" w-full pr-3 justify-end  flex flex-row  mb-6">
                      <p className=" mx-5 px-6 py-2 text-sm text-[#007F00] font-bold rounded-3xl bg-white cursor-pointer transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition cursor-pointer">
                        View Gofer Profile
                      </p>
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                        className="w-2 h-4    justify-end  "
                        alt=""
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>

        {/* ------------------buttons at the bottom to go to at prev and next page--------> */}
        <div className="w-11/12 md:w-[846px] h-[68px] mx-auto items-center justify-center mb-12 mt-6">
          <div className="flex flex-row w-full md:w-[497px] h-[40px] mx-auto item-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6]">
            <div className="w-[119px] h-[40px] flex items-center justify-center border-[#E6F2E6]">
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
            <div className="w-[92px] h-[40px] flex items-center justify-center border-[#E6F2E6] border-l-none">
              Next{" "}
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717685150/arrow-right_lmffkb.svg"
                alt="next"
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className="h-12 mt-12"></div> */}
      <Footer />
      {/* ----------------------button banner----------------- */}
    </div>
  );
};

export default Search;
