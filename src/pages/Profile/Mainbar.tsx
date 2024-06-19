import { useState } from "react";
import Data from "./Data";
import Card from "./Card";

function Mainbar() {
  const [active, setActive] = useState("FirstCard");
  const Menu = [
    { title: "About" },
    { title: "Work Experience" },
    { title: "Honours & Awards" },
    { title: "Reviews" },
    { title: "Media" },
  ];

  return (
    <div className="mx-16 p-4 w-[650px] justify-center items-center h-[410px]  flex flex-col bg-white shadow-md rounded-xl shadow-[#c6c6c788]">
      <div className="mx-auto flex flex-row bg-white gap-6  w-auto items-center  mt-[10px] border-[#007F00]   ">
        {Menu.map((i, n) => (
          <h2
            className={`{mx-auto border-b-2 text-center items-center border-[#007F00] hover:text-[#007F00] cursor-pointer rounded-t-xl
          ${
            active == i.title
              ? "border-[#007F00] text-[#007F00] font-semibold"
              : "border-[#ffffff]"
          }
          `}
            key={n}
            onClick={() => setActive(i.title)}
          >
            {i.title}
          </h2>
        ))}
      </div>
      <div className=" m-auto flex justify-center items-center h-full   w-full   bg-white   px-[20px] py-[20px] ">
        {active === "About" && <Card data={Data} cardIndex={0} />}
        {active === "Work Experience" && <Card data={Data} cardIndex={1} />}
        {active === "Honours & Awards" && <Card data={Data} cardIndex={2} />}
        {active === "Reviews" && <Card data={Data} cardIndex={3} />}
        {active === "Media" && <Card data={Data} cardIndex={4} />}
      </div>
    </div>
  );
}

export default Mainbar;
