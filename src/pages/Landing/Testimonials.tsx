
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    rtl: true, // Ensure the slider moves to the right by setting this to false
  };

  const testimonials = [
    {
      id: 1,
        quote: "Outstanding Support!",
      text: "I've used Goufer multiple times for various tasks, and each expert I've hired has been top-notch. The platform makes it easy to find exactly who I need, and the quality of service is always exceptional. Highly recommended!",
      authorImg: "./images/man.svg",
      authorName: "Kamorudeen K.solo",
      authorTitle: "Digital Marketer"
    },
    {
      id: 2,

      quote: "Outstanding Support!",
      text: "The customer service team at Goufer is fantastic. They are always quick to respond and resolve any issues I have. Truly a pleasure to work with!",
      authorImg: "./images/man.svg",
      authorName: "Jane Doe",
      authorTitle: "Project Manager"
    },
    {
      id: 3,
  
      quote: "Highly Recommend!",
      text: "Goufer has exceeded my expectations. The experts are knowledgeable, professional, and deliver quality work every time. I will definitely use their services again.",
      authorImg: "./images/man.svg",
      authorName: "John Smith",
      authorTitle: "Entrepreneur"
    },
    {
      id: 4,
     
      quote: "Great Experience!",
      text: "I've had a great experience using Goufer. The platform is user-friendly, and the experts are reliable and efficient. I will continue to use their services in the future.",
      authorImg: "./images/man.svg",
      authorName: "Emily Johnson",
      authorTitle: "Software Developer"
    }
  ];

  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-screen-lg">
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="flex justify-center items-center bg-white">
              <div className="flex flex-row gap-20 mt-12 mx-auto">
           
                <div className="flex flex-col gap-10">
                
                  <div className="flex flex-col gap-2">
                    <h1 className="font-bold">"{testimonial.quote}"</h1>
                    <p className="w-[453px]">
                      {testimonial.text}
                    </p>
                    <div className="flex gap-4 mt-6">
                      <img
                        className="rounded-full w-[53.57px] h-[53.57px]"
                        src={testimonial.authorImg}
                        alt={testimonial.authorName}
                      />
                      <div>
                        <h1 className="font-bold">{testimonial.authorName}</h1>
                        <p>{testimonial.authorTitle}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>      ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;