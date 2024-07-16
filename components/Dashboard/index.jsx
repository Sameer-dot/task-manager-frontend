"use client";
import { useState } from "react";
import Board from "../Board/index";
import Modal from "./Modal";

const Dashboard = () => {
  //const [modalsState, setModalsState] = useState(modalState);

  return (
    <main className="flex bg-background-light dark:bg-very-dark-gray w-full p-6 min-h-screen transition-all duration-200 overflow-y-auto">
      <Board />
      <Modal />
    </main>
  );
};

export default Dashboard;
