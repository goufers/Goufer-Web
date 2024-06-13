import Slider from "react-slick";
import Testimonials from "./Testimonials";

const Trustedby = () => {
  const cardContents = [
    { id: 1, imgSrc: "./images/card1.svg" },
    { id: 2, imgSrc: "./images/card2.svg" },
    { id: 3, imgSrc: "./images/card3.svg" },
    { id: 4, imgSrc: "./images/card4.svg" },
    { id: 5, imgSrc: "./images/card5.svg" },
    { id: 6, imgSrc: "./images/card6.svg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full h-auto mb-10 bg-white flex flex-col">
      {/* Card Section */}
      <div className="flex flex-row justify-center my-12">
        <Slider {...settings} className="w-full">
          {cardContents.map((card) => (
            <div key={card.id} className="p-2">
              <div className="bg-[#007F00] w-[110px]  h-[80px]  mx-auto bg-opacity-50 text-white rounded-lg  flex items-center justify-center p-2">
                <img
                  src={card.imgSrc}
                  alt={`Card ${card.id}`}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

     
     <Testimonials />
    
      

      <div className="w-[1440px] h-[392px] mx-auto flex mt-12">
        <div className="bg-[#007F00] w-[720px] flex flex-col justify-center items-center">
          <div className="w-[437px] gap-4">
            <p className="text-white text-2xl">Boost Your Business with Goufer</p>
            <h1 className="text-white font-medium text-4xl mt-2 mb-5">
              Expand Your Reach and Increase Sales
            </h1>

            <div className="mt-12">
              <p className="mt-6 text-white w-[488px]">
                Partner with Goufer to showcase your products to a targeted audience of experts
                and clients. Enjoy increased visibility, connect with professionals who need
                your products, and grow your business on our trusted and secure platform.
              </p>
              <button className="border border-white rounded-[50px] w-[227px] h-[24px] text-[14px] text-white mt-12 hover:bg-white hover:text-black hover:shadow-lg">
                Become a Vendor on Goufer
              </button>
            </div>
          </div>
        </div>
        <img src="./images/gofffice.svg" alt="office" />
      </div>
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
        <div className="flex items-center w-[483px] h-[50px] rounded-full border border-slate-400 justify-between ">
          <div className="flex flex-row ml-5">
            <img className="mx-1" src="./images/emailc.svg" alt="email" />
            <input
              type="text"
              placeholder="Input Your Email Address"
              className="px-4 py-2 focus:outline-none"
            />
          </div>
          <img className="border-slate-400" src="./images/demcate.svg" alt="" />
          <button className="bg-[#007F00] w-[99px] h-[40px] rounded-full text-white px-4 py-2 hover:bg-green-700 m-2 ">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trustedby;
