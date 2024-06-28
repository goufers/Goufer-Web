/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
// import { SendCode, VerifyPhone } from "../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const PhoneValidation = () => {
  const dispatch = useDispatch();
  const userPhone = useSelector((state: any) => state.Auth.authkeys.phone_number);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [Code, setCode] = useState<any>("");

  // const sendCode = () => {
  //   dispatch(SendCode(userPhone));

  //   if ("codesent") {
  //     setShowOtpInput(true);
  //   }
  // };

  // const validatePhoneNumber = (phoneNumber: string) => {
  //   const phoneNumberPattern = /^\d{10}$/;
  //   return phoneNumberPattern.test(phoneNumber);
  // };

  const VerifyCode = () => {
    dispatch(VerifyPhone(Code));
  };

  return (
    <div className="m-auto w-full h-full flex  flex-col    items-center  bg-white">
      <div className="  mx-auto mt-44 ">
        <h2 className="text-[20px] font-semibold">Phone Verification</h2>
        <p className="text-xs">We need to register phone number before getting started!</p>
        {!showOtpInput && (
          <div className="flex flex-col items-center m-auto mt-2  w-[350px] p-[20px] bg-white rounded-lg shadow-lg">
            <input
              value={userPhone}
              required
              className="outline-none p-2 border  border-green-700 rounded "
            />
            <button
              className="w-[300px] text-white text-[14px] py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#789178]"
              onClick={() => sendCode()}
            >
              Send the Code
            </button>
          </div>
        )}
      </div>

      {showOtpInput && (
        <div className="flex flex-col items-center mx-auto mt-[30px] w-[350px] space-y-3 p-[20px] bg-[#ffffff] rounded-lg shadow-lg">
          <p>Enter OTP sent to {userPhone}</p>
          <input
            type="tel"
            className=" mb-5 text-center border text-lg  border-green-400 focus:border-[#007f00] rounded-full p-2 outline-none"
            onChange={(e) => setCode(e.target.value)}
          />
          <button
            className="w-[300px] text-white text-[14px] py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#1cbb1c]"
            onClick={() => VerifyCode}
          >
            Verify Phone Number
          </button>
          <div className="flex flex-row justify-between text-xs space-x-4 ">
            <p className="mx-auto text-[#007f00]  ">Send again</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneValidation;
