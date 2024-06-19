const HonoursAwards = () => {
  return (
    <div className="h-[350px]">
      <h1 className="font-semibold text-[13px] py-3 ">Honours</h1>
      <div className="h-fit border-l-2 border-dotted border-gray-400 px-4">
        <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>

        <div>
          <h1 className="text-[12px]">Hospitality Management</h1>
          <p className="text-[#007f00] font-semibold text-[12px]">
            Master <span className="text-black">20/05/2024-Till Date</span>
          </p>
          <p className="items-normal text-[12px]  ">University of Lagos</p>
        </div>
      </div>
      <div className="h-fit border-l-2 border-dotted border-gray-400 px-4">
        <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>

        <div className="border-b border-[#E6F2E6] py-3">
          <h1 className="text-[12px]">State Health Ambassdor</h1>
          <p className="text-[#007f00] font-semibold text-[12px]">
            Attendee <span className="text-black">20/05/2024-Till Date</span>
          </p>
          <p className="items-normal text-[12px]  ">University of Lagos</p>
        </div>
        <div className="my-5">
          <div className="w-5 h-5 border rounded-full border-[#008307] ml-[-29px] bg-[white]"></div>
          <h1 className="text-[12px]">Awards</h1>
          <p className="text-[#007f00] font-semibold text-[12px]">
            Best Presentation Prize <span className="text-black">20/05/2024-Till Date</span>
          </p>
          <p className="items-normal text-[12px]  ">Lagos State Foods and Health Commission</p>
        </div>
      </div>
    </div>
  );
};

export default HonoursAwards;
