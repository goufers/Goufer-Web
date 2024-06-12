import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="w-full mt-20">
      <div className="flex flex-col md:flex-row mt-12 mx-auto justify-between gap-10 md:gap-[150px] items-center">
        <div className="flex flex-row mx-auto items-center justify-between gap-2 md:gap-9">
          <img
            src="./images/mailbox.svg"
            alt="mailbox"
            className="mx-2 w-16 md:w-20 h-16 md:h-20 rounded-full"
          />
          <div className="mx-auto px-3 flex flex-col md:justify-between">
            <h1 className="text-xl py-2 md:text-2xl">Be the first to hear the gist</h1>
            <p className="text-sm md:text-base text-[#4c4b50]">
              Subscribe to our newsletter to stay in the loop with everything happening at
              Goufer. Receive: Expert Insights, Exclusive Offers, Latest Updates, Success
              Stories.
            </p>
          </div>
        </div>

        <div className="flex flex-row md:ml-5">
          <div className="flex items-center w-full md:w-[483px] h-[50px] rounded-full border border-gray-400 justify-between ">
            <img className=" mx-2 md:mx-auto w-7 h-7 " src="./images/emailc.svg" alt="email" />
            <input
              type="text"
              placeholder="Input Your Email Address"
              className="px-4 py-2 w-4/6 focus:outline-none"
            />
            <button className="bg-[#007F00]   w-[99px] h-[40px] rounded-full text-white px-4 py-2 hover:bg-green-700 m-2 ">
              Send
            </button>
          </div>
        </div>
      </div>
      <hr className="h-2" />
      <div className="px-4 flex flex-col md:flex-row items-center justify-center gap-28 mt-10 py-4 ">
        <div className="pl-4 md:pl-10 mx-auto w-full md:w-2/5 mb-5 ">
          <img src="/images/goufer.png" alt="goufer" className="mb-3" />
          <p className="text-sm text-gray-500 font-Roboto">
            Goufer is a service that bridges the gap between experienced service providers and
            individuals or businesses in need of their expertise. The name is inspired by
            "gofer," implying a dependable and resourceful assistant who can handle a variety
            of tasks.
          </p>
          <div className=" items-center flex flex-row gap-10 mt-8">
            <img src="/images/x.png" alt="goufer" />
            <img src="/images/linkdin.png" alt="goufer" />
            <img src="/images/facebook.png" alt="goufer" />
            <img src="/images/github.png" alt="goufer" />
            <img src="/images/peace.png" alt="goufer" />
            <img src="/images/ball.png" alt="goufer" />
          </div>
        </div>

        <div className="w-full h-auto flex flex-row">
          <div className="mx-auto flex flex-col">
            <h3 className="font-bold text-gray-800 text-sm font-Roboto mb-3">Product</h3>
            <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
              Overview
            </li>
            <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
              Features
            </li>
            <div className="flex gap-2 items-center">
              <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
                Solution
              </li>
              <li className="list-none text-xs font-Roboto text-gray-500  bg-green-200 rounded px-1.5">
                New
              </li>
            </div>
            <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
              Tutorial
            </li>
            <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
              Prices
            </li>
            <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
              Releases
            </li>
          </div>
          <div className="mx-auto flex flex-col ">
            <h3 className="font-bold text-sm text-gray-800 font-Roboto mb-3">Company</h3>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              About Us
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              News
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Faqs
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Contact Us
            </li>
          </div>
          <div className="mx-auto flex flex-col">
            <h3 className="font-bold text-gray-800 text-sm font-Roboto mb-3">Resources</h3>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Blog
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Newsletter
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Events
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Help Center
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Tutorials
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Support
            </li>
          </div>
          <div className="mx-auto flex flex-col">
            <h3 className="font-bold text-gray-800 text-sm font-Roboto mb-3">Legal</h3>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Terms
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Privacy
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Cookies
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Licenses
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Settings
            </li>
            <li className="list-none text-sm font-Roboto text-gray-600 font-bold px-0.5">
              Contact
            </li>
          </div>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center gap-1 my-6">
        <FontAwesomeIcon
          icon={faCopyright}
          className="mb-1 text-gray-600"
          style={{ width: "20px" }}
        />
        <p className=" text-gray-600 font-mono">2024 Goufer All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
