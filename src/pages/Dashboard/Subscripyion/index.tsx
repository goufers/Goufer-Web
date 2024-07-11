import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import SubscriptionContent from "./SubscriptionContent";

const Subscription = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
      
        <SubscriptionContent />
       
      </div>
    </div>
  );
};

export default Subscription;
