import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 7000,
    pauseOnHover: true,
  };

  const data = [
    {
      img: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977314/Goufer/Frame_44_1_racqxe.png",
      Para1: "Wide Network Access to vast pool of verified expert.",
      Para2: "Seamless Experience on search, negotiation and, booking.",
      Para3: "Reliable Quality:Read Review and Rating to find perfect match.",
      Para4: "Secure Transaction:Trust our secure platform for all payment.",
    },
    {
      img: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977313/Goufer/Frame_44_tpconz.png",
      Para1: "Wide Network Access to vast pool of verified expert.",
      Para2: "Seamless Experience on search, negotiation and, booking.",
      Para3: "Reliable Quality:Read Review and Rating to find perfect match.",
      Para4: "Secure Transaction:Trust our secure platform for all payment.",
    },
    {
      img: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716977313/Goufer/Frame_44_tpconz.png",
      Para1: "Wide Network Access to vast pool of verified expert.",
      Para2: "Seamless Experience on search, negotiation and, booking.",
      Para3: "Reliable Quality:Read Review and Rating to find perfect match.",
      Para4: "Secure Transaction:Trust our secure platform for all payment.",
    },
  ];

  return (
    <div className="mx-0 w-full h-auto bg-[#007F00] rounded-3xl  flex flex-col">
      <div className=" pt-10  flex flex-row  ">
        <h1 className="mx-8 md:mx-16 mr-auto text-[23px] md:text-[47px] font-semibold text-[#ffffff]">
          <span className="px-2 md:px-0.5  text-[#312566]"> |</span>Why People Choose Goufer
        </h1>

        {/* <div className=" w-44 rounded-full cursor-pointer flex flex-row items-end  ">
          <img
            src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716902426/Goufer/Vector_3_dl61ed.png"
            className="w-8 h-8 mx-4 p-2 bg-white rounded-full "
            alt=""
            // onClick={}
          />
          <img
            src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716902426/Goufer/Vector_4_tf4tmj.png"
            className="w-8 h-8 mx-auto  p-2 bg-white rounded-full"
            // onClick={}
          />
        </div> */}
      </div>

      <Slider {...settings} className=" mx-auto my-4 w-11/12 rounded-l md:rounded-xl">
        {data.map((d, i) => (
          <div
            className="bg-[#ffffff]  rounded-3xl flex  flex-col justify-between mx-auto w-10/12 h-full px-6 py-10 mt-10  "
            key={i}
          >
            <div className=" flex flex-col-reverse md:flex-row justify-center ">
              <div className="py-12 my-19 mx-auto ">
                <h1 className="text-[#007f00] text-3xl font-Roboto justify-normal font-semibold py-2  ">
                  Experience Assisted at your finger tips
                </h1>
                <p className="text-lg md:ml-10   py-2">
                  Discover the best professionals for <br />
                  every tasks with ease
                </p>

                <p className="flex flex-row px-5 text-[#1d771d] py-2 items-center md:ml-3">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716970212/Goufer/game-icons_check-mark_wey9d3.png"
                    className="w-6 h-6 mx-1 p-1 rounded-full bg-white shadow-xl shadow-[#98a398] "
                    alt=""
                  />
                  {d.Para1}
                </p>
                <p className="flex flex-row px-5 text-[#007f00] py-2 items-center md:ml-3">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716970212/Goufer/game-icons_check-mark_wey9d3.png"
                    className="w-6 h-6 mx-1 p-1 rounded-full bg-white shadow-lg shadow-[#98a398] "
                    alt=""
                  />
                  {d.Para2}
                </p>
                <p className="flex flex-row px-5 text-[#007f00] py-2 items-center md:ml-3">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716970212/Goufer/game-icons_check-mark_wey9d3.png"
                    className="w-6 h-6 mx-1 p-1 rounded-full bg-white shadow-lg shadow-[#98a398] "
                    alt=""
                  />
                  {d.Para3}
                </p>
                <p className="flex flex-row px-5 text-[#007f00] py-2 items-center md:ml-3">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716970212/Goufer/game-icons_check-mark_wey9d3.png"
                    className="w-6 h-6 mx-1 p-1 rounded-full bg-white shadow-lg shadow-[#98a398] "
                    alt=""
                  />
                  {d.Para4}
                </p>
              </div>
              <div className="px-4 w-full md:w-1/2 h-full rounded-2xl justify-center">
                <img
                  src={d.img}
                  className="mx-auto w-[320px] h-[350px] object-cover rounded-md"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Sliders;
