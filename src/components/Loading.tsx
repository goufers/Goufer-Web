// src/components/Loading.tsx


const Loading: React.FC = () => {


  return (
   <div>
        <div className='w-[70px] h-[300px] m-auto relative'>
            <div className='w-[50px] h-[50px] rounded-[50px] bg-gradient-to-r bg-[#007f00] absolute bottom-[0px] left-[10px] animate-ping duration-100'>
            <div className='w-[50px] h-[50px] rounded-[50px] bg-gradient-to-r bg-[#249324] absolute bottom-[0px] left-[0px] animate-ping duration-75'>
            <div className='w-[50px] h-[50px] rounded-[50px] bg-gradient-to-r bg-[#1b701b] absolute bottom-[0px] left-[0px] animate-ping duration-50'></div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Loading;
