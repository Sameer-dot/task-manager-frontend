"use client";
import { useState } from "react";
import Image from "next/image";

const BoardLink = ({ board, selected, handleBoardChange }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={
        "flex items-center w-full h-12 rounded-r-full pl-8 gap-4 cursor-pointer group " +
        (selected ? "bg-purple" : "bg-white hover:bg-purple-hover")
      }
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        handleBoardChange(board.id);
      }}
    >
      <div className="h-4 w-4 relative group-hover:scale-105 group-active:scale-95">
        <Image
          src={
            selected || isHovered
              ? "/icon-board-white.svg"
              : "/icon-board-gray.svg"
          }
          alt="board icon"
          fill
        />
      </div>
      <p
        className={
          "heading-md group-hover:scale-105 group-active:scale-95 " +
          (selected ? "text-white" : "text-medium-gray group-hover:text-white")
        }
      >
        {board.name}
      </p>
    </div>
  );
};

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [selectedBoard, setSelectedBoard] = useState("001");
  const boards = [
    {
      name: "Platform Launch",
      id: "001",
    },
    {
      name: "Marketing Plan",
      id: "002",
    },
    {
      name: "Roadmap",
      id: "003",
    },
  ];

  const handleBoardChange = (id) => {
    setSelectedBoard(id);
  };
  return (
    <div className="flex flex-col items-start justify-between h-full min-h-screen w-full max-w-[300px] bg-white py-8 pr-6 select-none">
      <div>
        <Image
          src={"/logo-dark.svg"}
          alt="company logo"
          className="ml-8 mb-14"
          width={150}
          height={25}
        />
        <div className="flex flex-col">
          <p className="txt-bold text-medium-gray mb-5 ml-8 tracking-[2.4px]">
            {"All Board(s)"}
          </p>
          {boards.map((board, index) => (
            <BoardLink
              key={`board-link-${index}`}
              board={board}
              handleBoardChange={handleBoardChange}
              selected={selectedBoard === board.id}
            />
          ))}
          <div
            className={
              "flex items-center w-full h-12 rounded-r-full pl-8 gap-4 cursor-pointer text-purple hover:scale-105 active:scale-95"
            }
          >
            <div className="h-4 w-4 relative">
              <Image src={"/icon-board-purple.svg"} alt="board icon" fill />
            </div>

            <p className="heading-md text-purple">+ Create New Board</p>
          </div>
        </div>
      </div>

      {/* Sidebar Footer */}
      <div className="flex flex-col px-6 w-full gap-2">
        <div className="flex items-center justify-center gap-6 rounded-md w-full py-[14px] bg-background-light">
          <div className="h-[18px] w-[18px] relative cursor-pointer">
            <Image src={"/icon-light-theme.svg"} alt="hide icon" fill />
          </div>

          <div className="h-[15px] w-[15px] relative cursor-pointer">
            <Image src={"/icon-dark-theme.svg"} alt="hide icon" fill />
          </div>
        </div>
        <div className="flex items-center cursor-pointer gap-4 select-none py-[14px]">
          <div className="h-4 w-[18px] relative">
            <Image src={"/icon-hide-sidebar.svg"} alt="hide icon" fill />
          </div>
          <p className="heading-md text-medium-gray">Hide Sidebar</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
