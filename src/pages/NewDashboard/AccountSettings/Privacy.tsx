
import React, { useState } from 'react';
import { notificationLabels, privacyLabels } from './utils';

const Privacy: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<boolean[]>([false, false, false, false, false, false, false, false]);
  const [toggleStatesNotification, setToggleStatesNotification] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

  const handleBtnPrivacy = (index: number) => {
    setToggleStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };
  const handleBtnNotification = (index: number) => {
    setToggleStatesNotification(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const renderToggleButton = (index: number) => (
    <div
      id={`btn-off-${index}`}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${toggleStates[index] ? 'bg-green-400' : 'bg-gray-300'}`}
      onClick={() => handleBtnPrivacy(index)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggleStates[index] ? 'translate-x-6' : ''}`}
      ></div>
    </div>
  );

  const renderToggleButtonNotification = (index: number) => (
    <div
      id={`btn-off-${index}`}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${toggleStatesNotification[index] ? 'bg-green-400' : 'bg-gray-300'}`}
      onClick={() => handleBtnNotification(index)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggleStatesNotification[index] ? 'translate-x-6' : ''}`}
      ></div>
    </div>
  );



  return (
    <div className='flex flex-col gap-2 text-base font-serif'>
      <h1 className='font-bold text-base'>Privacy Settings</h1>
      {privacyLabels.map((label, index) => (
        <div key={index} className='flex flex-row items-center'>
          {renderToggleButton(index)}
          <div className='ml-2'>
            <p>{label}</p>
          </div>
        </div>
      ))}
      <br />
      <h1 className='font-bold text-base'>Notification Settings</h1>
      {notificationLabels.map((label, index) => (
        <div key={index} className='flex flex-row items-center'>
          {renderToggleButtonNotification(index)}
          <div className='ml-2'>
            <p>{label}</p>
          </div>
        </div>
      ))}
      <br />
    </div>
  );
};

export default Privacy;
