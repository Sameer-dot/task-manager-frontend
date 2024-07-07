"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Image from "next/image";
const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="layout bg-background-light min-h-screen max-h-screen flex flex-col relative w-full overflow-y-hidden">
      <Navbar showSidebar={showSidebar} />
      <div className="flex relative transition-all duration-200">
        {showSidebar ? (
          <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        ) : (
          <div
            className={
              "absolute left-0 bottom-28 bg-purple flex items-center justify-center p-[22px] pl-[18px] rounded-r-full cursor-pointer transition-transform duration-200 group " +
              (showSidebar ? "translate-x-[-364px] " : "translate-x-0")
            }
            onClick={() => {
              setShowSidebar(true);
            }}
          >
            <div className="h-4 w-6 relative group-hover:scale-105 group-active:scale-95">
              <Image src={"/icon-show-sidebar.svg"} alt="eye icon" fill />
            </div>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default Layout;
