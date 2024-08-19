import { MdManageAccounts, MdOutlineDashboard, MdOutlineMessage } from "react-icons/md";
const DashboardSubNav = () => {
  return (
    <div className="w-full h-auto  mt-24 items-center flex flex-row">
      <div className=" mx-auto w-[600px] bg-blue-gray-100 flex flex-row items-center rounded-full p-2 py-1">
        <a
          href={`${"dashboard"}`}
          className="text-center w-[150px] mx-auto py-2 items-center flex flex-row bg-white rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <MdOutlineDashboard size={24} color="green" className="ml-4" />
          <span className="  text-sm ml-2 text-black ">Dashboard</span>
        </a>
        <a
          href={`${"chat"}`}
          className="text-center w-[150px] mx-auto py-2 items-center flex flex-row rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <MdOutlineMessage size={24} color="green" className="ml-4" />
          <span className="  text-sm ml-2 text-gray-700 hover:text-black">Chat Room</span>
        </a>
        <a
          href={`${"account_settings"}`}
          className="text-center w-[150px] mx-auto py-2 items-center flex flex-row rounded-full hover:bg-gray-200 cursor-pointer"
        >
          <MdManageAccounts size={24} color="green" className="ml-2" />
          <span className=" text-sm ml-1  text-gray-700 hover:text-black">
            Account Settings
          </span>
        </a>
      </div>
    </div>
  );
};

export default DashboardSubNav;
