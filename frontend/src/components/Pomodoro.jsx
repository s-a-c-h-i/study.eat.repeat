import React, { useState, useEffect } from "react";

const PomodoroTimer = () => {
  const [isWorking, setIsWorking] = useState(true); // Work mode or break mode
  const [timeLeft, setTimeLeft] = useState(25 * 60); // In seconds
  const [pomodoroCount, setPomodoroCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev === 0) {
          // Switch between work & break
          if (isWorking) {
            setIsWorking(false);
            return 5 * 60; // Break time
          } else {
            setIsWorking(true);
            setPomodoroCount(count => count + 1);
            return 25 * 60; // Restart work time
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isWorking]);

  const formatTime = (seconds) => {
    const m = String(Math.floor(seconds / 60)).padStart(2, '0');
    const s = String(seconds % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white gap-6">
      <h1 className="text-4xl font-bold">Pomodoro Timer</h1>
      <div className="text-7xl font-mono">
        {formatTime(timeLeft)}
      </div>
      <div className="text-xl">
        {isWorking ? "Work Time 💻" : "Break Time ☕"}
      </div>
      <div className="text-lg mt-4">
        Pomodoros Completed: <span className="font-bold">{pomodoroCount}</span>
      </div>
    </div>
  );
};

export default PomodoroTimer;
