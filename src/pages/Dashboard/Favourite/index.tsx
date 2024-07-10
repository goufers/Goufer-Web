import DashboardNav from "../DashboardNav";
import Menu from "../Menu";
import FavoritesContent from "./FavoritesContent";

const Favorites = () => {
  return (
    <div className="w-full h-auto">
      <DashboardNav />
      <div className="w-full flex flex-row h-screen bg-[#F9F9F9]">
        <Menu />
        <FavoritesContent />
      </div>
    </div>
  );
};

export default Favorites;
