import React from "react";
import Image from "next/image";
import Button from "@/components/common/Button";
const Navbar = ({ showSidebar }) => {
  return (
    <nav className="flex items-center fixed top-0 left-0 right-0 pl-6 pr-8 bg-white z-50 transition-all duration-200 border-b border-light-lines">
      <div
        className={
          "border-r border-light-lines py-8  " +
          (showSidebar ? "pr-36" : "pr-8")
        }
      >
        <Image
          src={"/logo-dark.svg"}
          alt="company logo"
          width={150}
          height={25}
        />
      </div>
      <div className="flex w-full pl-8 items-center justify-between">
        <p className="heading-xl text-black">Platform Launch</p>
        <div className="flex">
          <Button>+ Add New Task</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
