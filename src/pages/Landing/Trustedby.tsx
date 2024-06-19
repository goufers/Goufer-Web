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
<<<<<<< HEAD
    <div className="w-full h-auto mb-10  bg-white flex flex-col">
      {/* Card Section */}
=======
    <div className="w-full h-auto mb-10 bg-white flex flex-col">
>>>>>>> c90014c0a68b76c4de7f8226e48cbe02810a6025
      <div className="flex flex-row justify-center my-12">
        <Slider {...settings} className="my-20 w-full">
          {cardContents.map((card) => (
            <div key={card.id} className="p-2">
              <div className="bg-[#007F00] w-[57px] h-[57px] md:w-[110px]  md:h-[80px]  mx-auto bg-opacity-50 text-white rounded-lg  flex items-center justify-center p-2">
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

<<<<<<< HEAD
      <div className="min-h-screen flex items-center justify-center">
  <div className="bg-white flex gap-20 mt-12 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <img className="w-[559px] h-[559px]" src="./images/ppl.svg" alt="" />
    <div className="flex flex-col gap-[145px]">
      <div>
        <div className="flex gap-2">
          <img className="border-slate-400 h-[75px]" src="./images/topline.svg" alt="" />
          <h1 className="text-4xl w-[385px] h-[94px] text-[#007F00]">Trust us through our Reviews</h1>
        </div>
        <p className="text-[16px]">Hear from Our Satisfied Clients and Experts</p>
      </div>
      <Testimonials />
    </div>
  </div>
</div>

=======
      <div className="bg-white flex flex-col my-20 items-center md:flex-row gap-10 md:gap-20 mt-12 mx-auto">
        <img
          src="./images/ppl.svg"
          alt=""
          className="mx-auto w-full md:w-[559px] h-auto md:h-[559px] object-cover"
        />

        <div className="mx-4 md:mx-auto flex flex-col gap-10 md:gap-[45px]">
          <div>
            <div className="flex gap-2">
              <img className="border-slate-400 h-[75px]" src="./images/topline.svg" alt="" />
              <h1 className="text-4xl   text-[#007F00]">Trust us through our Reviews</h1>
            </div>
            <p className="text-[16px]">Hear from Our Satisfied Clients and Experts</p>
          </div>
          <div className="mx-2 flex flex-col gap-2">
            <h1 className="font-bold">"Exceptional Service Every Time!"</h1>
            <p className="mx-auto justify-start">
              I've used Goufer multiple times for various tasks, and each expert I've hired has
              been top-notch. The platform makes it easy to find exactly who I need, and the
              quality of service is always exceptional. Highly recommended!
            </p>
>>>>>>> c90014c0a68b76c4de7f8226e48cbe02810a6025


    
      

      <div className="w-full h-auto mx-auto flex flex-col md:flex-row mt-12">
        <div className="px-6 md:px-0 bg-[#007400] w-full md:w-3/5 py-16 flex flex-col justify-center items-center">
          <div className="  md:px-20  ">
            <p className="text-white text-[22px] font-Roboto ">
              Boost Your Business with Goufer
            </p>
            <h1 className="text-white  text-[32px] font-bold mt-2 mb-5">
              Expand Your Reach and Increase Sales
            </h1>

            <div className="mt-12">
              <p className="mt-6 text-white text-[14px] font-Roboto ">
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
<<<<<<< HEAD
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
            Subscribe
          </button>
        </div>
=======
        <img
          src="./images/gofffice.svg"
          alt="office"
          className="w-full md:w-2/5 object-cover"
        />
>>>>>>> c90014c0a68b76c4de7f8226e48cbe02810a6025
      </div>
    </div>
  );
};

export default Trustedby;
