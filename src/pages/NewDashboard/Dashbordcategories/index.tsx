import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import InputSearch from "../InputSearch";
import DashboardFooter from "../d.footer";
import CountryDropdown from "./CountryDropdown";
import Dashboards from "./Dashboard";

const Dashbordcategories = () => {
  const cardData = [
    {
      title: "Food & Beverages",
      description: "3,245 Goufers Available",
      subCategories: "2 Sub-Categories",
      imageUrl: "/images/Rectangle 249.svg",
    },
    // Add more card data objects as needed
    {
      title: "Real Estate / Housing",
      description: "3,245 Goufers Available",
      subCategories: "3 Sub-Categories",
      imageUrl: "/images/Housing.svg",
    },
    {
      title: "Fashion / Beauty / Lifestyle",
      description: "3,245 Goufers Available",
      subCategories: "4 Sub-Categories",
      imageUrl: "/images/fashion.svg",
    },
    {
      title: "Electronic/ Gadget/Technology",
      description: "3,245 Goufers Available",
      subCategories: "3 Sub-Categories",
      imageUrl: "/images/electronics.svg",
    },
    {
      title: "Vocation/ Handyman/Services",
      description: "3,245 Goufers Available",
      subCategories: "6 Sub-Categories",
      imageUrl: "/images/vocation.svg",
    },
    {
      title: "Pets / Animal Husb/ Livestocks",
      description: "3,245 Goufers Available",
      subCategories: "3 Sub-Categories",
      imageUrl: "/images/livestok.svg",
    },
    {
      title: "Automotive & Services",
      description: "3,245 Goufers Available",
      subCategories: "6 Sub-Categories",
      imageUrl: "/images/automotives.svg",
    },
    {
      title: "Travels & Tourism",
      description: "3,245 Goufers Available",
      subCategories: "2 Sub-Categories",
      imageUrl: "/images/travels.svg",
    },
    // Add more card data objects as needed
    {
      title: "Event/ Entertainment/Celebrity",
      description: "3,245 Goufers Available",
      subCategories: "14 Sub-Categories",
      imageUrl: "/images/events.svg",
    },
    {
      title: "Health & Wellness",
      description: "3,245 Goufers Available",
      subCategories: "7 Sub-Categories",
      imageUrl: "/images/health.svg",
    },
    {
      title: "Construction / Architecture",
      description: "3,245 Goufers Available",
      subCategories: "3 Sub-Categories",
      imageUrl: "/images/construction.svg",
    },
    {
      title: "Car Rentals/ Road Travels/Transportation",
      description: "3,245 Goufers Available",
      subCategories: "6 Sub-Categories",
      imageUrl: "/images/carrentals.svg",
    },
    {
      title: "Employment/ Vacancy",
      description: "3,245 Goufers Available",
      subCategories: "3 Sub-Categories",
      imageUrl: "/images/fashion.svg",
    },
    {
      title: "Outreach / Religious Charity",
      description: "3,245 Goufers Available",
      subCategories: "6 Sub-Categories",
      imageUrl: "/images/charity.svg",
    },
  ];

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
                className="w-[264px] h-[282px] border-[0.31px] rounded-[5px] border-green-200 flex flex-col items-center m-2"
              >
                <div className="w-[244px] h-[266px] flex flex-col items-center mt-2 bg-white">
                  <div className="flex flex-col items-center w-[240px] h-[217px]">
                    <div className="w-[240px] h-[181px] m-4">
                      <div className="text-[#605D66] pl-3 w-[22opx]">
                        <p className="text-[16px]">{card.title}</p>
                        <p className="font-[Roboto] text-[12px]">
                          {card.description}
                        </p>
                      </div>
                      <img
                        src={card.imageUrl}
                        alt={card.title}
                        className="mt-3"
                      />
                    </div>
                    <p className="text-[#007F00]">{card.subCategories}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <DashboardFooter/>
    </div>
  );
};

export default Dashbordcategories;
