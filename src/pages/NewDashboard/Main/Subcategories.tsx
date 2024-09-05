import React from "react";
import DashboardFooter from "../d.footer";
import { MdOutlineArrowBackIos } from "react-icons/md";

interface SubcategoriesProps {
  setSelectionState: (state: string) => void;
  selectedCategory: string;
}

const Subcategories: React.FC<SubcategoriesProps> = ({
  selectedCategory,
  setSelectionState,
}) => {
  const subCardData = [
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Food & Beverages",
      Subcategory: "Restaurants",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Food & Beverages",
      Subcategory: "Food Stuffs",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Food & Beverages",
      Subcategory: "Chefs",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/realestae1.svg",
      category: "Real Estate / Housing",
      Subcategory: "Residential",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/real2.svg",
      category: "Real Estate / Housing",
      Subcategory: "Commercial",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/real3.svg",
      category: "Real Estate / Housing",
      Subcategory: "Industrial",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Fashion / Beauty / Lifestyle",
      Subcategory: "Fashion",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Fashion / Beauty / Lifestyle",
      Subcategory: "Beauty",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/real3.svg",
      category: "Fashion / Beauty / Lifestyle",
      Subcategory: "Lifestyle",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Travels & Tourism",
      Subcategory: "Tourism",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
    {
      backgroundImage: "/images/food&brev.svg",
      category: "Travels & Tourism",
      Subcategory: "Travels",
      subCatText: [
        "these are professional goufers which are",
        "expertise in restaurant knowledge and updates",
      ],
      availableGoufers: [{ count: 50 }],
    },
  ];

  const filteredSubcategories = subCardData.filter((sub) => sub.category === selectedCategory);

  const subCategoryCount = filteredSubcategories.length;

  return (
    <div className="mx-auto w-full flex flex-col bg-[#F9F9F9]">
      <div className="w-full ml-10 h-auto mt-10  ">
        <div
          className=" my-6 flex flex-row items-center cursor-pointer"
          onClick={() => setSelectionState("category")}
        >
          <MdOutlineArrowBackIos color="#007F00" size={24} />
          <span className="text-[#007F00] text-md"> Back to categories</span>
        </div>
        <div className="flex ">
          <img src="/images/greenline.svg" alt="" />

          <div className="flex flex-col ml-2">
            <p className="text-[20px] text-[#322F35]">{selectedCategory}</p>

            <p className="text-[14px] text-[#605D64]">{subCategoryCount} Sub-categories</p>
          </div>
        </div>

        <div className="flex flex-col w-[1130px] mx-auto mt-5">
          <div className="flex flex-wrap w-[1130px] gap-4">
            {filteredSubcategories.map((d, i) => (
              <div
                className="relative flex flex-col w-[270px] h-[250px] bg-white rounded-[10px] shadow-md overflow-hidden hover:shadow-lg"
                key={i}
              >
                <div
                  className="relative bg-cover bg-center h-[120px] w-full rounded-[10px]"
                  style={{ backgroundImage: `url(${d.backgroundImage})` }}
                >
                  <div className="absolute flex pt-3 w-[255px] h-[26px] justify-between items-center pl-2">
                    <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full mt-2 w-[116px] h-[26px] ">
                      <p className=" pl-1  text-[11px] font-thin overflow-hidden text-ellipsis whitespace-nowrap">
                        {d.category}
                      </p>
                    </div>
                    <img src="/images/Fav Icon.png" alt="" className="w-[24px] h-[24px]" />
                  </div>
                </div>

                <div className="relative flex flex-col w-[257px] h-[56px] p-2">
                  <h2 className="text-[#007F00]">{d.Subcategory}</h2>
                  <p className="text-[#605D66] w-[400px] text-[12px]">
                    {Array.isArray(d.subCatText)
                      ? d.subCatText.map((line, i) => (
                          <React.Fragment key={i}>
                            {line}
                            {i !== d.subCatText.length - 1 && <br />}
                          </React.Fragment>
                        ))
                      : d.subCatText}
                  </p>
                </div>

                {/* Content that appears on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[130px] opacity-0 transform translate-y-4 transition-all duration-700 hover:opacity-100 hover:translate-y-0 p-2 bg-[#007F00]">
                  <div className="w-full">
                    <h2 className="text-[#FFFFFF]">{d.Subcategory}</h2>
                    <p className="text-[#FFFFFF] w-[400px] text-[12px]">
                      {Array.isArray(d.subCatText)
                        ? d.subCatText.map((line, i) => (
                            <React.Fragment key={i}>
                              {line}
                              {i !== d.subCatText.length - 1 && <br />}
                            </React.Fragment>
                          ))
                        : d.subCatText}
                    </p>
                    <div className="w-[161px] h-[40px] flex flex-col pt-4 pl-2">
                      <div className="w-[161px] h-[20px] flex flex-row justify-between items-center text-[#FFFFFF]">
                        <img src="/images/lez.svg" alt="" className="w-[20px] h-[20px]" />
                        <p className="text-[12px]">Available in your location</p>
                      </div>

                      <div className="w-[161px] h-[20px] flex flex-row items-center pt-1">
                        <img src="/images/goU.svg" alt="" className="w-[20px] h-[20px]" />
                        {d.availableGoufers.map((goufer, index) => (
                          <p className="text-[12px] text-[#FFFF] pl-2" key={index}>
                            <span className="text-white">{goufer.count}+</span> Available
                            Goufers
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-[161px] h-[40px] flex flex-col pt-6 pl-2">
                  <div className="w-[161px] h-[20px] flex flex-row justify-between items-center text-[#49454F]">
                    <img src="/images/lez.svg" alt="" className="w-[20px] h-[20px]" />
                    <p className="text-[12px]">Available in your location</p>
                  </div>

                  <div className="w-[161px] h-[20px] flex flex-row items-center pt-1">
                    <img src="/images/goU.svg" alt="" className="w-[20px] h-[20px]" />
                    {d.availableGoufers.map((goufer, index) => (
                      <p className="text-[12px] text-[#49454F] pl-2" key={index}>
                        <span className="text-[#007F00]">{goufer.count}+</span> Available
                        Goufers
                      </p>
                    ))}
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

export default Subcategories;
