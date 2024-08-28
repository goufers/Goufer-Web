import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import InputSearch from "../InputSearch";
import DashboardFooter from "../d.footer";
import CountryDropdown from "./CountryDropdown";
import Dashboards from "./Dashboard";

const Subcategories = () => {
 

  return (
    <div className="mx-auto w-full flex flex-col bg-[#F9F9F9]">
      
      <DashboardNav />

      <div className="mt-6 flex flex-col">
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
            Food & Beverages
            </p>

            <p className="text-[14px] text-[#605D64]">
            3 Sub-categories
            </p>
          </div>
        </div>

        <div className="w-[1130px] mx-auto mt-5">
         
        </div>
      </div>

      <DashboardFooter/>
    </div>
  );
};

export default Subcategories;
