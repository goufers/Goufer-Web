import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <DashboardContent />
      </div>
    </div>
  );
};

export default Dashboard;
