import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import Settings from "./Settings";

const AccountSettings = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <Settings />
      </div>
    </div>
  );
};

export default AccountSettings;
