import { useRef, useState } from 'react';
import ReactImagePickerEditor, { ImagePickerConf } from 'react-image-picker-editor';
import 'react-image-picker-editor/dist/index.css'



const ProfileSettings = () => {

   const [imageSrc, setImageSrc] = useState('/images/goufer.png')

   const config2: ImagePickerConf = {
      borderRadius: '100%',
      language: 'en',
      width: '200px',
      height: '200px',
      objectFit: 'contain',
      compressInitial: null,
      hideAddBtn: false,
      hideDeleteBtn: false,
      hideDownloadBtn: false,
      hideEditBtn: false

   };

   const initialImage = '';

   return (
      <div>
         <ul>
            <div className="flex flex-col gap-2">
               <h1 className='font-bold text-base'>Personal Information</h1>
               <div className="flex flex-row items-center gap-8 p-2">
                  <div>
                     <ReactImagePickerEditor
                        config={config2}
                        imageSrcProp={initialImage}
                        imageChanged={(newDataUri: any) => { setImageSrc(newDataUri) }}
                     />
                  </div>
                  {/* <div className="flex flex-col gap-2">
                     <div className=" p-2 rounded-full w-56 text-center bg-green-500 text-white">
                        <button onChange={handleImageChangeClick}>Change Image</button>
                     </div>
                     <div className="border-gray-400 border-2 p-2 rounded-full w-56 text-center text-green-700">
                        <button onClick={handleDeleteImageClick}>Delete Image</button>
                     </div>
                  </div> */}
               </div>
               <div className="flex flex-row gap-16 text-sm">
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>First Name</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Last Name</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Other Name</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
               </div>
               <div className="flex flex-row gap-16 text-sm">
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Email</h3>
                     <input type="email" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Country</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Phone Number</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>

               </div>
               <div className="flex flex-row gap-16 text-sm">
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>State</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                     <h3 className='text-gray-800 '>Local Government</h3>
                     <input type="text" placeholder="johndoe@goufer.com" className="w-96 rounded-lg p-2 border-gray-400 outline-none border-2" />
                  </div>
               </div>
               <div className="flex flex-col">
                  <h2 className='text-gray-800 '>Full Address</h2>
                  <textarea name="" placeholder="Enter Full Address..." id="" className="w-9/12 border-gray-400 resize-none outline-none border-2 rounded-lg p-2"></textarea>
               </div>
               <div className="flex flex-col">
                  <h2 className='text-gray-800 '>Bio</h2>
                  <textarea name="" placeholder="Enter A Short Description..." id="" className="w-9/12 outline-none resize-none border-gray-400 border-2 rounded-lg p-2"></textarea>
               </div>
               <span className="text-gray-600">This is hint text to help users</span>
               <div className=" p-2 rounded-full w-56 text-center bg-green-500 text-white">
                  <button>Save Change</button>
               </div>
            </div>


         </ul>

      </div>
   )
}

export default ProfileSettings
