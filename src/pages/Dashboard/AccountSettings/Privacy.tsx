import React, { useState } from 'react';

const Privacy: React.FC = () => {
  const [toggleStates, setToggleStates] = useState<boolean[]>([false, false, false, false, false, false, false, false]);

  const handleToggle = (index: number) => {
    setToggleStates(prevStates => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  const renderToggleButton = (index: number) => (
    <div
      id={`btn-off-${index}`}
      className={`w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${toggleStates[index] ? 'bg-green-400' : 'bg-gray-300'}`}
      onClick={() => handleToggle(index)}
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${toggleStates[index] ? 'translate-x-6' : ''}`}
      ></div>
    </div>
  );

  return (
    <div className='flex flex-col gap-2 text-base font-serif'>
      <h1 className='font-bold text-base'>Privacy Settings</h1>
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index} className='flex flex-row items-center'>
          {renderToggleButton(index)}
          <div className='ml-2'>
            <p>Show my profile publicly</p>
          </div>
        </div>
      ))}
      <br />
      <h1 className='font-bold text-base'>Notification Settings</h1>
      <br />
      {Array.from({ length: 4 }, (_, index) => (
        <div key={index + 4} className='flex flex-row items-center'>
          {renderToggleButton(index + 4)}
          <div className='ml-2'>
            <p>Show my profile publicly</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Privacy;
