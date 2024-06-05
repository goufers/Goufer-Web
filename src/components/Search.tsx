import React, { useState, useEffect, useRef } from 'react';
import Nav from "./Nav";

interface DropdownProps {
  label: string;
  options: string[];
  placeholder: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);

    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="flex flex-col w-[245px] bg-gray-300 items-center justify-center gap-2 rounded-[15px] h-[85px]">
      <div className="flex justify-between w-[233px]">
        <h1 className="w-[65px] h-[24px]">{label}</h1>
      </div>
      <div className="relative w-[230px] h-[30px]">
        <input
          type="text"
          className="w-full h-full rounded-[50px] border-none pl-4"
          placeholder={placeholder}
          value={selectedOption}
          readOnly
          onClick={toggleDropdown}
        />
        <span className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer" onClick={toggleDropdown}>
          &#9662;
        </span>
        {isOpen && (
          <div className="absolute w-full bg-white shadow-md rounded-md mt-1 z-10">
            {options.map((option, index) => (
              <div
                key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                onClick={() => handleOptionClick(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// Rest of your component code...


interface SearchProps {}

const Search: React.FC<SearchProps> = () => {
  const [rating, setRating] = useState(0);  const [showExpertPop, setShowExpertPop] = useState<any>();

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
    <div className="w-full h-auto mb-24">

      
      <Nav />
 

     
      <div className='flex flex-row w-[1440px] h-[181px] mt-20'>
        
      <div className='bg-cover bg-center w-[801px] h-[181px] flex flex-col text-white  items-center justify-center' style={{ backgroundImage: 'url(https://res.cloudinary.com/dspkk9qlz/image/upload/v1717507574/Rectangle_13_gdsbji.svg)' }}>
        <h1 className='text-xl'>Search</h1>
        <p>Home / Search Goufer</p>
      </div>
        <img className='w-[631px' src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717537768/image_3_eodlrc.svg" alt="" />
      
      </div>
     
  
      <div className="flex flex-col mt-12 mx-auto ml-12">
        <div className="flex w-[1400px] h-[65px] text-black items-center justify-around mx-auto gap-9">

        <h1 className="mr-16 mt-3">Filter by</h1>

          <span>
            <p className="w-[125px] h-[24px]">Found 8 Goufers</p>
          </span>
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
              <img src="/images/topline1.svg" alt="topline1" />
              <img src="/images/location.svg" alt="location" />
              <input
                type="text"
                placeholder="City / Location"
                className="w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-row gap-3 w-full mx-auto items-center ml-9">
              <img className="h-[44px]" src="/images/topline1.svg" alt="topline1" />
              <span className="w-full">Reset Search</span>
              <input
                type="button"
                value={"search"}
                className="w-[99px] px-6 ml-6 py-2 text-sm text-center text-white bg-[#007F00] hover:bg-[#148a14] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row">

        </div>
      </div>

      <div className="flex flex-row justify-between mt-9 w-[1200px] h-[1000px] gap-6 items-start mx-auto">
     
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

          <Dropdown label="Categories" options={['Entertainment', 'Food', 'Transport']} placeholder="Categories" />
          <Dropdown   label="Location" options={['Option 1', 'Option 2', 'Option 3']} placeholder="Location" />
          <Dropdown    label="Gender" options={['Male', 'Female', 'Other']} placeholder="Gender" />


          <div className="flex flex-col w-[245px] bg-gray-300 items-start justify-center gap-2 rounded-[15px] h-[85px]">
          <h1 className="w-[65px] h-[24px] ml-4">Ratings</h1>
            <div className="flex flex-row w-[230px] items-center">
              <div className="flex justify-end space-x-1 w-[233px] mr-5">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 cursor-pointer ${index < rating ? 'text-green-500' : 'text-slate-400'}`}
                    fill={index < rating ? 'currentColor' : 'none'}
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
          <div className='flex flex-col items-center'>
          <button className='w-[248px] h-[30px] rounded-full bg-[#007F00] mb-12 text-white hover:bg-green-900 transition-colors duration-300'>Search Criteria</button>
          <h1 className='mb-6'>Clear all Filters</h1>
          </div>
         
        </div>


        <div className="flex flex-col h-auto gap-4 w-[950px]">
  <div className="w-11/10 grid grid-cols-3 h-[920px] items-center relative  ">
    {infos &&
      infos.map((info: any, index: number) => (
        <div
          className="mx-auto flex flex-col relative items-center w-72 pb-4 rounded-xl  shadow-sm shadow-blue-gray-300  transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400 hover:top-[-20px]"
          key={index}
          onMouseOver={() => setShowExpertPop(index)}
          onMouseLeave={() => setShowExpertPop("")}
        >
          <div className="transition duration-300 ease-in-out hover:scale-105 hover:transition">
            <img
              src={info.Shopimage}
              alt=""
              className="w-full h-28   rounded-md  object-cover"
            />
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
            <div
              className="transition delay-100 duration-300 ease-in-out w-full max-h-[130px] absolute bottom-0 hover:top-39 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00]   flex flex-col "
            >
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
</div>





      </div>


      <div className="w-[1440px] h-auto mx-auto flex flex-row mt-12">
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

export default Search;

