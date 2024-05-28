import React, { useState } from 'react';

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);
  
    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


  return (
  
    <div className=" mx-auto w-[1006px] h-[600px] justify-center flex  flex-row items-center min-h-screen">
      <div className="bg-white p-8 shadow-md w-[503px] h-[600px] rounded-tl-[25px] rounded-bl-[25px]">
     

        <div className='flex justify-between  w-[446px]'>

        <h1 className="text-[#1D1A22] text-2xl w-full h-[28px] font-roboto font-medium text-[22px] leading-[28px] mb-6">Log in or Sign up to Goufer</h1>
        <img className='w-[22px] h-[22px] alin-' src="./images/exit.jpg" alt="" />

        </div>
      
        
        <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">Input Email</p>
        <div className="mb-4 relative">
          <i className="fas fa-envelope absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input type="email" placeholder="Email" className="w-[455px] h-[44px] pl-10 pr-4 py-2 rounded-[50px] border border-gray-300 shadow-sm focus:outline-none" />
        </div>
        
        <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">Password</p>
        <div className="mb-4 relative">
          <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
          <input type={showPassword ? "password" : "text"} placeholder="Password" className="w-[455px] h-[44px] pl-10 pr-10 py-2 rounded-[50px] border border-gray-300" />
          <button type="button" onClick={togglePasswordVisibility} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
            {showPassword ? <i className="fas fa-eye-slash"></i> : <i className="fas fa-eye"></i>}
          </button>
        </div>

        <button className="w-[455px] h-[40px] bg-green-600 text-white rounded-[50px] py-2 px-4 mb-6 hover:bg-green-500">Log In</button>
        
        <hr className="w-[450px] border border-[#dfdfe0] mb-6" />

        <button className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-[10px] px-4 mb-4 flex items-center justify-center shadow-sm gap-2  hover:bg-gray-100">
          <img src="./images/google.svg" alt="google" />
          Continue with Google
        </button>

        <button className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-[10px] px-4 mb-4 flex items-center justify-center shadow-sm gap-2  hover:bg-gray-100">
       <img src="./images/fbk.svg" alt="" />
          Continue with Facebook
        </button>

        <button className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-[10px] px-4 mb-6 flex items-center justify-center shadow-sm gap-2 hover:bg-gray-100 hover:text-gray-800 hover:border-gray-700 transition-colors duration-300">
          <img src="./images/emailc.svg" alt="Continue with Email" />
          Continue with Email
        </button>

        <p className="text-[#344054] text-left w-[444px] h-[32px] font-roboto font-normal text-[12px] leading-[16px]">
            
          By clicking ‘continue’, you confirm that you accept our <span className='text-green-600'> <a href="">Terms and Conditions</a></span>  and have read our <span className='text-green-600'><a href="">Privacy Policy</a></span>
        </p>

    
      </div>
      <div className="bg-gray-400 bg-opacity-50 backdrop-filter backdrop-blur-lg p-8 shadow-md w-[503px] h-[600px] rounded-tr-[25px] rounded-br-[25px]">
  <div className='w-[351px] flex flex-col items-center mx-auto mt-14 gap-3'>
    <img className='w-[264.5px]' src="./images/gouferbig.svg" alt="gouferl" />
    <h1 className='w-[351px] ml-14 text-white'>Experienced Assistance at your finger tips</h1>
  </div>
</div>

    
    </div>
   
  );
};

export default Login;
