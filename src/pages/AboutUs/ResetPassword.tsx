
import { BiArrowBack } from 'react-icons/bi';
import { GiPadlock } from 'react-icons/gi';

const ResetPassword = () => {
  return (
    <div className="w-full h-screen bg-white flex justify-center mx-auto ">
      <div className="w-[380px] h-[450px]  mt-[50px] border shadow-md my-4 rounded-xl border-[#007f00] space-y-2  bg-[] flex flex-col justify-center items-center">
        <h1 className="text-[20px] font-semibold">Reset password</h1>
        
        
        <GiPadlock color="#007f00" size={100} />
        
        <form action="" className="flex flex-col space-y-2 text-[14px]">
          <div className="mt-4 flex flex-col">
            <label htmlFor="" className="pl-2 ">
            Password:
          </label>
          <input
            type="password"
            placeholder="Enter new password"
            className="border w-[300px] rounded-lg outline-none py-1.5 pl-2  "
          />
          </div>
          <div className="mb-2 flex flex-col">
          <label htmlFor="" className="pl-2">
            Confirm your new password:
          </label>
          <input
            type="password"
            placeholder="Confirm new password"
            className="border w-[300px] rounded-lg outline-none py-1.5 pl-2 "
          />
          </div>
        </form>

        <button className="w-[300px] rounded-xl p-2 bg-[#007f00] text-white">
          Confirm
        </button>
        <button className=" cursor-pointer flex flex-row items-center ">
          <BiArrowBack /> Back to Login
        </button>
      </div>
    </div>
  );
};

export default ResetPassword;
