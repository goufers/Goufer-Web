import { SetStateAction, useState } from "react";






const Employmentdata = () => {

    const data = [
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-01.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-04.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-05.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-06.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Inactive",
        statusColor: "#007BFF",
        statusBgColor: "#F1F8FF",
        imgSrc: "./images/user-03.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Inactive",
        statusColor: "#007BFF",
        statusBgColor: "#F1F8FF",
        imgSrc: "./images/user-03.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-01.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-04.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-05.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-04.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-01.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-04.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-05.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-06.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Inactive",
        statusColor: "#007BFF",
        statusBgColor: "#F1F8FF",
        imgSrc: "./images/user-03.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Inactive",
        statusColor: "#007BFF",
        statusBgColor: "#F1F8FF",
        imgSrc: "./images/user-03.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-01.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Pending",
        statusColor: "#FFC107",
        statusBgColor: "#FFF9E8",
        imgSrc: "./images/user-04.jpg.svg"
      },
  
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3 days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-05.jpg.svg"
      },
      {
        name: "John Balogun Quamdeent",
        date: "06/06/2024",
        service: "Computer Repair",
        duration: "3days",
        status: "Active",
        statusColor: "#1BA345",
        statusBgColor: "#F2FFF6",
        imgSrc: "./images/user-04.jpg.svg"
      },
  
  
      // Add similar objects to repeat content 6 times
    ];
    const itemsPerPage = 3;
    const totalPages = Math.ceil(data.length / itemsPerPage);
  
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedStatus, setSelectedStatus] = useState('');
  
    const handleNext = () => {
      if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
      }
    };
  
    const handlePrevious = () => {
      if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
      }
    };
  
    const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedStatus(event.target.value);
      setCurrentPage(1); // Reset to first page when status changes
    };
  
    const handlePageClick = (pageNumber: SetStateAction<number>) => {
      setCurrentPage(pageNumber);
    };
  
    const getCurrentData = () => {
      const startIndex = (currentPage - 1) * itemsPerPage;
      return data.slice(startIndex, startIndex + itemsPerPage);
    };
  
    const renderPageNumbers = () => {
      const pageNumbers = [];
      
      if (totalPages <= 5) {
        for (let i = 1; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        pageNumbers.push(1, 2, 3);
        
        if (currentPage > 4) {
          pageNumbers.push('...');
        }
  
        if (currentPage > 3 && currentPage < totalPages - 2) {
          pageNumbers.push(currentPage);
        }
  
        if (currentPage < totalPages - 3) {
          pageNumbers.push('...');
        }
        
        pageNumbers.push(totalPages - 2, totalPages - 1, totalPages);
      }
  
      return pageNumbers;
    };





    return (


<div className=" flex flex-col">
{/* -----------------search part----------- */}

<div className="flex w-full mt-4 items-center">



 <p>15 Total Employments</p>





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




<div className="border rounded-[25px] w-[168px] outline-none h-[54px]  flex items-center justify-center bg-white">
<select
className=" items-center outline-none"
value={selectedStatus}
onChange={handleStatusChange}
>
<option value="">All Status</option>
<option value="Active">Active</option>
<option value="Inactive">Inactive</option>
<option value="Pending">Pending</option>
</select>

</div>





</div>

{/* ------------------end of search----------------- */}



<div className="flex flex-col w-full gap-4 bg-white p-3 mt-4">

<div className="flex w-[1,135px] mt-4 items-center justify-between ">    

<p>All Employers</p>





<div className="relative inline-block w-[102px]">
<select className="block appearance-none w-full h-[36px] rounded-[25px] border border-[#AEA9B4] bg-white text-[#605D66] outline-none text-center pr-6">
<option value="" disabled selected>Default</option>
<option value="option1">option1</option>
<option value="option2">option2</option>
<option value="option3">option3</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
<svg className="fill-current h-6 w-6 z-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.516 7.548a1 1 0 011.32-.083l.094.083L10 10.293l3.07-2.83a1 1 0 011.32 1.497l-.094.083-4 3.689a1 1 0 01-1.32 0l-4-3.689a1 1 0 010-1.497z"/></svg>
</div>
</div>












</div>


{/* titile head */}
<div className="flex flex-row justify-between w-full h-[40px] bg-[#E6F2E6] items-center text-[15px]">

<div className="flex flex-row w-[900px] justify-between pl-2">

<div className="flex w-[400px] justify-between">

<div className="flex flex-row w-[260px] justify-between">


<p>Goufer Name</p>
<p>Date</p>

</div>

<p>Service</p>


</div>

<div className="flex w-[390px] justify-between">

<div className="flex flex-row w-[220px] justify-between">


<p>Description</p>
<p>Duration</p>

</div>

<p className="pr-14">Status</p>


</div>

</div>






</div>
{/* ------------------first content----------- */}


<div className="flex flex-col gap-4 w-full text-[#74788D]">
{getCurrentData().map((item, index) => (
<div key={index} className="flex flex-col">
<div className="flex justify-between items-center gap-4 w-full">
<div className="flex w-[400px] justify-between items-center gap-12">
<div className="flex flex-row gap-4 items-center">
<img src={item.imgSrc} alt="user" />
<p className="truncate text-[15px] font-[400]">{item.name}</p>
</div>
<div className="flex justify-between gap-6">
<p className="text-[15px]">{item.date}</p>
<p className="truncate text-[15px]">{item.service}</p>
</div>
</div>
<div className="flex w-[400px] justify-between items-center">
<div className="flex flex-row gap-2 pl-6 items-center">
<p className="truncate text-[15px] font-[400]">{item.service}</p>
</div>
<div className="flex justify-around gap-9">
<p className="text-[15px]">{item.duration}</p>
<div className="w-[80px] h-[28px] flex justify-center items-center ml-6" style={{ backgroundColor: item.statusBgColor }}>
<p className="text-[15px]" style={{ color: item.statusColor }}>{item.status}</p>
</div>
</div>
</div>
<div className="flex gap-2 pr-2">
<img src="./images/Chat Icon.svg" alt="Chat" />
<img src="./images/View Icon.svg" alt="View" />
</div>
</div>
<hr className="bg-red-600 w-full mt-2" />
</div>
))}

<div className="flex flex-row w-full md:w-[497px] h-[40px] mx-auto items-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6] mt-6">
<div
className={`w-[119px] h-[40px] flex items-center justify-center border-[#E6F2E6] ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
onClick={handlePrevious}
>
<img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717681157/arrow-left_cq1gnw.svg" alt="previous" />
Previous
</div>

{renderPageNumbers().map((page, index) => (
<div
key={index}
className={`flex flex-row items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6] ${currentPage === page ? 'bg-gray-200' : ''} ${page === '...' ? 'cursor-default' : 'cursor-pointer'}`}
onClick={() => typeof page === 'number' && handlePageClick(page)}
>
{page}
</div>
))}

<div
className={`w-[92px] h-[40px] flex items-center justify-center border-[#E6F2E6] border-l-none ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
onClick={handleNext}
>
Next
<img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717685150/arrow-right_lmffkb.svg" alt="next" />
</div>
</div>
</div>

</div>

</div>


);
};

export default Employmentdata;
