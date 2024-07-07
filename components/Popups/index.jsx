"use client";
import { useState, useRef, useEffect } from "react";
/**
 * Resuable component to display a popup.
 *
 * @component
 * @param {object} props - Component props
 * @param {boolean} props.isOpen - Boolean to control whether the confirmation popup is open
 * @param {function} props.handleCancel - Function to call when popup is closed by clicking outsite
 * @param {ReactNode} props.children - children to render inside the popup content area
 * @returns {JSX.Element} Rendered Popup component with children
 */
const Popup = (props) => {
  const { isOpen, handleCancel, children } = props;
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);
  const popupRef = useRef(null);

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
        className="bg-white dark:bg-dark-gray dark:bg-dark-gray rounded-md p-8 shadow-lg max-w-[480px] mx-4 w-full"
      >
        {children}
      </div>
    </div>
  ) : null;
};

export default Popup;
