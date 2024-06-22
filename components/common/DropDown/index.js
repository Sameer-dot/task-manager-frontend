"use client";
import { useState } from "react";
import Image from "next/image";
import TextInput from "../TextInput/index";

const DropDown = ({ label, value, options }) => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="flex flex-col w-full">
      {label && (
        <label
          // htmlFor={name}
          className="text-medium-gray mb-2 font-bold text-xs"
        >
          {label}
        </label>
      )}

      <div
        onClick={() => setOpenMenu(!openMenu)}
        className="relative flex select-none flex-col w-full"
      >
        <TextInput
          type="text"
          value={value}
          name={"task.status"}
          className="
            mt-2
            cursor-pointer
            select-none
            text-black
            duration-300
            focus:border-purple
            dark:text-white
          "
        />
        <Image
          src="/Arrow/icon-chevron-down.svg"
          width={9.4}
          height={4.7}
          alt="chev"
          className={`
            absolute 
            right-4 
            top-6 
            duration-300 
            stroke-purple
            ${openMenu ? "rotate-180" : "rotate-0"}
          `}
        />
        {openMenu && (
          <ul
            className="
              mt-[5px] 
              flex 
              h-auto 
              w-full 
              flex-col 
              rounded-lg 
              bg-background-light
              p-2
              text-body-l 
              dark:bg-very-dark-gray 
              dark:text-medium-gray
              sm:gap-y-2
              sm:p-4
            "
          >
            {options.map((option) => (
              <li
                key={option}
                onClick={() => null}
                className="
                      w-full
                      cursor-pointer
                      duration-300
                      hover:text-medium-gray
                      dark:hover:text-white
                    "
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default DropDown;
