"use client";
import Image from "next/image";
import { useState } from "react";
import Popup from "../index";
import Button from "@/components/common/Button";
import CheckBoxInput from "@/components/common/CheckBox";
import DropDown from "@/components/common/DropDown";

const subtasks = [
  "Research competitor pricing and business models",
  "Outline a business model that works for our solution",
];

const options = ["Todo", "Doing", "Done"];

const ViewTaskPopup = (props) => {
  const { title, description, confirmText, cancelText, isOpen, onCancel } =
    props;
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);
  const [currentStatus, setCurrentStatus] = useState("");
  const [openMenu, setOpenMenu] = useState(false);
  const [checkedStates, setCheckedStates] = useState(
    subtasks.reduce((acc, task) => {
      acc[task] = false;
      return acc;
    }, {})
  );

  const handleCancel = () => {
    onCancel();
    setIsOpenInternal(false);
  };

  const handleCheckboxChange = (task) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [task]: !prevState[task],
    }));
  };

  const handleStatusChange = (value) => {
    setCurrentStatus(value);
  };

  const getSelectedCount = () => {
    return Object.values(checkedStates).filter(Boolean).length;
  };

  const handleTaskEdit = () => {
    console.log("task edit");
  };

  const handleTaskDelete = () => {
    console.log("task delete");
  };

  return (
    <Popup {...props} isOpen={isOpenInternal} handleCancel={handleCancel}>
      {/* Custom content as children */}

      <div className="flex justify-between items-center mb-6">
        <h2 className=" heading-lg text-black dark:text-white dark:text-white w-[387px]">
          {title}
        </h2>
        <div
          onClick={() => setOpenMenu(!openMenu)}
          className="cursor-pointer relative"
        >
          <Image
            alt="menu Icon"
            src="/icon-vertical-ellipsis.svg"
            width={4.6}
            height={20}
          />
          {openMenu && (
            <div className="bg-white dark:bg-dark-gray dark:bg-very-dark-gray absolute top-[31px] left-[-75px] w-[192px] h-[94px] rounded-lg flex flex-col items-start justify-center pl-4 txt-md">
              <p className="text-medium-gray mb-2" onClick={handleTaskEdit}>
                Edit Task
              </p>
              <p className="text-red" onClick={handleTaskDelete}>
                Delete Task
              </p>
            </div>
          )}
        </div>
      </div>
      <p className="txt-md text-medium-gray mb-6">{description}</p>

      <div className="">
        <h5 className="mb-4 txt-bold text-medium-gray">
          Subtasks ({getSelectedCount()} of {subtasks.length})
        </h5>
        {subtasks.map((task, index) => (
          <CheckBoxInput
            key={index + "_" + task}
            value={task}
            handleCheckboxChange={() => handleCheckboxChange(task)}
            isChecked={checkedStates[task]}
            style={{
              marginBottom: index !== subtasks.length - 1 ? "8px" : "0",
            }}
          />
        ))}
        <DropDown
          label="Current Status"
          options={options}
          value={currentStatus}
          handleStatusChange={handleStatusChange}
        />
      </div>
    </Popup>
  );
};

export default ViewTaskPopup;
