import React from 'react';

// Define the type for the 'info' prop
type GouferInfo = {
    id:number
  Goufername: string;
  text: string;
  Task: number;
  City: string;
  Rate: string;
  Shopimage: string;
  Gouferimage: string;
};

const GouferCard: React.FC<{ info: GouferInfo }> = ({ info }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <img className="w-20 h-20 rounded-full mx-auto mb-4" src={info.Gouferimage} alt={info.Goufername} />
      <h2 className="text-lg font-bold text-center">{info.Goufername}</h2>
      <p className="text-sm text-gray-600 text-center mb-2">{info.text}</p>
      <div className="flex items-center justify-center space-x-2">
        <p>{info.Task} Tasks</p>
        <p>{info.City}</p>
        <p>{info.Rate}</p>
      </div>
    </div>
  );
};

export default GouferCard;
