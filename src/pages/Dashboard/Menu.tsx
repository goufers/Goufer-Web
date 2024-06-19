import { useState } from "react";
import PUBLIC_ROUTES from "../../utils/PublicRoutes";

const Menu = () => {
  const [menuState, setMenuState] = useState("Dashboard");
  const MenuItem = [
    {
      title: "Dashboard",
      icon: "/images/dashboard-square-remove.svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
    {
      title: "Chat",
      icon: "/images/message-02.svg",
      url: PUBLIC_ROUTES.CHAT,
    },
    {
      title: "Favorites",
      icon: "/images/favourite.svg",
      url: PUBLIC_ROUTES.FAVORITE,
    },
    {
      title: "Employment",
      icon: "/images/office-chair.svg",
      url: PUBLIC_ROUTES.EMPLOYMENT,
    },
    {
      title: "Notifications",
      icon: "/images/notification-02 (1).svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
    {
      title: "Subscription",
      icon: "/images/invoice-01.svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
    {
      title: "Payment",
      icon: "/images/credit-card-pos.svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
    {
      title: "Account Settings",
      icon: "/images/account-setting-01.svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
    {
      title: " Log Out",
      icon: "/images/logout-03.svg",
      url: PUBLIC_ROUTES.DASHBOARD,
    },
  ];

  return (
    <div className="w-1/4 mt-20 h-auto  bg-white ">
      <div className="mx-6 pl-10 py-10 h-auto w-11/12 flex flex-col  bg-white  items-end">
        {MenuItem.map((d, i) => (
          <a
            href={d.url}
            className={`w-full  h-auto my-1 py-4 flex rounded-r-full flex-row items-center cursor-pointer ${
              menuState == d.title ? "bg-[#007F00] " : ""
            }`}
            key={i}
            onClick={() => setMenuState(d.title)}
          >
            <img src={d.icon} alt="" className="mx-2 w-[18px] h-[18px] object-cover" />
            <p
              className={`px-4 font-Roboto text-[16px] font-bold text-[#49454F] ${
                menuState == d.title ? "  text-white" : ""
              } `}
            >
              {d.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Menu;
