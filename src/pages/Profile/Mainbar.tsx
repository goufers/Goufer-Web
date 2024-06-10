import {useState} from 'react'
import Data from './Data';
import Card from './Card';

function Mainbar() {
    const [active, setActive] = useState("FirstCard");
  return (
    <div className=''>
      <nav className='flex flex-row gap-4 mt-[30px] rounded-t-xl ml-[40px] bg-white hover-shadow-lg shadow-md pt-1 pl-3 border-[-3px] border-[#007F00] shadow-[#969595] animate-none duration-150 transition-shadow '>
        <button className='hover:border-b-2 border-[#007F00]' onClick={() => setActive("FirstCard")}>About</button>
        <button className='hover:border-b-2 border-[#007F00]' onClick={() => setActive("SecondCard")}>Work Experience</button>
        <button className='hover:border-b-2 border-[#007F00]' onClick={() => setActive("ThirdCard")}>Honours & Awards</button>
        <button className='hover:border-b-2 border-[#007F00]' onClick={() => setActive("FourCard")}>Reviews</button>
        <button className='hover:border-b-2 border-[#007F00]' onClick={() => setActive("ThirdCard")}>Media</button>
      </nav>
      <div className='flex justify-center items-center h-[375px] w-[650px]  ml-[40px] bg-white hover-shadow-lg shadow-md rounded-b-xl px-[20px] py-[20px] pb-[100px] '>
        {active === "FirstCard" && <Card data={Data} cardIndex={0} />}
        {active === "SecondCard" && <Card data={Data} cardIndex={1}/>}
        {active === "ThirdCard" && <Card data={Data} cardIndex={2}/>}
        {active === "FourCard" && <Card data={Data} cardIndex={3}/>}
        {active === "FiveCard" && <Card data={Data} cardIndex={4}/>}
      </div>
    </div>
  )
}

export default Mainbar