import { SetStateAction, useState } from "react";




const PaymentPageContent =()=>{
    
    const data = [

        {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Pending",
            statusColor: "#FFC107",
            statusBgColor: "#FFF9E8",
            imgSrc: "./images/user-01.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-04.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-05.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-06.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Inactive",
            statusColor: "#007BFF",
            statusBgColor: "#F1F8FF",
            imgSrc: "./images/user-03.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Inactive",
            statusColor: "#007BFF",
            statusBgColor: "#F1F8FF",
            imgSrc: "./images/user-03.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Pending",
            statusColor: "#FFC107",
            statusBgColor: "#FFF9E8",
            imgSrc: "./images/user-01.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Pending",
            statusColor: "#FFC107",
            statusBgColor: "#FFF9E8",
            imgSrc: "./images/user-04.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-05.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-04.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Pending",
            statusColor: "#FFC107",
            statusBgColor: "#FFF9E8",
            imgSrc: "./images/user-01.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-04.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-05.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Active",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
            imgSrc: "./images/user-06.jpg.svg",
          },
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Inactive",
            statusColor: "#007BFF",
            statusBgColor: "#F1F8FF",
            imgSrc: "./images/user-03.jpg.svg",
          },
      
          {
            name: "John Balogun Quamdeent",
            date: "06/06/2024",
            service: "Computer Repair",
            duration: "3 days",
            status: "Inactive",
            statusColor: "#007BFF",
            statusBgColor: "#F1F8FF",
            imgSrc: "./images/user-03.jpg.svg",
          },



    ];

    const cardData = [
        {cardImg:"./images/visa.svg", cardNumber:"*************1234", expiryDate:"Expiry 06/2024", removeCard:"Remove",  },
        {cardImg:"./images/visa.svg", cardNumber:"Visa ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Remove",  },
        {cardImg:"./images/visa.svg", cardNumber:"Mastercard ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Remove", }
    ]


    const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");

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

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
    setCurrentPage(1); // Reset to first page when status changes
  };

  const handlePageClick = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };

  const getCurrentData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredData.slice(startIndex, startIndex + itemsPerPage);
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
    <div className="w-3/4 h-screen   mt-20">
    <div className="flew flex-col p-4 justify-center items-center">
      <h1 className="font-[500] text-[24px] text-[#322F37]">Payment Method</h1>

      <div className="flex flex-col w-full mt-2">
        <div className="flex flex-row justify-between items-center">
            <p className="text-[#49454F]">Update your payment information or change your preferred payment method mode.</p>

            <button className="flex flex-row w-[200px] h-[40px] bg-[#007F00] rounded-[50px] text-[#FFFFFF] text-center text-[14px] items-center justify-center gap-2 hover:bg-[#005f00] focus:outline-none">
             <img src="./images/plusicon.svg" alt="Add icon" className="w-4 h-4" />
             <span>Add Payment Method</span>
          </button>

            
        </div>



        <div className="flex flex-row w-full mt-4 gap-6">

            {cardData.map((d,i)=>(

         <div className="flex flex-row border border-[#E4E7EC] w-[330px] h-[114px] p-4 text- rounded-[8px] ">
          <div key={i} className="flex flex-row w-full h-[82px] items-start">
           <img src={d.cardImg} alt="" className="w-[42px] h-[32px]" />
           <div className="flex flex-col pl-4">
            <p className="text-[#344054]">{d.cardNumber}</p>
            <p className="text-[#475467] font-[400] pt-2">{d.expiryDate}</p>

              <div className="flex flex-row w-[137px] justify-between mt-2">
           <span className="text-[#475467]">{d.removeCard}</span>

           <button className="text-[#005A00] font-semibold">Edit</button>

           </div>

              </div>
   
                   </div>
            <input type="checkbox" className="form-checkbox rounded-full w-5 h-5 border border-[#D0D5DD] bg-green-500" />



          </div>

            ))}
       
        </div>
        <p className="text-[#605D66] pt-3">Notes: Please note that the payment method selected as default will be used in your in app transactions</p>
       

      </div>
    

      <div className=" flex flex-col">
     

      <div className="flex flex-col w-full gap-4 bg-white p-3 mt-4">
        <div className="flex w-[1,135px] mt-4 items-center justify-between ">
          <p>Payment History (24)</p>

          <div className="relative inline-block w-[102px]">
            <select className="block appearance-none w-full h-[36px] rounded-[25px] border border-[#AEA9B4] bg-white text-[#605D66] outline-none text-center pr-6">
              <option value="" disabled selected>
                Default
              </option>
              <option value="option1">option1</option>
              <option value="option2">option2</option>
              <option value="option3">option3</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-6 w-6 z-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M5.516 7.548a1 1 0 011.32-.083l.094.083L10 10.293l3.07-2.83a1 1 0 011.32 1.497l-.094.083-4 3.689a1 1 0 01-1.32 0l-4-3.689a1 1 0 010-1.497z" />
              </svg>
            </div>
          </div>
        </div>

        {/* titile head */}
        <div className="flex flex-row justify-between w-full h-[40px] bg-[#E6F2E6] items-center text-[15px] text-[#322F37]">



            <div className="flex flex-row w-[840px] items-center justify-between">
            <div className="w-[526px] flex flex-row justify-between items-center">


            <div className="flex flex-row items-center justify-between w-[235px]">

              <div className="flex flex-row p-2">
           <input type="checkbox" name="" id="" />
              <span className="pl-2">ID</span>
            </div>

             <p>Date</p>

               </div>

               <p>Transaction Description</p>

               </div>

               <div className="flex flex-row w-[266px] justify-between pr-6">

                <p>Amount</p>
               <p>Status</p>

                </div>


            </div>
          
            


        
        </div>
        {/* ------------------first content----------- */}

        <div className="flex flex-row w-full items-center justify-between">
            <div className="w-[526px] flex flex-row justify-between items-center">


            <div className="flex flex-row items-center justify-between w-[299px]">

              <div className="flex flex-row p-2">
           <input type="checkbox" name="" id="" />
              <span className="pl-2">#Invoice0004321</span>
            </div>

             <p className="pr-4">06/06/2024</p>

               </div>

               <p>New Subscription</p>

               </div>

               <div className="flex flex-row w-[266px] justify-between pr-6">

                <p>Amount</p>
               <p>Status</p>

                </div>


            </div>

       
      </div>
    </div>
     

      <div className="flex justify-center text-[#667085] mt-6">
        <p>© 2024 Goufer All rights reserved.</p>
      </div>
    </div>
  </div>

);

}

export default PaymentPageContent;