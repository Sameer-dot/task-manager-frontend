"use client"
import { useState } from "react";
import Popup from ".."; // Adjust the import path as per your project structure
import Input from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import Image from "next/image";
import DropDown from "@/components/common/DropDown";
/**
 * Popup component to display a Create or Edit Form of a Board.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} props.mode - "add" / "edit"
 * @param {object} props.board - Board Object
 * @param {function} props.handleBoardUpdate - Funtion to update Board
 * @param {boolean} props.isOpen - Boolean to control whether the confirmation popup is open
 * @param {function} props.onConfirm - Function to call when confirm button is clicked
 * @param {function} props.onCancel - Function to call when cancel button is clicked
 * @returns {JSX.Element} Rendered ConfirmationPopup component
 */
const AddBoardPopup = (props) => {
  const { mode, board, handleBoardUpdate, isOpen, onConfirm, onCancel } = props;
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);

  const handleConfirm = () => {
    onConfirm();
    setIsOpenInternal(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsOpenInternal(false);
  };

  const handleDeleteColumn = () => {};

  return (
    <Popup {...props} isOpen={isOpenInternal} handleCancel={handleCancel}>
      <h2 className=" heading-lg text-black dark:text-white mb-6">
        {mode === "create" ? "Add New Board" : "Edit Board"}
      </h2>
      <div className="flex flex-col gap-6">
        <Input label={"Name"} value={board.name} type={"text"} />
        <div className="flex flex-col gap-3">
          {board.columns.map((column, index) => (
            <div
              key={`column-input-${column.name}`}
              className="flex gap-4 items-center"
            >
              <Input
                label={index === 0 ? "Board Columns" : ""}
                value={column.name}
                type={"text"}
              />
              <Image
                src="/icon-cross.svg"
                alt="cross icon"
                width={15}
                height={15}
                className={
                  "hover:scale-110 cursor-pointer " +
                  (index === 0 ? "mt-6" : "")
                }
              />
            </div>
          ))}
          <Button width="full" intent="secondary" size="small">
            + Add New Column
          </Button>
        </div>

        <Button width="full" size="small">
          {mode === "create" ? "Create New Board" : "Save Changes"}
        </Button>
      </div>
    </Popup>
  );
};

export default AddBoardPopup;
