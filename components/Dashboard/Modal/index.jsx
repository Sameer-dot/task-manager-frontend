import AddBoardPopup from "@/components/Popups/AddBoardPopup";
import CreateTaskPopup from "@/components/Popups/CreateTaskPopup";
import ViewTaskPopup from "@/components/Popups/ViewTaskPopup";
import ConfirmationPopup from "@/components/Popups/ConfirmationPopup/index";
import { useModalsContext } from "@/context/ModalsContext";
import { ModalState } from "@/assets/constants/modalStates";

const Modal = () => {
  const { setModalState, modalState } = useModalsContext();
  const activeModal = modalState.view;

  return (
    <>
      {activeModal === ModalState.viewTask && <ViewTaskPopup isOpen={modalState.open} />}
      {activeModal === ModalState.addTask && (
        <CreateTaskPopup isOpen={modalState.open} />
      )}
      {activeModal === ModalState.addBoard && <AddBoardPopup isOpen={modalState.open} />}
      {activeModal === ModalState.deleteBoard && (
        <ConfirmationPopup isOpen={modalState.open} />
      )}
    </>
  );
};

export default Modal;
