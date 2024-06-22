import { useState } from "react";
import Popup from ".."; // Adjust the import path as per your project structure
import Input from "@/components/common/TextInput";
import Button from "@/components/common/Button";
import TextArea from "@/components/common/TextArea";
import Image from "next/image";
import DropDown from "@/components/common/DropDown";
/**
 * Popup component to display a Create or Edit Form of a Task.
 *
 * @component
 * @param {object} props - Component props
 * @param {string} props.mode - create / edit
 * @param {boolean} props.isOpen - Boolean to control whether the confirmation popup is open
 * @param {function} props.onConfirm - Function to call when confirm button is clicked
 * @param {function} props.onCancel - Function to call when cancel button is clicked
 * @returns {JSX.Element} Rendered ConfirmationPopup component
 */
const CreateTaskPopup = (props) => {
  const {
    mode,
    task = {
      title: "",
      description: "",
      subtasks: [
        {
          name: "",
        },
        {
          name: "",
        },
        {
          name: "",
        },
      ],
      status: "Doing",
    },
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
      <h2 className=" heading-lg text-black mb-6">
        {mode === "create" ? "Add New Task" : "Edit Task"}
      </h2>
      <div className="flex flex-col gap-6">
        <Input label={"Title"} value={task.title} type={"text"} />
        <TextArea
          label={"Description"}
          value={task.description}
          type={"text"}
        />
        <div className="flex flex-col gap-3">
          {task.subtasks.map((subtask, index) => (
            <div className="flex gap-4 items-center">
              <Input
                label={index === 0 ? "Subtasks" : ""}
                value={task.title}
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
          <Button width="full" intent="secondary">
            + Add New Subtask
          </Button>
        </div>
        <DropDown label="status" value={task.status} options={["To Do", "Doing", "Done"]} />

        <Button width="full" size="small">
          {mode === "create" ? "Create Task" : "Save Changes"}
        </Button>
      </div>
    </Popup>
  );
};

export default CreateTaskPopup;
