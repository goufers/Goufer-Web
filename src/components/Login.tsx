/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser,Signup } from "../pages/Redux/AuthSlice";
import PhoneValidation from "../components/PhoneValidation";
interface component {
  auth: boolean;
  setAuth: (data: any) => void;
}
const Login = ({ auth, setAuth }: component) => {
  const [authComponent, setAuthComponent] = useState("login");
  const dispatch = useDispatch<any>();
  const AuthStatus = useSelector((state: any) => state.Auth.authkeys?.auth_status);
  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });
  const [signupData, setSignupData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  });

  const RegisterUser = () => {
    // console.log(signupData);
    setLoading(true);
    dispatch(Signup(signupData));
    if (AuthStatus === "True") {
      setLoading(false);
      setAuthComponent("verify_phone");
    }
  };

  const LoginUserAction = () => {
    // console.log(signupData);
    setLoading(true);
    dispatch(LoginUser(loginData));
    if (AuthStatus === "True") {
      setLoading(false);
    }
  };
  const isPhoneNumber = (value: string) => {
    const phoneNumberRegex = /^\d+$/;
    return phoneNumberRegex.test(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {loading ? (
        <div className="m-auto w-[900px] h-[600px] flex bg-white fixed top-[100px]   left-0 right-0">
          <p className="m-auto text-xl text-green-800 font-bold text-center">Loading...</p>
        </div>
      ) : (
        <div
          className={` ${
            auth == true ? "flex" : "hidden"
          } fixed top-[89px] left-0 right-0  mx-auto w-full md:w-[1006px] h-[730px] justify-center flex-row items-center  `}
        >
          {authComponent === "login" && (
            <div className="bg-white p-8 shadow-md w-[503px] h-full rounded-tl-[25px] rounded-bl-[25px]">
              <div className="flex justify-between  w-[446px]">
                <h1 className="text-[#1D1A22] text-2xl w-full h-[28px] font-roboto font-medium text-[22px] leading-[28px] mb-6">
                  Log in or Sign up to Goufer
                </h1>
                <img
                  className="w-[22px] h-[22px] alin-"
                  src="./images/exit.jpg"
                  alt=""
                  onClick={() => setAuth(false)}
                />
              </div>

              <p className="text-[#344054] text-left  h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Input Email or phone
              </p>
              <div className="mb-4 relative">
            {isPhoneNumber(loginData.identifier) ? (
              <PhoneInput 
                country={"ng"}
                value={loginData.identifier}
                onChange={(phone) => setLoginData((prev) => ({ ...prev, identifier: phone }))}
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
                placeholder="Email or Phone"
              />
            ) : (
              <input
                type="text"
                placeholder="Email or Phone"
                className="w-[455px] h-[44px] pl-10 pr-10 py-2 rounded-[50px] border border-gray-300 shadow-sm outline-none"
                onChange={(e) => {
                  setLoginData((prev) => ({ ...prev, identifier: e.target.value }));
                }}
              />
            )}
              </div>

              <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Password
              </p>
              <div className="mb-4 relative">
                <i className="fas fa-lock absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                <input
                  type={showPassword ? "password" : "text"}
                  placeholder="Password"
                  className="w-[455px] h-[44px] pl-10 pr-10 py-2 rounded-[50px] border border-gray-300 outline-none"
                  onChange={(e) => {
                    setLoginData((prev) => ({ ...prev, password: e.target.value }));
                  }}
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

              <button
                className="w-[455px] h-[40px] bg-[#218021] text-white rounded-[50px] py-2 px-4 mb-6 hover:bg-[#1b6b1b]"
                onClick={() => LoginUserAction()}
              >
                Log In
              </button>
              <h3 className="text-[#344054] text-[16px]">
                Don't have an account?
                <span
                  className="px-2 text-[#007F00] cursor-pointer"
                  onClick={() => setAuthComponent("signup")}
                >
                  Sign Up
                </span>
              </h3>
              <hr className="w-[450px] border border-[#dfdfe0] my-5 mt-10" />

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
                By clicking ‘continue’, you confirm that you accept our
                <span className="text-[#007F00]">
                  <a href="">Terms and Conditions</a>
                </span>
                and have read our
                <span className="text-[#007F00]">
                  <a href="">Privacy Policy</a>
                </span>
              </p>
            </div>
          )}
          {authComponent === "signup" && (
            <div className="bg-white p-8 shadow-md w-[503px] h-full rounded-tl-[25px] rounded-bl-[25px] gap-4">
              <div className="flex justify-between w-[446px]">
                <h1 className="text-[#1D1A22] text-2xl w-full h-[28px] font-roboto font-medium text-[22px] leading-[28px] mb-6">
                  Sign up to Goufer
                </h1>
                <img
                  className="w-[22px] h-[22px]"
                  src="./images/exit.jpg"
                  alt="exit"
                  onClick={() => setAuth(false)}
                />
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
                    onChange={(e) => {
                      setSignupData((prev) => ({ ...prev, first_name: e.target.value }));
                    }}
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
                    onChange={(e) => {
                      setSignupData((prev) => ({ ...prev, last_name: e.target.value }));
                    }}
                  />
                </div>
              </div>

              <div className="mb-4 relative flex flex-col">
                {/* <span>
              <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                Phone
              </p>
            </span> */}
                <PhoneInput
                  country={"ng"}
                  // value={signupData.phone_number}
                  onChange={(value) => {
                    setSignupData((prev) => ({ ...prev, phone_number: `+${value}` }));
                  }}
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
                    outline: "none",
                  }}
                  containerClass="phone-input-container"
                  buttonClass="phone-input-button"
                />
              </div>

              <div className="mb-4 relative">
                <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                  Input Email
                </p>
                <i className="fas fa-envelope absolute left-4 top-11   text-gray-500"></i>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-[455px] h-[44px] pl-10 pr-4 py-2 rounded-full border border-gray-300 shadow-sm focus:outline-none"
                  onChange={(e) => {
                    setSignupData((prev) => ({ ...prev, email: e.target.value }));
                  }}
                />
              </div>

              <div className="mb-4 relative">
                <p className="text-[#344054] text-left w-[74px] h-[20px] font-inter font-medium text-[14px] leading-[20px] mb-2">
                  Password
                </p>
                <i className="fas fa-lock absolute left-4 top-11   text-gray-500"></i>
                <input
                  type={!showPassword ? "password" : "text"}
                  placeholder="Password"
                  className="w-[455px] h-[44px] pl-10 pr-10 py-2 rounded-full border border-gray-300 outline-none"
                  onChange={(e) => {
                    setSignupData((prev) => ({ ...prev, password: e.target.value }));
                  }}
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute right-4 top-10   text-gray-500"
                >
                  {showPassword == false ? (
                    <i className="fas fa-eye-slash "></i>
                  ) : (
                    <i className="fas fa-eye"></i>
                  )}
                </button>
              </div>

              <button
                onClick={() => RegisterUser()}
                className="w-[455px] h-[40px] bg-[#218021] text-white rounded-full py-2 px-4 mb-6 hover:bg-[#2b7a2b]"
              >
                Sign Up
              </button>
              <h3 className="text-[#344054] text-[16px]">
                Already have an account?
                <span
                  className="px-2 text-[#007F00] cursor-pointer"
                  onClick={() => setAuthComponent("login")}
                >
                  Login
                </span>
              </h3>
              <hr className="w-[450px] border border-[#dfdfe0] my-5" />

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
                <span className="text-[#218021]">
                  <a href="">Terms and Conditions</a>
                </span>
                and have read our
                <span className="text-[#218021]">
                  <a href="">Privacy Policy</a>
                </span>
              </p>
            </div>
          )}
          {authComponent === "verify_phone" && <PhoneValidation />}
          <div className=" bg-gray-700 hidden md:flex flex-col items-center bg-opacity-70  backdrop-blur-sm p-8 shadow-md w-[503px] h-full rounded-r-[25px]  ">
            <div className="w-[351px] flex flex-col items-center m-auto ">
              <img className="w-[374.5px]" src="./images/gouferbig.svg" alt="gouferl" />
              <h1 className="w-[351px] ml-14 text-white">
                Experienced Assistance at your finger tips
              </h1>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
