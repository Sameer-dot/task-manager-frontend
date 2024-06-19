import Popup from ".."; // Adjust the import path as per your project structure

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
  const { title, message } = props;
  return (
    <Popup {...props}>
      {/* Custom content as children */}
      <h2 className=" heading-lg text-red mb-6">{title}</h2>
      <p className="txt-md text-medium-gray mb-6">{message}</p>
    </Popup>
  );
};

export default ConfirmationPopup;
