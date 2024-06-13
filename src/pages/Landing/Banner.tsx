const Banner = () => {
  return (
    <div className="w-full h-screen pt-[150px] bg-[#FAFFFA] flex flex-row">
      <div className="w-[596px] mx-0 px-28 h-auto   flex flex-col">
        <div className=" w-[300px] px-5 py-2 text-[14px] bg-[#46528f] text-white">
          Experienced Assistance at your finger tips
        </div>
        <div className="w-[480px] mx-auto  py-4 pb-10  ">
          <h2 className="text-5xl font-semibold font-roboto text-[#322F37] ">
            Achieve excellence with <span className="text-[#007F00] font-bold">Goufer,</span>{" "}
            by using our platform.
          </h2>
        </div>

        <div className="w-[480px]   mx-auto  pt-2 ">
          <h2 className="text-xs font-roboto text-[#49454F] ">
            Easily find the perfect expert for your next task with our powerful search engine.
          </h2>
        </div>

        <div className="w-[480px] h-auto p-4 bg-white rounded-full shadow-md hover:shadow-lg flex flex-row items-center">
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
          <input
            type="text"
            placeholder="City / Location"
            className="w-36 px-1 text-xs text-slate-800 border-none focus:outline-none"
          />
          <div className="w-1/4 ml-2 border border-white border-l-slate-400 ">
            <input
              type="button"
              value={"search"}
              placeholder="Profession or Keyword"
              className="w-full px-6 ml-6 py-2 text-sm text-center text-white bg-[#007F00] hover:bg-[#148a14] rounded-full"
            />
          </div>
        </div>
        <div className="w-[380px] mx-16  py-2 ">
          <h2 className="text-xs font-roboto  text-[#49454F] ">
            Popular Searches: Real Estate, Event Planer
          </h2>
        </div>
      </div>
      <div className="w-1/2 mx-auto h-auto items-center flex flex-col">
        <img src="/images/Component 2@2x.png" alt="banner image" className="w-9/12 h-auto" />
      </div>
    </div>
  );
};

export default Banner;
