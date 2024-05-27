import { faCopyright } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"





const Footer = () => {
  return (
    <div>
      <div>
        <hr />
      </div>
      <div className='flex justify-center  gap-28 mt-10' >
            <div className='w-96 mb-5 '>
            <img src="/images/goufer.png" alt="goufer" className='mb-3'/>
                <p className='text-sm text-gray-500 font-Robotto'>
                Goufer is a service that bridges the gap between experienced
                service providers and individuals or businesses in need of their expertise.
                  The name is inspired by "gofer," implying a dependable and resourceful assistant who
                  can handle a variety of tasks.
                </p>
                <div className='flex gap-8 mt-2'>
                  <img src="/images/x.png" alt="goufer"/>
                  <img src="/images/linkdin.png" alt="goufer"/>
                  <img src="/images/facebook.png" alt="goufer"/>
                  <img src="/images/github.png" alt="goufer"/>
                  <img src="/images/peace.png" alt="goufer"/>
                  <img src="/images/ball.png" alt="goufer"/>
                </div>
            </div>
            <div>
              <h3 className='font-bold text-gray-500 font-serif mb-3'>Product</h3>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Overview</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Features</li>
              <div className='flex gap-2 items-center'>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Solution</li>
              <li className='list-none text-xs font-Robotto text-gray-700  bg-green-200 rounded px-1.5'>New</li>
              </div>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Tutorial</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Prices</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Releases</li>
            </div>
            <div>
              <h3 className='font-bold text-gray-500 font-serif mb-3'>Company</h3>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>About Us</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>News</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Faqs</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Contact Us</li>
            </div>
            <div>
              <h3 className='font-bold text-gray-500 font-serif mb-3'>Resources</h3>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Blog</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Newsletter</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Events</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Help Center</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Tutorials</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Support</li>
            </div>
            <div>
              <h3 className='font-bold text-gray-500 font-serif mb-3'>Legal</h3>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Terms</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Privacy</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Cookies</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Licenses</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Settings</li>
              <li className='list-none text-sm font-Robotto text-gray-700 font-bold px-0.5'>Contact</li>
            </div>
        </div>
        <hr />
        <div className='flex items-center justify-center gap-1 mt-2' >
         <FontAwesomeIcon icon={faCopyright} className='mb-1 text-gray-500' style={{width:'20px'}}/>
          <p className=' text-gray-500 font-mono'>2024 Goufer All Right Reserved.</p>
        </div>
      
    </div>
  )
}

export default Footer
