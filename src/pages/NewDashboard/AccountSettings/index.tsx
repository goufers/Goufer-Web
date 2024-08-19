import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import Settings from "./Settings";

const NewAccountSettings = () => {
  return (
    <div className="w-full h-screen  bg-white">
      <DashboardNav />
      <DashboardSubNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Settings />
      </div>
    </div>
  );
};

export default NewAccountSettings;
