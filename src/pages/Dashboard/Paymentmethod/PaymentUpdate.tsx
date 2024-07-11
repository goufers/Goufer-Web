 interface updatepayState{

    setUpdatePayment :(item:any) => void
 }


const PaymentUpdate = ({ setUpdatePayment }:updatepayState) =>{

  
   
    return (

      <div className="flex flex-col items-center  mx-auto w-[480px] h-[412px] hover:shadow-lg shadow-md bg-white rounded-[15px] mt-12 gap-2">

         <div className="flex flex-col items-center  w-[432px] h-[292px] mt-6">
         <img className="w-[48px] h-[48px]"  src="./images/cardz.svg" alt="verify email" />

           <div className="flex flex-col text-center mt-2">
          <h1 className=" text-[#322F37] font-semibold">Update payment method</h1>

         <p className="pt-3 text-[#605D66]">Update your card details.</p>
         </div>


           <div className="flex flex-col items-center justify-center text-[#c7c7c8] mt-4">

             <div className="flex flex-row w-[432px] h-[70px] justify-between items-center">
              <div className="flex flex-col w-[304px] h-[66px]">
       <h2 className="text-[#49454F] text-[14px]">Name on card</h2>

       <div className="flex flex-row w-[304px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
           <input type="text"  className="w-[276px] h-[20px] outline-none text-[#786596]"/>
       </div>
            </div>

             <div className="flex flex-col w-[112px] h-[66px]">
             <h2 className="text-[#49454F] text-[14px]">Expiry</h2>

             <div className="flex flex-row w-[112px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
           <input type="text"  className="w-[84px] h-[20px] outline-none text-[#453e4f] pl-4"/>
            </div>
             </div>
           </div>
   

           <div className="flex flex-row w-[432px] h-[70px] justify-between items-center pt-4">
           <div className="flex flex-col w-[304px] h-[66px] text-[14px]">
          <p className="text-[#49454F]">Card number</p>
      

         <div className="flex flex-row w-[304px] h-[40px] border border-[#9eabbf] items-center justify-center  rounded-[8px] mt-2">
          <div className="flex  w-[280px] h-[24px] gap-2">
         <img src="public/images/masta.svg" alt="card" />  <input type="text"  className=" outline-none text-[#322F37] w-[260px]"/>
          </div>
         </div>
    
       </div>

         <div className="flex flex-col w-[112px] h-[66px]  text-[14px]">
           <p className="text-[#49454F] font-Roboto">CVV</p>

          <div className="flex flex-row w-[112px] h-[40px] border border-[#9eabbf] items-center justify-center rounded-[8px] mt-2">
           <input type="text"  className="w-[84px] h-[20px] outline-none text-[#322F37]"/>
          </div>
           </div>
        </div>







            </div>


      
        


        
        </div>

        <div className="flex  flex-row items-center justify-center gap-4 w-[432px] h-[45px] mt-2"> 
         <button className="w-[210px] h-[40px] rounded-[50px] text-[#49454F] bg-white border border-[#79747E] hover:bg-gray-300 transition-colors duration-300"
         onClick={()=>setUpdatePayment ("none")}>Cancel</button>
        <button className="w-[210px] h-[40px] rounded-[50px] bg-[#007F00] hover:bg-green-500 transition-colors duration-300 text-white" >Update</button>
       </div>

      </div>
    )
  
}

export default PaymentUpdate;
