"use client";
import { useState, useRef, useEffect } from "react";
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
 * @param {ReactNode} props.children - children to render inside the popup content area
 * @returns {JSX.Element} Rendered ConfirmationPopup component
 */
const Popup = (props) => {
  const { confirmText, cancelText, isOpen, onConfirm, onCancel, children } =
    props;
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);
  const popupRef = useRef(null);

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        handleCancel();
      }
    };

    if (isOpenInternal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpenInternal]);
  return isOpenInternal ? (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        ref={popupRef}
        className="bg-white dark:bg-dark-gray rounded-md p-8 shadow-lg max-w-[480px] mx-4 w-full"
      >
        {children}

        <div className="flex flex-col min-[480px]:flex-row items-center justify-center gap-4">
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

export default Popup;
