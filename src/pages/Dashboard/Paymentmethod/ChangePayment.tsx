import React, { useState } from "react"


const ChangePayment : React.FC = () =>{

    const cardData = [
        {cardImg:"./images/visa.svg", cardNumber:"*************1234", expiryDate:"Expiry 06/2024", removeCard:"Set as default",  },
        {cardImg:"./images/applepay.svg", cardNumber:"Apple ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Set as default",  },
        {cardImg:"./images/masta.svg", cardNumber:"Mastercard ending in 1234", expiryDate:"Expiry 06/2024", removeCard:"Set as default", }
    ]

    
        const [selectedCard, setSelectedCard] = useState(null);
      
        const handleCardClick = (index) => {
          setSelectedCard(selectedCard === index ? null : index);
        };
   
    return (

      <div className="flex flex-col items-center  mx-auto w-[480px] h-[588px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-6">

         <div className="flex flex-col items-center  w-[432px] h-[468px] mt-6">
         <img className="w-[48px] h-[48px]"  src="./images/cardz.svg" alt="verify email" />

           <div className="flex flex-col text-center pt-3">
          <h1 className="text-2xl text-[#1D1A22] font-semibold">Change your payment method</h1>

         <p className="pt-3">Update your plan payment details.</p>
         </div>

         <div className="flex flex-col items-center justify-center text-[#c7c7c8] mt-2">
            







      </div>

      {/* <div className="flex flex-col  mt-4 gap-4 h-[324px] w-[432px] items-center">

       {cardData.map((d,i)=>(

      <div className="flex flex-row border border-[#E4E7EC] w-[432px] h-[100px] text- rounded-[8px] items-center justify-center">
      <div key={i} className="flex flex-row w-[380px] h-[68px]  justify-between">

        <div className="flex">


     <img src={d.cardImg} alt="" className="w-[42px] h-[32px]" />
      <div className="flex flex-col pl-4">
      <p className="text-[#344054]">{d.cardNumber}</p>
       <p className="text-[#475467] font-[400]">{d.expiryDate}</p>

       <div className="flex flex-row w-[137px] justify-between">
        <span className="text-[#475467]">{d.removeCard}</span>

          <button className="text-[#005A00] font-semibold">Edit</button>

        </div>



       </div>

      </div>

                     <div className="flex border border-[#D0D5DD] rounded-full w-[20px] h-[20px] bg-green-800 items-center justify-center">
                    <img src="./images/tick.svg" alt="" />
                   </div>

       
       
       </div>
         





      </div>

))}

         </div> */}


<div className="flex flex-col mt-4 gap-4 h-[324px] w-[432px] items-center">
      {cardData.map((d, i) => (
        <div
          key={i}
          className={`flex flex-row w-[432px] h-[100px] rounded-[8px] items-center justify-center ${
            selectedCard === i ? 'border-[#54A954] bg-[#E6F2E6]' : 'border border-[#E4E7EC]'
          }`}
          onClick={() => handleCardClick(i)}
        >
          <div className="flex flex-row w-[380px] h-[68px] justify-between">
            <div className="flex">
              <img src={d.cardImg} alt="" className="w-[42px] h-[32px]" />
              <div className="flex flex-col pl-4">
                <p className={selectedCard === i ? 'text-[#004600]' : 'text-[#344054]'}>
                  {d.cardNumber}
                </p>
                <p className={`font-[400] ${
                  selectedCard === i ? 'text-[#007400]' : 'text-[#475467]'
                }`}>
                  {d.expiryDate}
                </p>
                <div className="flex flex-row w-[137px] justify-between">
                  <span className={selectedCard === i ? 'text-[#007100]' : 'text-[#475467]'}>
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
        </div>
      ))}
    </div>

      
        


        
        </div>

        <div className="flex  flex-row items-center justify-center gap-4 w-[432px] h-[45px] pt-2"> 
         <button className="w-[210px] h-[40px] rounded-[50px] text-[#49454F] bg-white border border-[#79747E] hover:bg-gray-300 transition-colors duration-300">Cancel</button>
        <button className="w-[210px] h-[40px] rounded-[50px] bg-[#007F00] hover:bg-green-500 transition-colors duration-300 text-white">Save</button>
       </div>

      </div>
    )
  
}

export default ChangePayment;
