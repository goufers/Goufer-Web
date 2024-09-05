import DashboardNav from "../DashboardNav";
import DashboardSubNav from "../DashboardSubNav";
import PageContent from "./ChatContent";
import GoferProfile from "./GoferProfile";

const NewChat = () => {
  return (
    <div className="w-full fixed h-screen  bg-white">
      <DashboardNav />
      <DashboardSubNav />
      <div className="w-full h-full flex flex-row mt-4 ">
        <GoferProfile />
        <PageContent />
      </div>
    </div>
  );
};

export default NewChat;
