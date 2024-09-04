import { useState } from "react";
import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import InputSearch from "../InputSearch";
import DashboardFooter from "../d.footer";
import CountryDropdown from "./CountryDropdown";
import Dashboards from "./Dashboardd";
import { useNavigate } from "react-router-dom";

const Dashbordcategories = () => {
  const cardData = [
    {
      category: "Food & Beverages",
      description: "3,245 Goufers Available",
      subCategories: 3,
      imageUrl: "/images/Rectangle 249.svg",
    },
    // Add more card data objects as needed
    {
      category: "Real Estate / Housing",
      description: "3,245 Goufers Available",
      subCategories: 3,
      imageUrl: "/images/Housing.svg",
    },
    {
      category: "Fashion / Beauty / Lifestyle",
      description: "3,245 Goufers Available",
      subCategories: 3,
      imageUrl: "/images/fashion.svg",
    },
    {
      category: "Electronic/ Gadget/Technology",
      description: "3,245 Goufers Available",
      subCategories: 0,
      imageUrl: "/images/electronics.svg",
    },
    {
      category: "Vocation/ Handyman/Services",
      description: "3,245 Goufers Available",
      subCategories: 7,
      imageUrl: "/images/vocation.svg",
    },
    {
      category: "Pets / Animal Husb/ Livestocks",
      description: "3,245 Goufers Available",
      subCategories: 6,
      imageUrl: "/images/livestok.svg",
    },
    {
      category: "Automotive & Services",
      description: "3,245 Goufers Available",
      subCategories: 0,
      imageUrl: "/images/automotives.svg",
    },
    {
      category: "Travels & Tourism",
      description: "3,245 Goufers Available",
      subCategories: 4,
      imageUrl: "/images/travels.svg",
    },
    // Add more card data objects as needed
    {
      category: "Event/ Entertainment/Celebrity",
      description: "3,245 Goufers Available",
      subCategories: 7,
      imageUrl: "/images/events.svg",
    },
    {
      category: "Health & Wellness",
      description: "3,245 Goufers Available",
      subCategories: 5,
      imageUrl: "/images/health.svg",
    },
    {
      category: "Construction / Architecture",
      description: "3,245 Goufers Available",
      subCategories: 3,
      imageUrl: "/images/construction.svg",
    },
    {
      category: "Car Rentals/ Road Travels/Transportation",
      description: "3,245 Goufers Available",
      subCategories: 6,
      imageUrl: "/images/carrentals.svg",
    },
    {
      category: "Employment/ Vacancy",
      description: "3,245 Goufers Available",
      subCategories: 3,
      imageUrl: "/images/fashion.svg",
    },
    {
      category: "Outreach / Religious Charity",
      description: "3,245 Goufers Available",
      subCategories: 6,
      imageUrl: "/images/charity.svg",
    },
  ];

  const navigate = useNavigate();

  const handleCardClick = (category: string) => {
    navigate("/subcategories", { state: { selectedCategory: category } });
  };
  return (
    <div className="mx-auto w-full flex flex-col bg-[#F9F9F9]">
      <DashboardNav />
      <div className="mt-6 flex flex-col">
        <div className="flex flex-row w-[1100px] pl-36 items-center mx-auto">
          <DashboardSubNav />

          <div className="mt-20">
            <CountryDropdown />
          </div>
        </div>

        <div className="w-[1125px] flex flex-row mt-6 items-center mx-auto justify-center">
          <button className="w-[200px] h-[40px] rounded-[50px] mt-3 bg-[#333E78] hover:bg-[#778ae8] transition-colors duration-300 text-white">
            Send Errand Now!
          </button>

          <InputSearch />

          <button className="w-[200px] h-[40px] mt-3 rounded-[50px] bg-[#B82820] hover:bg-[#bd5551] transition-colors duration-300 text-white">
            Use Emergency
          </button>
        </div>
      </div>

      <div className="w-[1130px] h-auto mt-10 mx-auto">
        <div className="flex ">
          <img src="/images/greenline.svg" alt="" />

          <div className="flex flex-col ml-2">
            <p className="text-[24px] text-[#322F35]">
              Welcome Back, <b>Quamdeen.</b>
            </p>

            <p className="text-[14px] text-[#605D64]">
              We have Over 20 categories - 15+ Sub-categories Goufers available
              for you today
            </p>
          </div>
        </div>

        <div className="w-[1130px] mx-auto mt-5">
          <div className="flex flex-wrap justify-start ml-1">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="w-[264px] h-[282px] border-[0.31px] rounded-[5px] border-green-200 flex flex-col items-center m-2 shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-transform duration-300"
                onClick={() => handleCardClick(card.category)}
              >
                <div className="w-[244px] h-[266px] flex flex-col items-center mt-2 bg-white">
                  <div className="flex flex-col items-center w-[240px] h-[217px]">
                    <div className="w-[240px] h-[181px] m-4">
                      <div className="text-[#605D66] pl-3 w-[22opx]">
                        <p className="text-[16px]">{card.category}</p>
                        <p className="font-[Roboto] text-[12px]">
                          {card.description}
                        </p>
                      </div>
                      <img
                        src={card.imageUrl}
                        alt={card.category}
                        className="mt-3"
                      />
                    </div>
                    <p className="text-[#007F00]">
                      {card.subCategories} Sub-Categories
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default Dashbordcategories;
