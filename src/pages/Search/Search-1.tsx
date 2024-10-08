/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import { AppDispatch } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleFavorite } from "../../features/favoriteSlice/favoritesSlice";
import InputSearch from "./InputSearch";

interface Item {
  id: number;
  GouferCategories: string;
  Shopimage: string;
  Gouferimage: string;
  Goufername: string;
  Text: string;
  Rate: string;
  City: string;
  Task: string;
}

const Search: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [showExpertPop, setShowExpertPop] = useState<any>();
  const dispatch: AppDispatch = useDispatch();
  const favoriteItems = useSelector((state: any) => state.Favorites.favoriteItems);

  const handleIconClick = (item: Item) => {
    dispatch(toggleFavorite(item));
  };

  const infos = [
    {
      id: 1,
      GouferCategories: "Food & Beverage",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Azeez Ibrahim",
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      Text: " These are professional goufer which are expertise in resturant knowledge and update",
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
      <div className="w-full px-1 md:w-[1127px] flex flex-col md:flex-row  item-center md:justify-between mx-auto md:gap[206px] mt-10">
        <div className="flex flex-row justify-between w-[390px]  items-center p-2">
          <h1 className="text-gray-800 w-auto md:w-[125px] h-[24px] md:py-auto mt-3 ">
            Filter by
          </h1>
          <p className="text-gray-800 w-auto py-4 md:py-auto md:w-[125px] h-[24px]">
            Found 8 Goufers
          </p>

          <button className="flex item-center h-[24px] w-[100px] border border-green-500 rounded-[50px] font-[400] text-xs gap-2 p-1 md:hidden mt-3">
            <img src="/images/Filters lines.svg" alt="filter" className="w-[11px] h-[11px]" />{" "}
            Filter Search
          </button>
        </div>
        <InputSearch />
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
        <div className=" w-full md:w-11/10 h-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-evenly ">
          {infos &&
            infos.map((info) => (
              <div
                className="mx-auto flex flex-col my-4 relative bg-white items-center w-10/12 md:w-[270px] lg:w-[250px] h-[296px] pb-4 rounded-xl shadow-sm shadow-blue-gray-300 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400"
                key={info.id}
                onMouseOver={() => setShowExpertPop(info.id)}
                onMouseLeave={() => setShowExpertPop("")}
              >
                <div className="">
                  <div className="relative justify-between">
                    <div className="absolute z-10 flex justify-between gap-12 w-[300px]  md:w-[230px] h-[26px] items-center  m-3">
                      <div className=" text-black text-xs h-[26px] w-[116px] rounded-full bg-white flex items-center justify-center">
                        <p>Food and Beverage</p>
                      </div>
                      <button onClick={() => handleIconClick(info)}>
                        <img
                          src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717687970/Vector_1_obvbdm.svg"
                          alt="favorite"
                          className="mr-3 mt-3 cursor-pointer"
                          style={{
                            filter: favoriteItems.some(
                              (favItem: any) => favItem.id === info.id
                            )
                              ? "invert(27%) sepia(95%) saturate(2129%) hue-rotate(99deg) brightness(93%) contrast(92%)"
                              : "none",
                          }}
                        />
                      </button>
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
                  <p className=" pr-2 text-[11px] mb-2 ">{info.Text}</p>
                  <div className="flex flex-row justify-start items-center pb-1">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                      className="w-4 h-4 object-contain "
                      alt=""
                    />
                    <p className="text-[#2e332e] px-2 text-[12px] ">
                      <span className="text-[#007F00] pr-0.5  ">{info.Task}</span>
                      Task Complete
                    </p>
                  </div>
                  <div className="flex flex-row justify-start items-center pb-1">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                      className="w-5 h-5 object-contain "
                      alt=""
                    />
                    <p className="text-[#2a2b2a] px-2 text-[12px] ">{info.City}</p>
                  </div>
                  <div className="flex flex-row justify-start items-center pb-1 ">
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                      className="w-5 h-5 object-contain "
                      alt=""
                    />
                    <p className="text-[#2a2b2a] px-2 text-[12px] ">{info.Rate}</p>
                  </div>
                </div>
                {showExpertPop === info.id && (
                  <div className="transition delay-100 duration-300 ease-in-out w-full max-h-[130px] absolute bottom-0 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00] flex flex-col">
                    <div className="flex flex-row justify-start items-center pb-1 ">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                        className="w-5 h-5 object-contain bg-white rounded-full p-1 "
                        alt=""
                      />
                      <p className="text-white px-2 text-[12px] ">
                        {info.Task} Task Completed
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 ">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                        className="w-5 h-5 object-contain bg-white rounded-full p-1 "
                        alt=""
                      />
                      <p className="text-white px-2 text-[12px] ">{info.City}</p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 ">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                        className="w-5 h-5 object-contain bg-white rounded-full p-1 "
                        alt=""
                      />
                      <p className="text-white px-2 text-[12px] ">{info.Rate}</p>
                    </div>
                    <div className=" w-full pr-3 justify-end  flex flex-row  mb-6">
                      <p className=" mx-5 px-6 py-2 text-sm text-[#007F00] font-bold rounded-3xl bg-white cursor-pointer ">
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
      </div>

      <Footer />
      {/* ----------------------button banner----------------- */}
    </div>
  );
};

export default Search;
