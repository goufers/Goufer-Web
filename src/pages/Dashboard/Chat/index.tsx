import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import PageContent from "./ChatContent";

const Chat = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <PageContent />
      </div>
    </div>
  );
};

export default Chat;
