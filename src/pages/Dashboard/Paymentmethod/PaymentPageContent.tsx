
import { SetStateAction, useState } from "react";




const PaymentPageContent : React.FC = () => {
    
    const data = [

        {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Pending",
            statusColor: "#FFC107",
            statusBgColor: "#FFF9E8",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Failed",
            statusColor: "#DC362E",
            statusBgColor: "#FCEEEE",
           
          },


          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },

          {
            Invoice: "#Invoice0004321",
            date: "06/06/2024",
            transaction: "New Subscription",
            amount:"1000",
            status: "Successful",
            statusColor: "#1BA345",
            statusBgColor: "#F2FFF6",
           
          },
      
        



    ];

    const cardData = [
        {cardImg:"./images/visa.svg", cardNumber:"*************1234", expiryDate:"Expiry 06/2024", removeCard:"Remove",  },
        {cardImg:"./images/applepay.svg", cardNumber:"Apple ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Remove",  },
        {cardImg:"./images/masta.svg", cardNumber:"Mastercard ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Remove", }
    ]


    const itemsPerPage = 5;

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedStatus, setSelectedStatus] = useState("");

  // const [selectedCard, setSelectedCard] = useState(null);

  // const handleCardClick = (index) => {
  //   setSelectedCard(selectedCard === index ? null : index);
  // };


  const [selectedCard, setSelectedCard] = useState(null)

  const handleCardClick=(index)=>{

    setSelectedCard(selectedCard === index?null :index);

  }

  
  

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



        {/* <div className="flex flex-row w-full mt-4 gap-6">

            {cardData.map((d,i)=>(

         <div className="flex flex-row border border-[#E4E7EC] w-[330px] h-[114px] p-4 text- rounded-[8px] ">
          <div key={i} className={`flex flex-row w-full h-[82px] items-star ${selectedCard===i ? ' border-[#54A954] bg-[#e3f1e3]' : 'border border-[#E4E7EC]' }`}
          onClick={()=> handleCardClick(i)}
          
          >
           <img src={d.cardImg} alt="" className="w-[42px] h-[32px]" /> 
           <div className="flex flex-col pl-4">
            <p className={selectedCard === i ? 'text-[#004600]' : 'text-[#344054]'}>{d.cardNumber}</p>
            <p className={selectedCard === i ? 'text-[#007400] font-[400] pt-2': 'text-[#475467] font-[400] pt-2'}>{d.expiryDate}</p>

              <div className="flex flex-row w-[137px] justify-between mt-2">
           <span className={selectedCard ===i ? 'text-[#B3261E]' :'text-[#475467]'}>{d.removeCard}</span>

           <button className="text-[#005A00] font-semibold">Edit</button>

           </div>

              </div>
   
                   </div>
                   <div className={` flex  rounded-full w-[20px] h-[20px] items-center justify-center ${selectedCard == i ? 'bg-[#007400]' :'border border-[#D0D5DD]'}`}>
                    <img src="./images/tick.svg" alt="" className={selectedCard === i ? '' : 'hidden'} />
                   </div>




                   


    



          </div>

            ))}
       
        </div> */}

    <div className="flex flex-row w-full mt-4 gap-6">
      {cardData.map((d, i) => (
        <div
          key={i}
          className={`flex flex-row w-[330px] h-[114px] p-4 rounded-[8px] ${
            selectedCard === i ? 'border-[#54A954] bg-[#e3f1e3]' : 'border border-[#E4E7EC]'
          }`}
          onClick={() => handleCardClick(i)}
        >
          <div className="flex flex-row w-full h-[82px] items-start">
            <img src={d.cardImg} alt="" className="w-[42px] h-[32px]" />
            <div className="flex flex-col pl-4">
              <p className={selectedCard === i ? 'text-[#004600]' : 'text-[#344054]'}>
                {d.cardNumber}
              </p>
              <p className={`font-[400] pt-2 ${
                selectedCard === i ? 'text-[#007400]' : 'text-[#475467]'
              }`}>
                {d.expiryDate}
              </p>
              <div className="flex flex-row w-[137px] justify-between mt-2">
                <span className={selectedCard === i ? 'text-[#B3261E]' : 'text-[#475467]'}>
                  {d.removeCard}
                </span>
                <button className="text-[#005A00] font-semibold">Edit</button>
              </div>
            </div>
          </div>
          <div
            className={`flex border rounded-full w-[20px] h-[20px] items-center justify-center ${
              selectedCard === i ? 'bg-[#007400] border-[#007400]' : 'border-[#D0D5DD]'
            }`}
          >
            <img
              src="./images/tick.svg"
              alt=""
              className={selectedCard === i ? '' : 'hidden'}
            />
          </div>
        </div>
      ))}
    </div>

        <p className="text-[#605D66] pt-3">Notes: Please note that the payment method selected as default will be used in your in app transactions</p>
       

      </div>
    

      <div className=" flex flex-col">
     

      <div className="flex flex-col w-full gap-4 bg-white p-3 mt-4">
        <div className="flex w-[1,135px] mt-4 items-center justify-between ">
          <p>Payment History (24)</p>

         <div className="flex flex-row w-[249px] justify-between">
         <div className="relative inline-block w-[102px]">
            <select className="block appearance-none w-[104px] h-[40px] rounded-[25px] border border-[#AEA9B4] bg-white text-[#605D66] outline-none text-center pr-6">
              <option value="" disabled selected>
                Newest
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

          <button className="flex flex-row w-[129px] h-[40px] bg-[#007F00] rounded-[50px] text-[#FFFFFF] text-center text-[14px] items-center justify-center gap-2 hover:bg-[#005f00] focus:outline-none">
             
             <span>Download</span>
             <img src="./images/download-05.svg" alt="download" className="w-4 h-4" />
          </button>
         </div>
        </div>

        {/* titile head */}
        <div className="flex flex-row justify-between w-full h-[40px] bg-[#E6F2E6] items-center text-[15px] text-[#322F37]">



            <div className="flex flex-row w-[860px] items-center justify-between">
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

                <p className="pl-6">Amount</p>
               <p className="pr-4">Status</p>

                </div>

              


            </div>

            
          
            


        
        </div>
        {/* ------------------first content----------- */}
          
        <div className="flex flex-col gap-4 w-full text-[#9ca3c3]">
          
          

          

          {data.map((d,i)=>(

          <div key={i} className="flex flex-col">
         <div className="flex flex-row w-full items-center justify-between">
            <div className="w-[530px] flex flex-row justify-between items-center">


            <div className="flex flex-row items-center justify-between w-[299px]">

               <div className="flex flex-row p-2">
           <input type="checkbox" name="" id="" />
               <span className="pl-2 text-[#49454F]">{d.Invoice}</span>
                  </div>

           <p className="pr-4">{d.date}</p>

                 </div>

              <p className="pr-7">{d.transaction}</p>

              </div>

               <div className="flex flex-row w-[266px] justify-between pr-6">

               <p className="pl-4">${d.amount}</p>

                   <div
                      className="w-[88px] h-[28px] flex justify-center items-center ml-6"
                      style={{ backgroundColor: d.statusBgColor }}>
                    
                      <p className="text-[15px]" style={{ color: d.statusColor }}>
                        {d.status}
                      </p>
                    </div>

      
   

               </div>


             <div className="flex flex-row w-[100px] justify-between">

            <img src="./images/delete.svg" alt="delete" />
              <img src="./images/download.svg" alt="download" />

                </div>


              </div>
              <hr className="bg-[#AEA9B4] w-full mt-2" />
             </div>

               ))}

            <div className="flex flex-row w-full md:w-[497px] h-[40px] mx-auto items-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6] mt-6">
            <div
              className={`w-[119px] h-[40px] flex items-center justify-center border-[#E6F2E6] ${
                currentPage === 1 ? "opacity-50 cursor-not-allowed" : " text-green-500"
              }`}
              onClick={handlePrevious}
            >
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717681157/arrow-left_cq1gnw.svg"
                alt="previous"
              />
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
                currentPage === totalPages
                  ? "opacity-50 cursor-not-allowed"
                  : " text-green-500"
              }`}
              onClick={handleNext}
            >
              Next
              <img
                src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717685150/arrow-right_lmffkb.svg"
                alt="next"
              />
            </div>
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