import { faCopyright } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex mt-12 mx-auto justify-between gap-[150px] items-center">
        <div className="flex mx-auto justify-between gap-9">
          <img src="./images/mailbox.svg" alt="mailbox" />
          <div className="flex flex-col justify-between">
            <h1 className="text-2xl">Be the first to hear the gist</h1>
            <p className="text-[#605D66]">
              Subscribe to our newsletter to stay in the loop with <br />
              everything happening at Goufer. Receive: Expert Insights,
              <br /> Exclusive Offers, Latest Updates, Success Stories.
            </p>
          </div>
        </div>

        <div className="flex flex-row ml-5">
          <div className="flex items-center w-[483px] h-[50px] rounded-full border border-gray-400 justify-between ">
            <img className=" w-7 h-7 mx-auto" src="./images/emailc.svg" alt="email" />
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
      <div className="flex justify-center gap-28 mt-10 py-4 ">
        <div className="w-96 mb-5 ">
          <img src="/images/goufer.png" alt="goufer" className="mb-3" />
          <p className="text-sm text-gray-500 font-Roboto">
            Goufer is a service that bridges the gap between experienced service providers and
            individuals or businesses in need of their expertise. The name is inspired by
            "gofer," implying a dependable and resourceful assistant who can handle a variety
            of tasks.
          </p>
          <div className="flex gap-8 mt-4">
            <img src="/images/x.png" alt="goufer" />
            <img src="/images/linkdin.png" alt="goufer" />
            <img src="/images/facebook.png" alt="goufer" />
            <img src="/images/github.png" alt="goufer" />
            <img src="/images/peace.png" alt="goufer" />
            <img src="/images/ball.png" alt="goufer" />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-gray-400 text-sm font-Roboto mb-3">Product</h3>
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
        <div>
          <h3 className="font-bold text-sm text-gray-500 font-Roboto mb-3">Company</h3>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            About Us
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            News
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Faqs
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Contact Us
          </li>
        </div>
        <div>
          <h3 className="font-bold text-gray-400 text-sm font-Roboto mb-3">Resources</h3>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Blog
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Newsletter
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Events
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Help Center
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Tutorials
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Support
          </li>
        </div>
        <div>
          <h3 className="font-bold text-gray-400 text-sm font-Roboto mb-3">Legal</h3>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Terms
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Privacy
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Cookies
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Licenses
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Settings
          </li>
          <li className="list-none text-sm font-Roboto text-gray-500 font-bold px-0.5">
            Contact
          </li>
        </div>
      </div>
      <hr />
      <div className="flex items-center justify-center gap-1 my-6">
        <FontAwesomeIcon
          icon={faCopyright}
          className="mb-1 text-gray-500"
          style={{ width: "20px" }}
        />
        <p className=" text-gray-500 font-mono">2024 Goufer All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
