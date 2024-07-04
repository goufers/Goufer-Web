import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import PageContent from "./ChatContent";

const Chat = () => {
  return (
    <div className="w-full h-screen  bg-white">
      <DashboardNav />
      <div className="w-full h-full flex flex-row ">
        <Menu />
        <PageContent/>
      </div>
    </div>
  );
};

export default Chat;
