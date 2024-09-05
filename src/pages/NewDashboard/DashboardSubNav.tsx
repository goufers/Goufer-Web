import { MdManageAccounts, MdOutlineDashboard, MdOutlineMessage } from "react-icons/md";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";
import { useLocation } from "react-router-dom";
const DashboardSubNav = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);
  const lastSegment = pathSegments[pathSegments.length - 1];
  console.log(lastSegment);

  return (
    <div className="w-full h-auto  mt-24 items-center flex flex-row">
      <div className=" mx-auto w-[600px] bg-blue-gray-100 flex flex-row items-center rounded-full p-2 py-1">
        <a
          href={PUBLIC_ROUTES.DASHBOARD}
          className={`text-center w-[150px] mx-auto py-2 items-center flex flex-row rounded-full hover:bg-gray-200 cursor-pointer ${
            lastSegment == "dashboard" ? "bg-white" : ""
          } `}
        >
          <MdOutlineDashboard size={24} color="green" className="ml-4" />
          <span className="  text-sm ml-2 text-black ">Dashboard</span>
        </a>
        <a
          href={PUBLIC_ROUTES.CHAT}
          className={`text-center w-[150px] mx-auto py-2 items-center flex flex-row rounded-full hover:bg-gray-200 cursor-pointer ${
            lastSegment == "chat" ? "bg-white" : ""
          } `}
        >
          <MdOutlineMessage size={24} color="green" className="ml-4" />
          <span className="  text-sm ml-2 text-gray-700 hover:text-black">Chat Room</span>
        </a>
        <a
          href={PUBLIC_ROUTES.ACCOUNT_SETTINGS}
          className={`text-center w-[150px] mx-auto py-2 items-center flex flex-row rounded-full hover:bg-gray-200 cursor-pointer ${
            lastSegment == "account_settings" ? "bg-white" : ""
          } `}
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
