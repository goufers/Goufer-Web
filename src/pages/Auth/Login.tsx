/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useDispatch, useSelector } from "react-redux";
import { LoginUser } from "../../Redux/AuthSlice";
import { Loading } from "../../components/Loading";
import delay from "delay";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { appleProvider, googleProvider } from "../../firebase/authmethod";
import socialMediaAuth from "../../firebase/authService";
import { AuthProvider } from "firebase/auth";
interface component {
  auth: boolean;
  setAuth: (data: any) => void;
}
const Login = ({ auth, setAuth }: component) => {
  const [authComponent, setAuthComponent] = useState("signup");
  const dispatch = useDispatch<any>();
  const AuthStatus = useSelector((state: any) => state.Auth);

  const [showPassword, setShowPassword] = useState(true);
  const [loading, setLoading] = useState(false);
  const [loginData, setLoginData] = useState({
    identifier: "",
    password: "",
  });

  const LoginUserAction = async () => {
    setLoading(true);
    dispatch(LoginUser(loginData));
    await delay(3000);
    setLoading(false);
  };
  const isPhoneNumber = (value: string) => {
    const phoneNumberRegex = /^\d+$/;
    return phoneNumberRegex.test(value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  useEffect(() => {
    if (AuthStatus.authkeys?.auth_status == "True") {
      toast.success("Your account has been created successfully!");
      setAuthComponent("verify_phone");
    }

    if (AuthStatus.status == "failed") {
      AuthStatus.error.email && toast.warn(`${AuthStatus.error.email[0]}`);
      AuthStatus.error.phone_number && toast.warn(`${AuthStatus.error.phone_number[0]}`);
    }
    if (AuthStatus.authkeys.success == false) {
      toast.warn("Registration failed");
    }

    if (AuthStatus.error == "Network Error") {
      toast.warning("Network Error");
    }
  }, [AuthStatus, dispatch]);

  const handleAutoLogin = async (provider: AuthProvider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };

  return (
    <>
      {loading == true && <Loading />}

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
                className="w-[22px] h-[22px] "
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
                  onChange={(phone) =>
                    setLoginData((prev) => ({ ...prev, identifier: phone }))
                  }
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

            <button
              className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-[10px] px-4 mb-4 flex items-center justify-center shadow-sm gap-2  hover:bg-gray-100"
              onClick={() => handleAutoLogin(googleProvider)}
            >
              <img src="./images/google.svg" alt="google" />
              Continue with Google
            </button>

            <button
              className="w-full h-[44px] bg-white text-black border border-[#49454F] rounded-[10px] px-4 mb-4 flex items-center justify-center shadow-sm gap-2  hover:bg-gray-100"
              onClick={() => handleAutoLogin(appleProvider)}
            >
              <img src="./images/apple.png" alt="" className="w-[30px] h-[30px]" />
              Continue with Apple
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

        <div className=" bg-[#24362354] hidden md:flex flex-col items-center backdrop-blur-sm p-8  w-[503px] h-full rounded-r-[25px]  ">
          <div className="w-[351px] flex flex-col items-center m-auto ">
            <img className="w-[374.5px]" src="./images/gouferbig.svg" alt="goufer_url" />
            <h1 className="w-[351px] ml-14 text-white">
              Experienced Assistance at your finger tips
            </h1>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
