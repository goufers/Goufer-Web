import React, { useState } from 'react';


// Define the type for info objects
interface Info {
  id: number;
  GouferCategories: string;
  Shopimage: string;
  Gouferimage: string;
  Goufername: string;
  text: string;
  Rate: string;
  City: string;
  Task: string;
}

const infos: Info[] = [
  // Add 30 sample info objects for two pages
  // Page 1
  {
    id: 1,
    GouferCategories: "Food & Beverage",
    Shopimage: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Azeez Ibrahim",
    text: "These are professional goufer which are expertise in restaurant knowledge and update",
    Rate: "4.8",
    City: "Lagos, Nigeria",
    Task: "50+",
  },
  // Repeat the same object with different ids for simplicity
  // Add more objects to reach a total of 30
  {
    id: 2,
    GouferCategories: "Delivery",
    Shopimage: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage: "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "John Doe",
    text: "Experienced delivery goufer with extensive city knowledge",
    Rate: "4.9",
    City: "Abuja, Nigeria",
    Task: "100+",
  },
  {
    id: 2,
    GouferCategories: "Transport",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Pius Lucky",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },
  {
    id: 3,
    GouferCategories: "Entertainment",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Chika Chime",

    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },
  {
    id: 4,
    GouferCategories: "Donation",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Choosen Abdullahi",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },
  {
    id: 5,
    GouferCategories: "Shopper",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Oladosu Teslimat",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },
  {
    id: 6,
    GouferCategories: "Shopper",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Oladosu Teslimat",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },
  {
    id: 7,
    GouferCategories: "Shopper",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Oladosu Teslimat",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },

  {
    id: 8,
    GouferCategories: "Shopper",
    Shopimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
    Gouferimage:
      "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
    Goufername: "Oladosu Teslimat",
    text: " These are professional goufer which are expertise in resturant knowledge and update",
    Rate: "4.8",
    City: "Lagos,Nigeria",
    Task: " 50+",
  },

  {
      id: 9,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 10,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 11,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 12,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 13,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 14,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    },
    {
      id: 15,
      GouferCategories: "Shopper",
      Shopimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820381/Goufer/Rectangle_7_ygy8q0.png",
      Gouferimage:
        "https://res.cloudinary.com/dxnznpglg/image/upload/v1716820309/Goufer/image_28_ttiibp.png",
      Goufername: "Oladosu Teslimat",
      text: " These are professional goufer which are expertise in resturant knowledge and update",
      Rate: "4.8",
      City: "Lagos,Nigeria",
      Task: " 50+",
    }
    
  // Add more objects...
];

const SearchPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [showExpertPop, setShowExpertPop] = useState<number | null>(null);

  const cardsPerPage = 15;
  const totalPages = Math.ceil(infos.length / cardsPerPage);

  const handlePageChange = (page: number | string) => {
    if (typeof page === 'number') {
      setCurrentPage(page);
    }
  };

  const displayInfos = infos.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

  return (
    <div className='w-full flex flex-col items-center'>
      {/* Cards Container */}
      <div className="grid grid-cols-3 gap-4 h-auto items-center w-full px-10 py-10">
        {displayInfos.map((info, index) => (
          <div
            className="mx-auto flex flex-col relative items-center w-[270px] h-[296px] pb-4 rounded-xl shadow-sm shadow-blue-gray-300 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400 hover:top-[-20px]"
            key={info.id}
            onMouseOver={() => setShowExpertPop(index)}
            onMouseLeave={() => setShowExpertPop(null)}
          >
            <div className="transition duration-300 ease-in-out hover:scale-105 hover:transition">
              <div className='relative '>
                <div className='absolute z-10 flex justify-between w-[255px] h-[26px] items-center m-3'>
                  <div className='text-black text-xs h-[26px] w-[116px] rounded-full bg-white flex items-center justify-center'>
                    <p>{info.GouferCategories}</p>
                  </div>
                  <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717687970/Vector_1_obvbdm.svg" alt="favorite" />
                </div>
                <img
                  src={info.Shopimage}
                  alt=""
                  className="w-full h-28 rounded-md object-cover relative"
                />
              </div>
              <img
                src={info.Gouferimage}
                alt=""
                className="w-16 h-16 rounded-full absolute left-4 top-16 border border-white outline-white transition duration-300 ease-in-out hover:scale-105 hover:transition"
              />
            </div>
            <div className="pt-5 pl-3">
              <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                {info.Goufername}
              </h1>
              <p className="pr-2 text-[11px] mb-2 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                {info.text}
              </p>
              <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                  className="w-4 h-4 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                  alt=""
                />
                <p className="text-[#2e332e] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  <span className="text-[#007F00] pr-0.5 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                    {info.Task}
                  </span>
                  Task Complete
                </p>
              </div>
              <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                  className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                  alt=""
                />
                <p className="text-[#2a2b2a] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  {info.City}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                  className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                  alt=""
                />
                <p className="text-[#2a2b2a] px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  {info.Rate}
                </p>
              </div>
            </div>
            {showExpertPop === index && (
              <div className="transition delay-100 duration-300 ease-in-out w-full max-h-[130px] absolute bottom-0 hover:top-39 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00] flex flex-col ">
                <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                    className="w-5 h-5 object-contain bg-white rounded-full p-1 transition duration-300 ease-in-out hover:scale-105 hover:transition"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                    {info.Task} Task Complete
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                    className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                    {info.City}
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                    className="w-5 h-5 object-contain transition duration-300 ease-in-out hover:scale-105 hover:transition"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                    {info.Rate}
                  </p>
                </div>
                <div className="justify-end flex flex-row transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                  <div className="w-4/5 px-0 py-1 flex flex-row bg-white items-center rounded-full transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                    <p className="mx-5 text-sm text-[#007F00] font-bold bg-white cursor-pointer transition duration-300 ease-in-out hover:text-[#007F00] hover:scale-105 hover:transition">
                      View Gofer Profile
                    </p>
                    <img
                      src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                      className="w-2 h-4 justify-end transition duration-300 ease-in-out hover:scale-105 hover:transition"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className='w-full flex items-center justify-center mb-12 mt-6'>
        <div className='flex flex-row items-center justify-center hover:shadow-lg shadow-md bg-white rounded-[15px] border-[#E6F2E6]'>
          <div className='w-[119px] h-[40px] flex items-center justify-center border-[#E6F2E6]'>
            <button onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}>
              <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717681157/arrow-left_cq1gnw.svg" alt="previous" />
              Previous
            </button>
          </div>
          {[1, 2, 3, '...', 8, 9, 10].map((page, i) => (
            <div key={i} className='flex items-center justify-center w-[40px] h-[40px] border border-[#E6F2E6]'>
              <button onClick={() => handlePageChange(typeof page === 'number' ? page : currentPage)}>{page}</button>
            </div>
          ))}
          <div className='w-[92px] h-[40px] flex items-center justify-center border-[#E6F2E6]'>
            <button onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}>
              Next
              <img src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717685150/arrow-right_lmffkb.svg" alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
