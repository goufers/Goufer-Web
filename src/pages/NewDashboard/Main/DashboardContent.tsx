import DashboardFooter from "../d.footer";
import InputSearch from "../InputSearch";
import Select from "react-select";

// const records = [
//   { name: "Wallet Balance", Amount: 581000 },
//   { name: "Total Encounter", Amount: 1147 },
//   { name: "Completed Task", Amount: 789 },
// ];

// const notification = [
//   {
//     name: "Adetutu Adedada",
//     date: "34-12-2024",
//     time: "2:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adepoju dada",
//     date: "34-12-2024",
//     time: "6:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
//   {
//     name: "Adesola Adesola",
//     date: "34-12-2024",
//     time: "9:00pm",
//     url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
//   },
// ];

// const data = [
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Pending",
//     service: "Computer Repair",
//     statusColor: "#FFC107",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Inactive",
//     service: "Computer Repair",
//     statusColor: "#007BFF",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Inactive",
//     service: "Computer Repair",
//     statusColor: "#FFC107",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Pending",
//     service: "Computer Repair",
//     statusColor: "#FFC107",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Active",
//     service: "Computer Repair",
//     statusColor: "#1BA345",
//     statusBgColor: "#F2FFF6",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Inactive",
//     service: "Computer Repair",
//     statusColor: "#007BFF",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
//   },
//   {
//     name: "John Balogun Quamdeen",
//     date: "06/06/2024",
//     status: "Inactive",
//     service: "Computer Repair",
//     statusColor: "#FFC107",
//     statusBgColor: "#FFF9E8",
//     imgSrc:
//       "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
//   },
// ];
const DashboardContent = () => {
  //   const records = [
  //     { name: "Wallet Balance", Amount: 581000 },
  //     { name: "Total Encounter", Amount: 1147 },
  //     { name: "Completed Task", Amount: 789 },
  //   ];
  const options = [
    { option: "Nigeria", label: "Nigeria" },
    { value: "USA", label: "USA" },
    { value: "Australia", label: "Australia" },
    { value: "China", label: "China" },
  ];
  return (
    <div className="w-full h-auto mx-10  mt-3 ">
      <div className="w-full h-auto flex flex-row items-center mt-1">
        <button className="mr-auto bg-light-blue-900 py-2 px-5 text-sm text-white rounded-full">
          Send Errand Boy Now
        </button>

        <InputSearch />
        <button className="ml-auto   py-2 px-5 text-sm text-white rounded-full bg-red-600 bg-gradient-to-r from-red-200 ">
          Use Emergency
        </button>
      </div>

      <div className=" h-auto flex flex-row items-center ">
        <div className="mr-auto h-auto flex flex-col my-2 pl-3 border-l-4 border-green-800">
          <h3 className="text-[16px] text-black   py-1 ">
            Welcome back, <span className="font-bold text-[24px]">John Balogun</span>
          </h3>
          <p className="  text-[12px] text-start text-gray-700">
            We have over 30+ categories - 15+ sub-categories
          </p>
        </div>
        <div className=" h-auto flex flex-col my-2 ">
          <Select
            placeholder="Select Country"
            options={options}
            className="mx-20 w-[200px] rounded-full outline-none"
          />
        </div>
      </div>

      <DashboardFooter />
    </div>
  );
};

export default DashboardContent;
