/* eslint-disable @typescript-eslint/no-explicit-any */
import  { useState, useEffect, useRef, ChangeEvent, FC } from 'react';
import "react-phone-input-2/lib/style.css";
// import { SendCode, VerifyPhone } from "../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";
import { VerifyPhone } from "../Redux/AuthSlice";


const PhoneValidation = () => {
  const dispatch = useDispatch();
  const userPhone = useSelector((state: any) => state.Auth.authkeys?.phone_number);
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [Code, setCode] = useState("+2349073077717");

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
    // dispatch(VerifyPhone(Code));
  };

  const [otp, setOtp] = useState<number>();
  const [verified, setVerified] = useState<boolean>(false);
  const [otpVal, setOtpVal] = useState<string[]>([]);
  const textBase = useRef<HTMLDivElement>(null);

  // Generate random OTP for each first render
  useEffect(() => {
    setOtp(Math.floor(100000 + Math.random() * 900000));
  }, []);

  const clearAll = () => {
    if (textBase.current) {
      textBase.current.classList.remove("otp-error");
      textBase.current.childNodes.forEach((child) => {
        (child as HTMLInputElement).value = "";
      });
    }
    setOtpVal([]);
    setVerified(false);
  };

  const getOtp = () => {
    if (parseInt(otpVal.join("")) === otp) {
      if (textBase.current) {
        textBase.current.classList.remove("otp-error");
      }
      setVerified(true);
    } else {
      if (textBase.current) {
        textBase.current.classList.add("otp-error");
      }
    }
  };

  const focusNext = (e: ChangeEvent<HTMLInputElement>) => {
    if (textBase.current) {
      const childCount = textBase.current.childElementCount;
      const currentIndex = Array.from(e.target.parentNode?.children || []).indexOf(e.target);
      if (currentIndex !== childCount - 1) {
        (e.target.nextSibling as HTMLInputElement).focus();
      } else {
        const values: string[] = [];
        textBase.current.childNodes.forEach((child) => {
          values.push((child as HTMLInputElement).value);
        });
        if (values.length !== 0) {
          setOtpVal(values);
        }
      }
    }
  };

  useEffect(() => {
    if (otpVal.length === textBase.current?.childElementCount) {
      getOtp();
    }
  }, [otpVal]);


  return (
    <div className="m-auto w-full h-full flex flex-col items-center bg-white">
      <div className="  mx-auto mt-44 ">
        <h2 className="text-center text-[20px] font-semibold">Phone Verification</h2>
        <p className="text-center text-xs">
          We need to verify your phone number before getting started!
        </p>
        {!showOtpInput && (
          <div className="flex flex-col items-center m-auto mt-2  w-[350px] p-[20px] bg-white rounded-lg  ">
            <input
              value={userPhone}
              required
              readOnly
              className="w-auto outline-none p-2 border  font-bold text-center border-green-700 rounded-lg "
            />
            <button
              className="text-white text-[14px] mt-4 text-center px-12 py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#789178]"
              onClick={() => sendCode()}
            >
              Send Code
            </button>
          </div>
        )}
      </div>

      {showOtpInput && (
        
        <div className="flex flex-col items-center mx-auto mt-[30px] w-[350px] space-y-3 p-[20px] bg-[#ffffff] rounded-lg shadow-lg">
          <p>Enter OTP sent to {userPhone}</p>
          <>
          <h1 className='text-xl mb-3 text-center'>Enter OTP send to phone number </h1>
          <div className="w-auto flex justify-center gap-2 " ref={textBase}>
            {new Array(6).fill(null).map((_, index) => (
              <input
                className='w-[50px] h-[50px] p-3 text-xl outline-none rounded-lg focus:border-[#007f00]  border-[3px] border-solid   '
                key={index}
                type="text"
                maxLength={1}
                onChange={(e) => focusNext(e)}
                style={{ textAlign: 'center' }}
              />
            ))}
          </div>
          <button
            className={` absolute mt-4 rounded-full text-white p-2 px-5 text-center bg-[#007f00] cursor-pointer transition-all outline-[#007f00] ${otpVal.length > 0 ? 'visible hover:bg-[#574b90] text-[#fff]' : ''}`}
            onClick={clearAll}
          >
            Clear otp
          </button>
        </>
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
