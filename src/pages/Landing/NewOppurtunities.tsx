import Slider from "./Sliders";


const NewOppurtunities = () => {
  const infos = [
    {
      id: 1,
      Categories: 'Food & Beverage',
      Shopimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png',
      Gouferimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png',
      Goufername: 'Azeez Ibrahim',
      Rate: '4.8',
      City: 'Lagos,Nigeria',
      Task: 'Task Complete',
    },
    {
      id: 2,
      GouferCategories: 'Transport',
      Shopimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png',
      Gouferimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png',
      Goufername: 'Pius Lucky',
      Rate: '4.8',
      City: 'Lagos,Nigeria',
      Task: 'Task Complete',
    },
    {
      id: 3,
      GouferCategories: 'Entertainment',
      Shopimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png',
      Gouferimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png',
      Goufername: 'Chika Chime',

      Rate: '4.8',
      City: 'Lagos,Nigeria',
      Task: 'Task Complete',
    },
    {
      id: 4,
      GouferCategories: 'Donation',
      Shopimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png',
      Gouferimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png',
      Goufername: 'Choosen Abdullahi',
      Rate: '4.8',
      City: 'Lagos,Nigeria',
      Task: 'Task Complete',
    },
    {
      id: 5,
      GouferCategories: 'Shopper',
      Shopimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png',
      Gouferimage:
        'https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png',
      Goufername: 'Oladosu Teslimat',
      Rate: '4.8',
      City: 'Lagos,Nigeria',
      Task: 'Task Complete',
    },

   
  ];
  

  
  return (
    <div className="mx-auto">
      <div className="bg-[url(https://res.cloudinary.com/dxnznpglg/image/upload/v1716810848/Goufer/Rectangle_10_3_f1j8j4.svg)] bg-cover bg-center flex flex-row justify-around pt-5 text-white py-5 space-y-12 ">
        <div>
          <div className="bg-[#333E78] w-[200px] h-[30px] mb-4 pl-1 text-xl ">
            Goufer is growing fast
          </div>
          <div className="font-medium text-2xl mb-2">
            Unlock New Opportunities and Grow Your Business
          </div>
          <p className="text-sm mb-3">
            Are you an experience professional looking to expand your client
            base? Join Goufer today and
            <br />
            Connect with individuals and businesses seeking your expertise.
          </p>
          <div className="flex flex-row">
            <div className="flex flex-row justify-start items-start mt-4">
              <img
                src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716812814/Goufer/wpf_happy_eklxev.png"
                className="w-9 h-9 mx-2 object-contain p-1 bg-white rounded-full"
                alt=""
              />
              <div className=" ">
                <h1 className="text-sm font-semibold">35,000+</h1>
                <p className="text-xs">Happy Global Clinet</p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start mt-4">
              <img
                src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716813478/Goufer/Union_kere7l.png"
                className="w-9 h-9 mx-2 object-contain p-1 bg-white rounded-full"
                alt=""
              />
              <div className=" ">
                <h1 className="text-sm font-semibold">Flexible</h1>
                <p className="text-xs">
                  Task that fit your <br />
                  schedule and skill set
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start mt-4">
              <img
                src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716814001/Goufer/Group_ozomfy.png"
                className="w-9 h-9 mx-2 object-contain p-1 bg-white rounded-full"
                alt=""
              />
              <div className=" ">
                <h1 className="text-sm font-semibold">Secure Payment</h1>
                <p className="text-xs">
                  Enjoy peace of mind with our
                  <br />
                  secure payment system
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-start items-start mt-4">
              <img
                src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716814175/Goufer/carbon_star-review_qrs56u.svg"
                className="w-9 h-9 mx-2 object-contain p-1 bg-white rounded-full"
                alt=""
              />
              <div className=" ">
                <h1 className="text-sm">Build Reputation</h1>
                <p className="text-xs">
                  Collectrating to showcase your <br />
                  expertise and more clients
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="border border-white rounded-full text-white p-2.5 mt-8 hover:border-2 ">
            Become a Goufer Now!
          </button>
        </div>
      </div>



     <div>
        <h1 className="text-4xl tex-start mt-16 pl-20  ">
          Meet Some of Our Esteem Team <br />
          of Expertise on{' '}
          <span className="text-[#007F00] text-5xl">Goufers</span>
        </h1>
        <p className="text-sm tex-start mt-1 pl-20">
          Over 20k Professional Categories - 15+ Subcategories Goufers
        </p>
      </div>
       <div className="flex flex-row justify-evenly mt-6 mx-4 rounded-xl shadow-black">
        {infos &&
          infos.map((info: any, index: number) => (
            <div className="" key={index}>
              <div className="">
                <img
                  src={info.Shopimage}
                  alt=""
                  className="w-44 h-20 absolute"
                />
                <img
                  src={info.Gouferimage}
                  alt=""
                  className="w-22 h-10 rounded-full relative top-14 outline-white"
                />
              </div>
              <div className="mt-14 pb-2 mb-2">
                <h1 className="text-[#007F00] font-semibold ml-1">
                  {info.Goufername}
                </h1>
                <p className=" text-xs mb-2">
                  These are professional goufer which are <br />
                  expertise in resturant knowledge and update
                </p>
                <div className="flex flex-row justify-start items-start text-xs">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                    className="w-4 h-4 object-contain"
                    alt=""
                  />
                  <span className="text-[#007F00]">50+</span>
                  {info.Task}
                </div>
                <div className="flex flex-row justify-start items-start text-xs">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                  {info.City}
                </div>
                <div className="flex flex-row justify-start items-start text-xs">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                    className="w-5 h-5 object-contain"
                    alt=""
                  />
                  {info.Rate}
                </div>
              </div>
            </div>
          ))}
        <button>
          <img
            src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
            className="w-4 h-5"
            alt=""
          />
        </button>
      </div>
      <button className="ml-[1000px] mb-5 py-2 px-3 border bg-[#007F00] hover:bg-[#476b47] text-white rounded-xl">
        Search for a Goufer
      </button>
        <Slider/>
    </div>
  );
};

export default NewOppurtunities;
