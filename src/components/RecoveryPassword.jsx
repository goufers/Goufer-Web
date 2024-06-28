import { IoIosPaperPlane } from 'react-icons/io'

const RecoveryPassword = () => {
  return (
    <div className='w-full h-screen bg-white flex justify-center mx-auto '>
        <div className='w-[380px] h-[400px]  mt-[50px] border shadow-md my-4 rounded-xl border-[#007f00] space-y-2  bg-[] flex flex-col justify-center items-center'>
            <h1 className='text-[20px] font-semibold'>Check your phone number</h1>
            <IoIosPaperPlane color='#007f00' size={100}/>
           
           <p className='text-xs tect-center'>We've sent an OTP to the Phone number</p>
            <p className='text-xs tect-center'>+234********30</p>
            
           
            <button className='w-[300px] rounded-xl p-2 bg-[#007f00] text-white'>Back to Login</button>
            
        </div>
    </div>
  )
}

export default RecoveryPassword