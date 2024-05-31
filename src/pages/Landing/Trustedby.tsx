import Slider from "react-slick";

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

      <div className="bg-white flex gap-20 mt-12 mx-auto">
        <img className="w-[559px] h-[559px]" src="./images/ppl.svg" alt="" />

        <div className="flex flex-col gap-[145px]">
          <div>
            <div className="flex gap-2">
              <img className="border-slate-400 h-[75px]" src="./images/topline.svg" alt="" />
              <h1 className="text-4xl w-[385px] h-[94px] text-[#007F00]">
                Trust us through our Reviews
              </h1>
            </div>
            <p className="text-[16px]">Hear from Our Satisfied Clients and Experts</p>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="font-bold">"Exceptional Service Every Time!"</h1>
            <p className="w-[453px]">
              I've used Goufer multiple times for various tasks, and each expert I've hired has
              been top-notch. The platform makes it easy to find exactly who I need, and the
              quality of service is always exceptional. Highly recommended!
            </p>

            <div className="flex gap-4 mt-6">
              <img
                className="rounded-[50px] w-[53.57px] h-[53.57px]"
                src="./images/man.svg"
                alt=""
              />

              <div>
                <h1 className="font-bold">Kamorudeen K.solo</h1>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1440px] h-auto mx-auto flex flex-row mt-12">
        <div className="bg-[#007400] w-[720px] py-16 flex flex-col justify-center items-center">
          <div className="w-[437px]  ">
            <p className="text-white text-[22px] font-Roboto ">
              Boost Your Business with Goufer
            </p>
            <h1 className="text-white  text-[32px] font-bold mt-2 mb-5">
              Expand Your Reach and Increase Sales
            </h1>

            <div className="mt-12">
              <p className="mt-6 text-white text-[14px] font-Roboto w-[488px]">
                Partner with Goufer to showcase your products to a targeted audience of experts
                and clients. Enjoy increased visibility, connect with professionals who need
                your products, and grow your business on our trusted and secure platform.
              </p>
              <button className=" border-white rounded-[50px] py-3 px-8 text-[14px] text-white mt-12   border hover:border-b-2">
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

        <div className="flex flex-row ml-5">
          <div className="flex items-center w-[483px] h-[50px] rounded-full border border-gray-400 justify-between ">
            <img className=" w-7 h-7 mx-auto" src="./images/emailc.svg" alt="email" />
            <input
              type="text"
              placeholder="Input Your Email Address"
              className="px-4 py-2 w-4/6 focus:outline-none"
            />{" "}
            <button className="bg-[#007F00] w-[99px] h-[40px] rounded-full text-white px-4 py-2 hover:bg-green-700 m-2 ">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trustedby;
