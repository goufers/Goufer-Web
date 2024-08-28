import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import DashboardContent from "./DashboardContent";

const NewDashboard = () => {
  return (
    <div className="w-full h-auto bg-[#F9F9F9]">
      <DashboardNav />
      <DashboardSubNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <DashboardContent />
      </div>
    </div>
  );
};

export default NewDashboard;
