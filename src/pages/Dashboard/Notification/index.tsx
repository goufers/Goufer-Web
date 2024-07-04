import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import NotificationContent from "./NotificationContent";

const Notification = () => {
  return (
    <div className="w-full h-screen  bg-white">
      <DashboardNav />
      <div className="w-full h-full flex flex-row ">
        <Menu />
        <NotificationContent />
      </div>
    </div>
  );
};

export default Notification;
