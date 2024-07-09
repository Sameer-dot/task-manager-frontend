"use client"
import Board from "../Board/index";
const Dashboard = () => {
  return (
    <main className="flex bg-background-light dark:bg-very-dark-gray w-full p-6 min-h-screen transition-all duration-200 overflow-y-auto">
      <Board />
    </main>
  );
};

export default Dashboard;
