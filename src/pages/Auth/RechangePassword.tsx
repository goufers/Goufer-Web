import { IoMdCheckmarkCircle } from "react-icons/io";



const RechangePassword = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center mx-auto ">
      <div className="w-[380px] h-[450px]  mt-[50px] border shadow-md my-4 rounded-xl border-[#007f00] space-y-2  bg-[] flex flex-col justify-center items-center">
        <h1 className="text-[25px] font-semibold">Set your new password</h1>
        <IoMdCheckmarkCircle color='#007f00' size={100}/>
        <p className="text-xs tect-center">
          Your new password should to different from
        </p>
        <p className="text-xs tect-center">password previously used</p>
        
        <form action="" className="flex flex-col spaxe-y-4 text-[11px]">
          <label htmlFor="" className="pl-2 mt-3">
            Type Old Password:
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="border w-[300px] rounded-lg outline-none py-1.5 pl-2 mb-3 "
          />
          <label htmlFor="" className="pl-2">
            Type New password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="border w-[300px] rounded-lg outline-none py-1.5 pl-2 "
          />
          <label htmlFor="" className="pl-2">
            Confirm your new password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="border w-[300px] rounded-lg outline-none py-1.5 pl-2 "
          />
        </form>

        <button className="w-[300px] rounded-xl p-1 bg-[#007f00] text-white">
          Confirm
        </button>
        <button className=" cursor-pointer flex flex-row items-center ">
           Back to Login
        </button>
      </div>
    </div>
  )
}

export default RechangePassword