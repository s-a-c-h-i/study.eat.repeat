import React from 'react';
 
const PointsPage = ({ totalPoints }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Total Points Display */}
      <div className="text-4xl font-bold text-center mb-6 text-green-700">
        Total Points: {totalPoints}
      </div>

      {/* Info Text */}
      <div className="text-center max-w-md text-gray-700 mb-6 text-lg">
        500 coins = 50 rupees, valid at Cafe 96, Yamuna and Gyan Stationary. Redeem now!!
      </div>

      {/* Redeem Button */}
      <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-lg rounded-full">
        -50 Points
      </button> 
    </div>
  );
};

export default PointsPage;
