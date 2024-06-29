import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../Redux/store';
import { toggleFavorite } from '../../../features/favoriteSlice/favoritesSlice';
import InputSearch from '../../Search/InputSearch';

interface Item {
  id: number;
  GouferCategories: string;
  Shopimage: string;
  Gouferimage: string;
  Goufername: string;
  Text: string;
  Rate: string;
  City: string;
  Task: string;
}

const Favorites: React.FC = () => {
  const [showExpertPop, setShowExpertPop] = useState<number | null>(null);
  const favoriteItems = useSelector((state: RootState) => state.favorites.favoriteItems);
  const dispatch: AppDispatch = useDispatch();

  const handleIconClick = (item: Item) => {
    dispatch(toggleFavorite(item));
  };

  return (
    <div className="container mx-auto ml-4 p-2 mt-20">
      <h1 className="mt-3 text-2xl">Favorites</h1>
      <div className="flex flex-row gap-4 items-center mb-4">
        <div className="flex flex-row gap-2 items-center mt-4">
          <h3>{favoriteItems.length}</h3>
          <h3>Total Favorites Added</h3>
        </div>
        <div className="p-2">
          <InputSearch />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-evenly items-center">
        {favoriteItems.map((item) => (
          <div
            key={item.id}
            className="mx-auto flex flex-col my-4 relative bg-white items-center w-10/12 md:w-[270px] lg:w-[250px] h-[296px] pb-4 rounded-xl shadow-sm shadow-blue-gray-300 transition duration-300 ease-in-out hover:shadow-lg hover:shadow-blue-gray-400"
            onMouseOver={() => setShowExpertPop(item.id)}
            onMouseLeave={() => setShowExpertPop(null)}>
            <div className="relative">
              <div className="absolute z-10 flex justify-between gap-12 w-[300px] md:w-[230px] h-[26px] items-center m-3">
                <div className="text-black text-xs h-[26px] w-[116px] rounded-full bg-white flex items-center justify-center">
                  <p>{item.GouferCategories}</p>
                </div>
                <button onClick={() => handleIconClick(item)}>
                  <img
                    src="https://res.cloudinary.com/dspkk9qlz/image/upload/v1717687970/Vector_1_obvbdm.svg"
                    alt="favorite"
                    className="mr-3 mt-3 cursor-pointer"
                    style={{
                      filter: favoriteItems.some((favItem) => favItem.id === item.id)
                        ? 'invert(27%) sepia(95%) saturate(2129%) hue-rotate(99deg) brightness(93%) contrast(92%)'
                        : 'none',
                    }}
                  />
                </button>
              </div>
              <img
                src={item.Shopimage}
                alt=""
                className="w-[400px] md:w-full h-28 rounded-md object-cover"
              />
              <img
                src={item.Gouferimage}
                alt=""
                className="w-16 h-16 rounded-full absolute left-4 top-16 border border-white outline-white"
              />
            </div>
            <div className="pt-5 pl-3">
              <h1 className="text-[#007F00] text-[16px] font-semibold font-Roboto cursor-pointer hover:text-[#005000]">
                {item.Goufername}
              </h1>
              <p className="pr-2 text-[11px] mb-2">{item.Text}</p>
              <div className="flex flex-row justify-start items-center pb-1">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                  className="w-4 h-4 object-contain"
                  alt=""
                />
                <p className="text-[#2e332e] px-2 text-[12px]">
                  <span className="text-[#007F00] pr-0.5">
                    {item.Task}
                  </span>
                  Task Complete
                </p>
              </div>
              <div className="flex flex-row justify-start items-center pb-1">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                  className="w-5 h-5 object-contain"
                  alt=""
                />
                <p className="text-[#2a2b2a] px-2 text-[12px]">
                  {item.City}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center pb-1">
                <img
                  src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                  className="w-5 h-5 object-contain"
                  alt=""
                />
                <p className="text-[#e5ffe5] px-2 text-[12px]">
                  {item.Rate}
                </p>
              </div>
            </div>
            {showExpertPop === item.id && (
              <div className="transition delay-100 duration-300 ease-in-out w-full max-h-[130px] absolute bottom-0 left-0 right-0 pt-4 pl-2 rounded-b-lg bg-[#007F00] flex flex-col">
                <div className="flex flex-row justify-start items-center pb-1">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716881835/Goufer/Union_1_jrxj8w.png"
                    className="w-5 h-5 object-contain bg-white rounded-full p-1"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] cursor-pointer">
                    {item.Task} Task Completed
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 cursor-pointer">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880091/Goufer/Vector_kvuvlc.svg"
                    className="w-5 h-5 object-contain bg-white rounded-full p-1"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] cursor-pointer">
                    {item.City}
                  </p>
                </div>
                <div className="flex flex-row justify-start items-center pb-1 cursor-pointer">
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716880090/Goufer/Vector_1_zcbinz.png"
                    className="w-5 h-5 object-contain bg-white rounded-full p-1"
                    alt=""
                  />
                  <p className="text-white px-2 text-[12px] cursor-pointer">
                    {item.Rate}
                  </p>
                </div>
                <div className="w-full pr-3 justify-end flex flex-row mb-6">
                  <p className="mx-5 px-6 py-2 text-sm text-[#007F00] font-bold rounded-3xl bg-white cursor-pointer">
                    View Gofer Profile
                  </p>
                  <img
                    src="https://res.cloudinary.com/dxnznpglg/image/upload/v1716892672/Goufer/Vector_2_cq2qn3.png"
                    className="w-2 h-4 justify-end"
                    alt="" 
                  />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
