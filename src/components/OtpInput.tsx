import React, { useEffect, useRef, useState } from "react";


// declare type for the props


type InputProps = { length?: number;
  onComplete: (pin: string) => void;
};


const OTPInput = ({ length = 4, onComplete }: InputProps) => {
  // if you're not using Typescript, simply do const inputRef = useRef()


  const inputRef = useRef<HTMLInputElement[]>(Array(length).fill(null));


  // if you're not using Typescript, do useState,()
  const [OTP, setOTP] = useState<string[]>(Array(length).fill(''));


  const handleTextChange = (input: string, index: number) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);


    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.


    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }


    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }


    // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.


    if (newPin.every((digit) => digit !== '')) {
      onComplete(newPin.join(''));
    }
  };

  return (
    <div className='grid grid-cols-6 gap-2 w-[250px]'>
      {Array.from({ length }, (_, index) => (
        
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={(e) => handleTextChange(e.target.value, index)}
          ref={(ref) => (inputRef.current[index] = ref as HTMLInputElement)}
          className='border border-solid border-black focus:border-[#007f00] p-2 outline-none'
          style={{ marginRight: index === length - 1 ? '0' : '5px' }}
        />
      ))}

    </div>
  );
};

export default OTPInput