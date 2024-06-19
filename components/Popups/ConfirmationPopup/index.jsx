"use client";
import { useState } from "react";
import { Button } from "@/components/Button";
/**
 * ConfirmationPopup component to display a confirmation dialog.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} props.title - Title of the confirmation dialog
 * @param {string} props.message - Message or content of the confirmation dialog
 * @param {string} [props.confirmText='Confirm'] - Text for the confirmation button
 * @param {string} [props.cancelText='Cancel'] - Text for the cancel button
 * @param {boolean} props.isOpen - Boolean to control whether the confirmation popup is open
 * @param {function} props.onConfirm - Function to call when confirm button is clicked
 * @param {function} props.onCancel - Function to call when cancel button is clicked
 * @returns {JSX.Element} Rendered ConfirmationPopup component
 */
const ConfirmationPopup = ({
  title = "Delete this task?",
  message = "Are you sure you want to delete the ‘Build settings UI’ task and its subtasks? This action cannot be reversed.",
  confirmText = "Delete",
  cancelText = "Cancel",
  isOpen = true,
  onConfirm,
  onCancel,
}) => {
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);

  const handleConfirm = () => {
    onConfirm();
    setIsOpenInternal(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsOpenInternal(false);
  };

  // If isOpen changes from parent, update internal state accordingly
  if (isOpen !== isOpenInternal) {
    setIsOpenInternal(isOpen);
  }

  return isOpenInternal ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md p-8 shadow-lg max-w-[480px] w-full">
        <h2 className="heading-lg text-red mb-6">{title}</h2>
        <p className=" txt-md text-medium-gray mb-6">{message}</p>
        <div className="flex w-full items-center justify-between gap-4 mb-2">
          <Button onClick={handleCancel} intent="destructive" width="full">
            {confirmText}
          </Button>
          <Button onClick={handleConfirm} intent="secondary" width="full">
            {cancelText}
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default ConfirmationPopup;
