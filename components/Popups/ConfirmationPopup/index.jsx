import { useState } from "react";
import Popup from "..";
import { Button } from "@/components/common/Button";
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
const ConfirmationPopup = (props) => {
  const {
    title,
    message,
    confirmText,
    cancelText,
    isOpen,
    onConfirm,
    onCancel,
  } = props;
  const [isOpenInternal, setIsOpenInternal] = useState(isOpen);

  const handleConfirm = () => {
    onConfirm();
    setIsOpenInternal(false);
  };

  const handleCancel = () => {
    onCancel();
    setIsOpenInternal(false);
  };

  return (
    <Popup {...props} isOpen={isOpenInternal} handleCancel={handleCancel}>
      {/* Custom content as children */}
      <h2 className=" heading-lg text-red mb-6">{title}</h2>
      <p className="txt-md text-medium-gray mb-6">{message}</p>

      <div className="flex flex-col min-[480px]:flex-row items-center justify-center gap-4">
        <Button onClick={handleCancel} intent="destructive" width="full">
          {confirmText}
        </Button>
        <Button onClick={handleConfirm} intent="secondary" width="full">
          {cancelText}
        </Button>
      </div>
    </Popup>
  );
};

export default ConfirmationPopup;
