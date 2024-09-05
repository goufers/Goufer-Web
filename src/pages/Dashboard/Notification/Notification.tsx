import { SetStateAction, useState } from "react";
import Select from "react-select";
import { IoMdArrowForward } from "react-icons/io";
import { GoTrash } from "react-icons/go";
import { HiOutlineFlag } from "react-icons/hi2";

// interface OptionType {
//   label: string;
//   value: string;
// }
// const options = [
//   { value: "newest", label: "Newest" },
//   { value: "oldest", label: "Oldest" },
// ];

const Notification = () => {
  const [selectedOption] = useState("false");

  const data = [
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      date: "Today at 09:45 PM",
      status: "true",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      date: "Today at 09:45 PM",
      status: "true",

      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",

      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
    },
    {
      name: "John Balogun Quamdeen",
      status: "true",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
    },
    {
      name: "John Balogun Quamdeen",
      status: "true",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
    },
    {
      name: "John Balogun Quamdeen",
      message: "Hey Quamdeen, we've got a new user research opportunity for you...",
      status: "true",
      date: "Today at 09:45 PM",
      imgSrc:
        "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
    },
  ];

  const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus] = useState("");

  const handleNext = () => {
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   setSelectedStatus(event.target.value);
  //   setCurrentPage(1); // Reset to first page when status changes
  // };

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const filteredData = selectedStatus
    ? data.filter((item) => item.status === selectedStatus)
    : data;

  const renderPageNumbers = () => {
    const pageNumbers = [];

    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      pageNumbers.push(1, 2, 3);

      if (currentPage > 4) {
        pageNumbers.push("...");
      }

      if (currentPage > 3 && currentPage < totalPages - 2) {
        pageNumbers.push(currentPage);
      }

      if (currentPage < totalPages - 3) {
        pageNumbers.push("...");
      }

      pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
    }

    return pageNumbers;
  };

  return (
    <div className="w-3/4 h-auto  mt-[60px] bg-white mx-auto overflow-auto ">
      <h1 className="text-[24px] font-[500px] ml-2">Notification</h1>

      <div className="mx-auto w-full md:w-[842px] h-[55px] flex flex-col-reverse md:flex-row md:items-center justify-around md:gap[73px] mt-2 border-b border-[#E6F2E6]">
        <h2 className="text-[16px]">104 Total Notification</h2>
        <div className="mx-auto w-full md:w-[644px] h-[55px] p-4 bg-white rounded-full shadow-md hover:shadow-lg flex flex-row items-center ">
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

      <div className="flex flex-row justify-between mx-auto mt-4 ">
        <p className="ml-3 text-xl">All Notification</p>

        <Select
          defaultValue={selectedOption}
          //  onChange={setSelectedOption} options={options}
        />
      </div>
      <div className="flex flex-col w-auto mx-auto pr-3 border border-[#E6F2E6]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-row justify-between items-center py-2 w-auto hover:bg-[#d2e7d2] text-[12px] ml-3 border border-[#AEA9B4]"
          >
            <img src={item.imgSrc} alt="user" className="" />
            <p className="truncate text-[15px] font-[400]">{item.name}</p>
            <p className="text-[15px]">{item.message}</p>
            <p className="text-[15px]">{item.date}</p>
            <HiOutlineFlag className="rounded-full bg-white w-5 h-4" />
            <GoTrash className="rounded-full bg-white w-5 h-4  " />
          </div>
        ))}
      </div>
      <div className="flex flex-row w-full md:w-[497px] h-[40px] mx-auto items-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6] mt-6">
        <div
          className={`w-[119px] h-[40px] flex items-center justify-center border-[#E6F2E6] ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed" : " text-green-500"
          }`}
          onClick={handlePrevious}
        >
          Previous
        </div>

        {renderPageNumbers().map((page, index) => (
          <div
            key={index}
            className={`flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6] ${
              currentPage === page ? "bg-gray-200 text-green-500" : ""
            } ${page === "..." ? "cursor-default" : "cursor-pointer"}`}
            onClick={() => typeof page === "number" && handlePageClick(page)}
          >
            {page}
          </div>
        ))}

        <div
          className={`w-[92px] h-[40px] flex items-center justify-center border-[#E6F2E6] border-l-none ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed" : " text-green-500"
          }`}
          onClick={handleNext}
        >
          Next
          <IoMdArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Notification;
