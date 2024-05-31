import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const SignUp: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="mx-auto fixed top-8 left-0 right-0 w-[1006px] h-[800px] justify-center flex flex-row items-center min-h-screen z-30">
      <div className="bg-white p-8 shadow-md w-[503px] h-[700px] rounded-tl-[25px] rounded-bl-[25px] gap-4">
        <div className="flex justify-between w-[446px]">
          <h1 className="text-[#1D1A22] text-2xl w-full h-[28px] font-roboto font-medium text-[22px] leading-[28px] mb-6">
            Sign up to Goufer
          </h1>
          <img className="w-[22px] h-[22px]" src="./images/exit.jpg" alt="exit" />
        </div>

        <div className="flex gap-2">
          <div className="mb-4 relative">
            <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
              First name
            </p>
            <input
              type="text"
              placeholder="Firstname"
              className="w-[220px] h-[44px] pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
          <div className="mb-4 relative">
            <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
              Last name
            </p>
            <input
              type="text"
              placeholder="Lastname"
              className="w-[220px] h-[44px] pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
            />
          </div>
        </div>

        <div className="mb-4 relative flex flex-col">
          <span>
            <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
              Phone
            </p>
          </span>
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputStyle={{
              width: "455px",
              height: "44px",
              paddingLeft: "65px", // Adjusted padding to ensure space for the flag and country code
              paddingRight: "10px",
              borderRadius: "9999px", // rounded-full
              border: "1px solid #D1D5DB", // gray-300
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            buttonStyle={{
              borderTopLeftRadius: "9999px", // rounded-full
              borderBottomLeftRadius: "9999px", // rounded-full
              borderRight: "none",
              height: "44px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "10px", // Ensuring enough space for the flag and country code
              paddingRight: "10px",
            }}
            containerClass="phone-input-container"
            buttonClass="phone-input-button"
          />
        </div>

        <div className="mb-4 relative">
          <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
            Input Email
          </p>
          <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type="email"
            placeholder="Email"
            className="w-[455px] h-[44px] pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
          />
        </div>

        <div className="mb-4 relative">
          <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
            Password
          </p>
          <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input
            type={showPassword ? "password" : "text"}
            placeholder="Password"
            className="w-[455px] h-[44px] pl-10 pr-10 py-2 rounded-full border border-gray-300"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? (
              <i className="fas fa-eye-slash"></i>
            ) : (
              <i className="fas fa-eye"></i>
            )}
          </button>
        </div>

        <button className="w-[455px] h-[40px] bg-green-600 text-white rounded-full py-2 px-4 mb-6 hover:bg-green-500">
          Sign Up
        </button>

        <hr className="w-[450px] border border-[#dfdfe0] mb-6" />

        <button className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-md px-4 mb-4 flex items-center justify-center shadow-sm gap-2 hover:bg-gray-100">
          <img src="/images/google.svg" alt="google" />
          Continue with Google
        </button>

        <button className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-md px-4 mb-4 flex items-center justify-center shadow-sm gap-2 hover:bg-gray-100">
          <img src="./images/fbk.svg" alt="facebook" />
          Continue with Facebook
        </button>

        <p className="text-[#344054] text-left w-[444px] h-[32px] font-roboto font-normal text-[13px] leading-[16px]">
          By clicking ‘continue’, you confirm that you accept our
          <span className="text-green-600">
            <a href="">Terms and Conditions</a>
          </span>
          and have read our
          <span className="text-green-600">
            <a href="">Privacy Policy</a>
          </span>
        </p>
      </div>
      <div className="bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 shadow-md w-[503px] h-[700px] rounded-tr-[25px] rounded-br-[25px]">
        <div className="w-[351px] flex flex-col items-center mx-auto mt-14 gap-3">
          <img className="w-[264.5px]" src="./images/gouferbig.svg" alt="goufer" />
          <h1 className="w-[351px] ml-14 text-white">
            Experienced Assistance at your fingertips
          </h1>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
