import AddBoardPopup from "@/components/Popups/AddBoardPopup";
import CreateTaskPopup from "@/components/Popups/CreateTaskPopup";
import ViewTaskPopup from "@/components/Popups/ViewTaskPopup";
import ConfirmationPopup from "@/components/Popups/ConfirmationPopup/index";
import { useModalsContext } from "@/context/ModalsContext";
import { ModalState } from "@/assets/constants/modalStates";

const Modal = () => {
  const { modalState, setModalState } = useModalsContext();
  const activeModal = modalState.view;

  return (
    <>
      {activeModal === ModalState.viewTask && (
        <ViewTaskPopup
          isOpen={modalState.open}
          onCancel={() => {
            setModalState({
              open: false,
              view: "",
            });
            title = "Nice Dear"
            description = "hui huiii"
          }}
        />
      )}
      {((activeModal === ModalState.addTask) ||
        (activeModal === ModalState.editTask)) && (
          <CreateTaskPopup
            mode={modalState.mode}
            isOpen={modalState.open}
            onCancel={() => {
              setModalState({
                mode: "",
                open: false,
                view: "",
              });
            }}
          />
        )}
      {activeModal === ModalState.addBoard && (
        <AddBoardPopup
          mode={modalState.mode}
          isOpen={modalState.open}
          onCancel={() => {
            setModalState({
              mode: "",
              open: false,
              view: "",
            });
          }}
        />
      )}
      {activeModal === ModalState.deleteBoard && (
        <ConfirmationPopup isOpen={modalState.open} />
      )}
    </>
  );
};

export default Modal;
