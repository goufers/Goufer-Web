import { SetStateAction, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import OtpInput from "./OtpInput";

const PhoneValidation = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [valid, setValid] = useState(true);
  const [showOtpInput, setShowOtpInput] = useState(false);

  const handleChange = (value: SetStateAction<string>) => {
    setPhoneNumber(value);
    setValid(validatePhoneNumber(value));
  };

  const validatePhoneNumber = (phoneNumber: string) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const OnOtpSubmit = (otp: any) => {
    console.log('Login Successful', otp);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-[#f5f5f5]">
      <div className="text-center mx-auto">
        <h2 className="text-[20px] font-semibold">Phone Verification</h2>
        <p className="text-xs">
          We need to register phone number before getting started!
        </p>
      </div>

      {!showOtpInput && (
        <div className="flex flex-col items-center mx-auto mt-[50px] w-[350px] p-[20px] bg-[#ffffff] rounded-lg shadow-lg">
          <label className="mb-[10px]" htmlFor="">
            Phone Number :
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={handleChange}
              inputProps={{
              required: true,
              }}
            />
          </label>
          {!valid && (
            <p className="text-red-600 text-xs mt-[10px]">
              Please enter a valid phone number!
            </p>
          )}
          <button
            className="w-[300px] text-white text-[14px] py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#789178]"
            
            onClick={()=>setShowOtpInput(true)}
          >
            Send the Code
          </button>
        </div>
      )}

      {showOtpInput && (
        <div className='flex flex-col items-center mx-auto mt-[30px] w-[350px] space-y-3 p-[20px] bg-[#ffffff] rounded-lg shadow-lg'>
          <p>Enter OTP sent to {phoneNumber}</p>
          <OtpInput length={6} submit={OnOtpSubmit} />
          <button
            className="w-[300px] text-white text-[14px] py-2 rounded-lg bg-[#007f00] cursor-pointer hover:bg-[#789178]"
        
           
          >
            Verify Phone Number
          </button>
          <div className='flex flex-row justify-between text-xs space-x-4 '>
          <p className='mr-[100px]'>Edit phone number?</p>
          <p className='ml-[100px] text-[#007f00]' >Send again</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhoneValidation;
