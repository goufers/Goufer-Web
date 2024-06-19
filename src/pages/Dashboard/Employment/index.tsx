import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import EmploymentContent from "./EmploymentContent";

const Employment = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <EmploymentContent />
      </div>
    </div>
  );
};

export default Employment;
