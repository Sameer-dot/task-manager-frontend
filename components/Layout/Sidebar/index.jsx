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

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const [theme, setTheme] = useState("dark");
  const [selectedBoard, setSelectedBoard] = useState("001");
  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
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
    <aside
      className={
        "flex flex-col items-start justify-between h-full min-h-screen fixed w-full max-w-[300px] bg-white py-8 select-none transition-transform duration-200 top-0 z-40 border-r border-light-lines " +
        (showSidebar ? "translate-x-0 relative" : "translate-x-[-300px] ")
      }
    >
      <div>
        {/* <Image
          src={"/logo-dark.svg"}
          alt="company logo"
          className="ml-8 mb-14"
          width={150}
          height={25}
        /> */}
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
      <div className="flex flex-col px-6 w-full gap-2 mt-auto mb-20">
        <div className="flex items-center justify-center gap-6 rounded-md w-full py-[14px] bg-background-light">
          <div className="h-[18px] w-[18px] relative cursor-pointer">
            <Image src={"/icon-light-theme.svg"} alt="hide icon" fill />
          </div>
          <div
            className={
              "flex items-center toggle-theme w-10 h-5 bg-purple rounded-xl relative cursor-pointer"
            }
            onClick={handleThemeChange}
          >
            <div
              className={
                "bg-white h-[14px] w-[14px] rounded-full mx-[3px] duration-200 " +
                (theme === "dark" ? "translate-x-5" : "translate-x-0")
              }
            />
          </div>

          <div className="h-[15px] w-[15px] relative cursor-pointer">
            <Image src={"/icon-dark-theme.svg"} alt="hide icon" fill />
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer gap-4 select-none py-[14px] hover:scale-105 active:scale-95"
          onClick={() => {
            setShowSidebar(false);
          }}
        >
          <div className="h-4 w-[18px] relative">
            <Image src={"/icon-hide-sidebar.svg"} alt="hide icon" fill />
          </div>
          <p className="heading-md text-medium-gray">Hide Sidebar</p>
        </div>
      </div>
      {/* <div
        className={
          "absolute right-[-64px] bottom-8 bg-purple flex items-center justify-center p-[22px] pl-[18px] rounded-r-full cursor-pointer transition-transform duration-200 group " +
          (showSidebar ? "translate-x-[-364px] " : "translate-x-0")
        }
        onClick={() => {
          setShowSidebar(true);
        }}
      >
        <div className="h-4 w-6 relative group-hover:scale-105 group-active:scale-95">
          <Image src={"/icon-show-sidebar.svg"} alt="eye icon" fill />
        </div>
      </div> */}
    </aside>
  );
};

export default Sidebar;
