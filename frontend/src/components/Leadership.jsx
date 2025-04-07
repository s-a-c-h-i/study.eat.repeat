import React from 'react';

const Leaderboard = () => {
  // Sample data – replace with real DB/API data
  const students = [
    { name: "Aryan Singh", branch: "CSE", points: 1200 },
    { name: "Priya Verma", branch: "ECE", points: 1150 },
    { name: "Rahul Sharma", branch: "ME", points: 980 },
    { name: "Sneha Gupta", branch: "IT", points: 890 },
    { name: "Aman Raj", branch: "EEE", points: 820 },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-4">🏆 Leadership Board</h1>
      <p className="text-center text-lg text-gray-300 mb-8">
        These are the top brains of MNNIT. Compete with them!
      </p>

      <div className="overflow-x-auto max-w-4xl mx-auto">
        <table className="min-w-full table-auto border-collapse rounded-lg overflow-hidden">
          <thead className="bg-gray-700 text-white">
            <tr>
              <th className="px-6 py-3 text-left">Name</th>
              <th className="px-6 py-3 text-left">Branch</th>
              <th className="px-6 py-3 text-left">Points</th>
            </tr>
          </thead>
          <tbody className="bg-gray-800">
            {students.map((student, index) => (
              <tr key={index} className="border-b border-gray-700 hover:bg-gray-700/50 transition">
                <td className="px-6 py-4">{student.name}</td>
                <td className="px-6 py-4">{student.branch}</td>
                <td className="px-6 py-4 font-semibold text-green-400">{student.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
