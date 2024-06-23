"use client";
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div className="layout bg-background-light min-h-screen max-h-screen flex flex-col relative w-full">
      <Navbar showSidebar={showSidebar} />
      <div className="flex relative pt-[90px] transition-all duration-200">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
