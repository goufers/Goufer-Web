import { useState } from "react";
import DashboardFooter from "../d.footer";
import InputSearch from "../InputSearch";
import Categories from "./Categories";
import CountryDropdown from "./CountryDropdown";
import Subcategories from "./Subcategories";

const DashboardContent = () => {
  const [selectionState, setSelectionState] = useState("category");
  const [selectedCategory, setSelectedCategory] = useState(" ");

  return (
    <div className="w-full h-auto mx-10  mt-3 ">
      <div className="w-full h-auto flex flex-row items-center mt-1">
        <button className="w-[200px] h-[40px] rounded-[50px] mt-3 bg-[#202e77] hover:bg-[#2c4adf] transition-colors duration-300 text-white">
          Send Errand Now!
        </button>
        <InputSearch />
        <button className="w-[200px] h-[40px] mt-3 rounded-[50px] bg-[#c32921] hover:bg-[#fa2720] transition-colors duration-300 text-white">
          Use Emergency
        </button>
      </div>

      <div className=" h-auto flex flex-row items-center ">
        <div className="mr-auto h-auto flex flex-col my-2 pl-3 border-l-4 border-green-800">
          <h3 className="text-[16px] text-black   py-1 ">
            Welcome back, <span className="font-bold text-[24px]">John Balogun</span>
          </h3>
          <p className="  text-[14px]  text-start text-gray-700">
            We have over 30+ categories - 15+ sub-categories of Goufers available for you today
          </p>
        </div>
        <div className=" h-auto flex flex-col my-2 ">
          <CountryDropdown />
        </div>
      </div>
      {selectionState == "category" && (
        <Categories
          setSelectionState={setSelectionState}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      {selectionState == "subcategory" && (
        <Subcategories
          selectionState={selectionState}
          selectedCategory={selectedCategory}
          setSelectionState={setSelectionState}
          setSelectionState={setSelectionState}
        />
      )}
      <DashboardFooter />
    </div>
  );
};

export default DashboardContent;
