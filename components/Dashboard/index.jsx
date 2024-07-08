"use client"
import Board from "../Board/index";

const Dashboard = () => {
  return (
    <main className="flex bg-background-light w-full p-6 min-h-screen transition-all duration-200 overflow-y-auto">
      {/* <p className="heading-lg text-purple"> Dashboard</p> */}
      <Board />
    </main>
  );
};

export default Dashboard;
