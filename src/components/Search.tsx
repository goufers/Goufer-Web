import React, { useState } from 'react';
import Nav from "./Nav";

const Dropdown = ({ label, options, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col w-[265px] bg-slate-300 items-center justify-center gap-2 rounded-[15px] h-[85px]">
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

const Search = () => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (index) => {
    setRating(index + 1);
  };

  return (
    <div className="w-full h-screen mb-24">
      <Nav />
      <div className="mt-12 h-24"></div>
      <div className="flex flex-col mt-24 mx-auto ml-12">
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
              <img src="public/images/topline1.svg" alt="topline1" />
              <img src="public/images/location.svg" alt="location" />
              <input
                type="text"
                placeholder="City / Location"
                className="w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
              />
            </div>
            <div className="flex flex-row gap-3 w-full mx-auto items-center ml-9">
              <img className="h-[44px]" src="public/images/topline1.svg" alt="topline1" />
              <span className="w-full">Reset Search</span>
              <input
                type="button"
                value={"search"}
                className="w-[99px] px-6 ml-6 py-2 text-sm text-center text-white bg-[#007F00] hover:bg-[#148a14] rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-row"></div>
      </div>

      <div className="flex flex-row justify-between w-[1200px] items-center mx-auto">
        <div className="flex flex-col gap-3 h-[950px]">
          <div className="flex flex-col w-[265px] bg-slate-300 items-center justify-center gap-2 rounded-[15px] h-[85px] mt-4">
            <div className="flex justify-between w-[233px]">
              <h1 className="w-[65px] h-[24px]">Keyword</h1>
            </div>
            <input
              type="text"
              className="w-[230px] h-[30px] rounded-[50px] border-none pl-4"
            />
          </div>

          <Dropdown label="Categories" options={['Option 1', 'Option 2', 'Option 3']} placeholder="Categories" />
          <Dropdown label="Location" options={['Option 1', 'Option 2', 'Option 3']} placeholder="Location" />
          <Dropdown label="Gender" options={['Male', 'Female', 'Other']} placeholder="Gender" />

          <div className="flex flex-col w-[265px] bg-slate-300 items-start justify-center gap-2 rounded-[15px] h-[85px]">
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

          <div className="flex flex-col w-[265px] bg-slate-300 items-center justify-center gap-2 rounded-[15px] h-[140px]">
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
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Search;
