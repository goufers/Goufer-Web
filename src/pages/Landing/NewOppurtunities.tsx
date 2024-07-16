/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import Slider from "./Sliders";
import { useSelector } from "react-redux";
import { RootState } from "../../Redux/store";
import { fetchInfos } from "../../Redux/gouferSlice";
import { useDispatch } from "../../Redux/useDispatch";

const NewOppurtunities = () => {
  const [showExpertPop, setShowExpertPop] = useState<any>();
  const [selectedCategory, setSelectedCategory] = useState<any>();

  const dispatch = useDispatch();
  const { infos, loading, error } = useSelector((state: RootState) => state.goufer.infos);

  useEffect(() => {
    dispatch(fetchInfos());
  }, [dispatch]);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
  const Categories = [
    "Food & Beverages",
    "Housing",
    "Entertainment",
    "Medical",
    "Employment",
    "Beauty & Fashion",
    "Car Rental",
    "Services",
  ];
  return (
    <div className="w-full items-center ">
      <div className="p-3 md:pl-10 w-full h-auto bg-white">
        <div className="w-full h-auto py-4 flex flex-row items-center">
          <div className="w-4/5 md:pl-12 flex  flex-col  ">
            <h1 className="text-[20px] md:text-[40px] font-bold pl-2 tex-start mt-16   border-l-4 border-blue-gray-800 ">
              Popular Categories of Expertise on
            </h1>
            <p className="text-[14px] tex-start text-[#605D64]  mt-2 mx-2">
              Over 20 categories - 15+ Subcategories
            </p>
          </div>

          <div className=" md:pl-12 flex flex-row items-center">
            <p className="px-0 text-[11px] md:text-[16px] text-[#322F35] hover:text-[#007F00] font-Roboto ">
              View All Categories
            </p>
            <img
              src="/images/arrow right black.svg"
              alt="arrow"
              className="w-3 md:w-5 2 md:h-4 hover:text-[#007F00]"
            />
          </div>
        </div>

        <div className=" w-full md:w-11/12 h-auto py-4 flex flex-col items-center">
          <div className="w-full hidden md:flex md:flex-row pb-4 border-b-2 border-gray-600">
            {Categories.map((i, n) => (
              <h1
                className={` mx-auto text-[15px] md:text-[17px] hover:text-[#007F00] hover:font-bold cursor-pointer ${
                  selectedCategory === i ? "text-[#007F00] font-bold " : "text-[#46444b]"
                }`}
                key={n}
                onClick={() => setSelectedCategory(i)}
              >
                {i}
              </h1>
            ))}
          </div>

          {/* Mobile component */}
          <div className=" w-full flex md:hidden md:flex-row pb-3 border-b-2 border-gray-600">
            {Categories.slice(0, 4).map((i, n) => (
              <h1
                className={` mx-auto text-[14px] md:text-[17px] hover:text-[#007F00] hover:font-bold cursor-pointer ${
                  selectedCategory === i ? "text-[#007F00] font-bold " : "text-[#46444b]"
                }`}
                key={n}
                onClick={() => setSelectedCategory(i)}
              >
                {i}
              </h1>
            ))}
          </div>
          {/* Desktop Component */}
          <div className="w-full hidden md:flex  flex-row gap-2   my-10 items-center   ">
            {infos &&
              infos.map((info: any, index: number) => (
                <div
                  className="mx-auto flex flex-col relative items-center w md:w-60 pb-4 rounded-xl bg-white  shadow-sm shadow-blue-gray-300  "
                  key={index}
                  onMouseOver={() => setShowExpertPop(index)}
                  onMouseLeave={() => setShowExpertPop("")}
                >
                  <div className="">
                    <img
                      src={info.Shopimage}
                      alt=""
                      className="w-full h-28  rounded-md  object-cover"
                    />
                    <p className="px-5 py-1 rounded-full shadow-md text-[#48464C] absolute left-4 top-4 bg-white">
                      Food
                    </p>
                  </div>
                  <div className=" pt-5 pl-3">
                    <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto ">
                      Restaurants Goufers
                    </h1>
                    <p className=" pr-2 text-[11px] text-[#605D66] mb-2">email</p>
                    <div className="flex flex-row justify-start items-center pb-1 ">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                        className="w-5 h-5 object-contain"
                        alt=""
                      />
                      <p className="text-[#605D66] px-2 text-[12px]">
                        Available in your location
                      </p>
                    </div>
                    <div className="flex flex-row justify-start items-center pb-1 ">
                      <img
                        src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                        className="w-4 h-4 object-contain"
                        alt=""
                      />
                      <p className="text-[#605D66] px-2 text-[12px]">
                        <span className="text-[#007F00] pr-0.5  ">{info.Task}</span>Available
                        Gofers
                      </p>
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
                        <p className="text-white px-2 text-[12px]">
                          {info.Task} Task Complete
                        </p>
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
            <div className="  w-8 h-8 bg-white items-center flex flex-col rounded-full shadow-lg shadow-gray-400 ">
              <img
                src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                className="w-4 h-5  m-auto"
                alt=""
              />
            </div>
          </div>

          {/* Mobile Component */}
          <div className="w-screen flex md:hidden  flex-row my-3 items-center overflow-x-scroll  ">
            <div className="w-auto h-auto py-6 flex flex-row items-center ">
              {infos &&
                infos.slice(0, 4).map((info: any, index: number) => (
                  <div
                    className="mx-4 flex flex-col relative items-center w-60  pb-4 rounded-xl bg-white  shadow-sm shadow-blue-gray-300  "
                    key={index}
                    onMouseOver={() => setShowExpertPop(index)}
                    onMouseLeave={() => setShowExpertPop("")}
                  >
                    <div className="">
                      <img
                        src={info.Shopimage}
                        alt=""
                        className="w-full h-28  rounded-md  object-cover"
                      />
                      <p className="px-5 py-1 rounded-full shadow-md text-[#48464C] absolute left-4 top-4 bg-white">
                        Food
                      </p>
                    </div>
                    <div className=" pt-5 pl-3">
                      <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto ">
                        Restaurants Goufers
                      </h1>
                      <p className=" pr-2 text-[11px] text-[#605D66] mb-2">{info.text}</p>
                      <div className="flex flex-row justify-start items-center pb-1 ">
                        <img
                          src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                          className="w-5 h-5 object-contain"
                          alt=""
                        />
                        <p className="text-[#605D66] px-2 text-[12px]">
                          Available in your location
                        </p>
                      </div>
                      <div className="flex flex-row justify-start items-center pb-1 ">
                        <img
                          src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                          className="w-4 h-4 object-contain"
                          alt=""
                        />
                        <p className="text-[#605D66] px-2 text-[12px]">
                          <span className="text-[#007F00] pr-0.5  ">{info.Task}</span>Available
                          Gofers
                        </p>
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
                          <p className="text-white px-2 text-[12px]">
                            {info.Task} Task Complete
                          </p>
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
              <div className="  w-8 h-8 bg-white items-center flex flex-col rounded-full shadow-lg shadow-gray-400 ">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                  className="w-4 h-5  m-auto"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center w-full mx-auto mt-10">
        <div className="mx-aut w-full md:w-[500px] md:h-[500px]  md:ml-[180px]">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1717150319/Frame_70_1_xmtogr.png"
            alt=""
          />
        </div>
        <div className="flex flex-col justify-evenly items-center mx-auto   w-full">
          <div className="w-full md:w-[600px] py-[1px] ml-6 md:ml-0">
            <h1 className="text-[30px] md:text-[40px] text-[#322F35] font-bold pl-3 border-l-4  border-blue-gray-800">
              Seamless Step Of getting a <span className="text-[#007F00]">Goufer</span> Service
            </h1>
            <p className="text-[14px]">
              on Goufer we get connected with the Best Experts in Four Simple Steps
            </p>
          </div>

          {/* {steps.map((item, index) => (
            <div
              key={index}
              className="flex flex-row justify-evenly items-center py-4 px-3 md:px-0 md:ml-[30px] my-[10px] w-full md:w-[600px]"
            >
              <div className="flex  md:w-[100px] h-[100px]">
                <img src={item.url} alt="" />
              </div>
              <div className="flex flex-col">
                <div className="font-bold text-[16px]">{item.title}</div>
                <div className="text-[14px]">{item.text}</div>
              </div>
            </div>
          ))} */}
        </div>
      </div>

      <div className=" px-4 md:px-16 bg-[url(https://res.cloudinary.com/dxnznpglg/image/upload/v1716810848/Goufer/Rectangle_10_3_f1j8j4.svg)] w-full bg-center flex flex-col ">
        <div className="bg-[#333E78] w-72 h-auto my-5 text-white px-4 py-3 text-2xl text-center ">
          Goufer is growing fast
        </div>
        <div className=" w-full py-8">
          <h3 className=" text-[32px] md:text-[32px]  text-white font-Roboto font-bold mb-2">
            Unlock New Opportunities and Grow Your Business
          </h3>

          <div className="w-full  text-white flex flex-col md:flex-row items-center">
            <p className="w-4/5 md:w-3/5 mr-auto text-sm mb-3 text-[16px] font-Roboto">
              Are you an experience professional looking to expand your client base? Join
              Goufer today and Connect with individuals and businesses seeking your expertise.
            </p>
            <button className="my-4 md:mx-auto py-1.5 px-6 md:items-end  text-[18px]  text-white border border-white rounded-full hover:border-b-2 hover:border-l-4">
              Become a Goufer Now!
            </button>
          </div>
        </div>

        <div className="grid grid-flow-row grid-cols-2  w-full  md:flex md:flex-row my-6 mt-10 items-center">
          {JoinUs.map((i, n) => (
            <div
              className="flex flex-row md:mx-auto my-3  justify-start items-center md:items-center "
              key={n}
            >
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

      <div className=" pl-4 md:pl-12 ">
        <h1 className="text-[20px] md:text-[40px] font-bold pl-2 tex-start mt-16   border-l-4 border-blue-gray-800 ">
          Meet Some of Our Esteem Team <br />
          of Expertise on <span className="text-[#007F00] text-3xl md:text-5xl">Goufer</span>
        </h1>
        <p className="text-sm tex-start   mt-2 mx-2">
          Over 20k Professional Categories - 15+ Subcategories Goufers
        </p>
      </div>

      <div className="w-screen md:w-11/10 flex flex-row overflow-x-scroll md:overflow-x-auto   ">
        <div className="w-auto h-auto  flex flex-row md:justify-evenly my-10 items-center   relative">
          {infos &&
            infos.map((info: any, index: number) => (
              <div
                className=" mx-4 md:mx-auto flex flex-col relative items-center w-72 pb-4 rounded-xl  shadow-sm shadow-blue-gray-300  "
                key={index}
                onMouseOver={() => setShowExpertPop(index)}
                onMouseLeave={() => setShowExpertPop("")}
              >
                <div className="">
                  <img
                    src={info.Shopimage}
                    alt=""
                    className="w-full h-28   rounded-md  object-cover"
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
      </div>

      <div className="mx-auto md:mx-7 items-center  flex flex-row justify-center md:justify-end  ">
        <button className=" text-center w-11/12 md:w-auto px-8 py-4  text-white my-6 bg-[#007F00] hover:bg-[#30a730] shadow rounded-full">
          Search for a Goufer
        </button>
      </div>
      <Slider />
    </div>
  );
};

export default NewOppurtunities;
