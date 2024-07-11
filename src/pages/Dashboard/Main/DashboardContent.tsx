import { IoIosArrowRoundForward } from "react-icons/io";
import { PieChart } from "@mui/x-charts/PieChart";
import Footer from "../Footer";

const records = [
  { name: "Wallet Balance", Amount: 581000 },
  { name: "Total Encounter", Amount: 1147 },
  { name: "Completed Task", Amount: 789 },
];

const notification = [
  {
    name: "Adetutu Adedada",
    date: "34-12-2024",
    time: "2:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adepoju dada",
    date: "34-12-2024",
    time: "6:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
  {
    name: "Adesola Adesola",
    date: "34-12-2024",
    time: "9:00pm",
    url: "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718905516/Img_margin_n2jdwk.png",
  },
];

const data = [
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Pending",
    service: "Computer Repair",
    statusColor: "#FFC107",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Inactive",
    service: "Computer Repair",
    statusColor: "#007BFF",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Inactive",
    service: "Computer Repair",
    statusColor: "#FFC107",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Pending",
    service: "Computer Repair",
    statusColor: "#FFC107",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-04.jpg_vh1g5p.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Active",
    service: "Computer Repair",
    statusColor: "#1BA345",
    statusBgColor: "#F2FFF6",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970028/user-03.jpg_s3xwc2.svg",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Inactive",
    service: "Computer Repair",
    statusColor: "#007BFF",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970027/Img_margin_1_g2zrbk.png",
  },
  {
    name: "John Balogun Quamdeen",
    date: "06/06/2024",
    status: "Inactive",
    service: "Computer Repair",
    statusColor: "#FFC107",
    statusBgColor: "#FFF9E8",
    imgSrc:
      "https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718970029/user-01.jpg_cxdqkx.svg",
  },
];
const DashboardContent = () => {
  return (
    <div className="w-3/4 h-auto  mt-16 bg-white">
      <div className=" w-full flex flex-row">
        {/* Wallets */}
        <div className="w-4/5 h-auto">
          <h3 className="text-[16px] text-black p-10 py-3 text-start">
            Welcome back, <span className="font-bold text-[24px]">Quamdeen</span>
          </h3>
          <div className="flex flex-row">
            {records.map((records) => (
              <div className="w-[210px] h-auto  shadow-lg rounded-md mx-3 p-1 items-center ">
                <div className="w-auto h-auto border border-[#007f00] m-1 p-1  flex flex-row rounded-md items-center">
                  <div className="w-[100px] h-[80px]  bg-gradient-to-r from-[#008307] to-[#3CBF43] rounded ml-2"></div>
                  <div className="h-auto pl-2">
                    <h1 className="text-[12px] text-[#322F37] text-start ">{records.name}</h1>
                    <p className="text-[20px] font-bold text-[#333E78] pt-5">
                      {records.Amount}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* emergency */}
        <div className=" mx-auto w-[140px] h-[160px] bg-white border border-[#EC928E] shadow-md mt-8 rounded-lg  flex flex-col justify-center items-center">
          <img
            src="https://res.cloudinary.com/dyjo2mvqb/image/upload/v1718883114/Frame_153_oxtobf.svg"
            className="w-[100px] h-[100px]"
            alt=""
          />
          <button className="w-11/12 h-auto py-2 text-white text-[12px] rounded-full bg-gradient-to-t from-[#df8e8b] to-[#B82820] ">
            Use Emergency
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-[20px] gap-2">
        <div className="flex-[2] rounded">
          <div className="border border-[#007f00] h-screen rounded-lg text-[16px]  ">
            <div className="flex flex-row justify-between pt-2 mb-2 ">
              <h1 className="ml-3">Recent Encounter</h1>
              <p className="mr-3 border border-[#007f00] rounded-full px-2 flex flex-row items-center ">
                Views All <IoIosArrowRoundForward color="#007f00" size={15} />
              </p>
            </div>

            <div className="flex flex-row justify-around mx-auto bg-[#E6F2E6] text-[16px] text-black ">
              <p className="ml-3">Goufer Name</p>
              <p className="ml-12">Date</p>
              <p className="mr-14">Service</p>
              <p className="mr-20">Status</p>
            </div>
            <div className="h-[510px] w-full overflow-y-scroll">
              <div className="w-full h-auto flex flex-col ">
              {data.map((item, index) => (
                <div key={index} className="flex flex-col cursor-pointer">
                  <div className="flex justify-between py-2 items-center space-y-4 w-full hover:bg-[#d2e7d2] text-[14px]">
                    <div className="flex w-[400px] justify-between items-center gap-7">
                      <div className="flex flex-row gap-1 ml-3 items-center">
                        <img src={item.imgSrc} alt="user" className="" />
                        <p className="truncate text-[15px] font-[400]">{item.name}</p>
                      </div>
                      <div className="flex justify-between gap-6">
                        <p className="text-[15px]">{item.date}</p>
                        <p className="truncate">{item.service}</p>
                      </div>
                      <div
                        className="w-[80px] h-[28px] flex justify-center items-center ml-6 p-2 rounded-lg"
                        style={{ backgroundColor: item.statusBgColor }}
                      >
                        <p className="text-[15x]" style={{ color: item.statusColor }}>
                          {item.status}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="flex-[1] rounded shadow-md border border-[#007f00] ">
          <div className=" h-[200px] rounded-sm flex flex-col ">
            <h1 className="mx-auto pt-2">Task Statistics</h1>
            <div className="mx-auto w-[200px] flex h-[400px] ">
              <PieChart
                colors={["#347AE2", "#3CBF43", "#FFC107", "#E63c3c"]}
                series={[
                  {
                    data: [
                      { id: 0, value: 144, label: "InProgress" },
                      { id: 1, value: 162, label: "Complete" },
                      { id: 2, value: 54, label: "Pending" },
                      { id: 3, value: 18, label: "Cancelled" },
                    ],
                  },
                ]}
                width={400}
                height={250}
              />
            </div>
          </div>

          <div className="w-auto h-auto border-2 border-[#E6F2E6] rounded-lg mt-[30px] py-6 ">
            <div className="flex flex-col items-center   ">
              <div className="w-full flex flex-row mb-4 items-center ">
                <h1 className="mx-auto justify-start">Notification</h1>
                <p className="mx-auto border justify-end border-[#007f00] rounded-full px-2 flex flex-row items-center ">
                  Views All
                  <IoIosArrowRoundForward color="#007f00" size={15} />
                </p>
              </div>
              <div className="h-[300px] w-full overflow-y-scroll">
                <div className="w-full h-auto">
                {notification.map((notification) => (
                  <div className="flex flex-row items-center mx-1 py-1 text-xs hover:bg-green-50/100 cursor-pointer w-full">
                    <img
                      src={notification.url}
                      alt=""
                      className="rounded-full w-[50px] h-[50px] mx-3 object-cover"
                    />
                    <div className="flex flex-col">
                      <p>
                        A message from{" "}
                        <span className="text-[#007F00] font-semibold">
                          {notification.name}
                        </span>{" "}
                      </p>
                      <p>
                        {" "}
                        {notification.date} at {notification.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardContent;
