import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import Taskrecord from "./Taskrecord";

const TaskrecordContent = () => {
 
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <Taskrecord />
      </div>
    </div>
  );
};

export default TaskrecordContent;
