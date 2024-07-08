import { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = (props) => {
  const {
    task = {
      // title:
      //   "Create paper prototypes and conduct 10 usability tests with potential customers",
      // completeTask: 2,
      // totalTasks: 5,
      task,
      deleteTask,
      updateTask,
    },
  } = props;

  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      // <div
      //   ref={setNodeRef}
      //   style={style}
      //   className="
      //   opacity-30
      // bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl border-2 border-rose-500  cursor-grab relative
      // "
      // />
      <div
        className="w-72 px-4 py-6 bg-white dark:bg-dark-gray h-fit rounded-lg card-shadow"
        ref={setNodeRef}
        style={style}
      >
        <p className="heading-md text-black dark:text-white mb-2">
          {task.title}
        </p>
        <p className="txt-md text-medium-gray ">{`${task.completeTask} of ${task.totalTasks} subtasks`}</p>
      </div>
    );
  }

  // if (editMode) {
  //   return (
  //     <div
  //       ref={setNodeRef}
  //       style={style}
  //       {...attributes}
  //       {...listeners}
  //       className="bg-mainBackgroundColor p-2.5 h-[100px] min-h-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:ring-rose-500 cursor-grab relative"
  //     >
  //       <textarea
  //         className="
  //       h-[90%]
  //       w-full resize-none border-none rounded bg-transparent text-white focus:outline-none
  //       "
  //         value={task.content}
  //         autoFocus
  //         placeholder="Task content here"
  //         onBlur={toggleEditMode}
  //         onKeyDown={(e) => {
  //           if (e.key === "Enter" && e.shiftKey) {
  //             toggleEditMode();
  //           }
  //         }}
  //         onChange={(e) => updateTask(task.id, e.target.value)}
  //       />
  //     </div>
  //   );
  // }

  return (
    <div
      className="w-72 px-4 py-6 bg-white dark:bg-dark-gray h-fit rounded-lg card-shadow cursor-grab"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="heading-md text-black dark:text-white mb-2 select-none">{task.title}</p>
      <p className="txt-md text-medium-gray select-none">{`${task.completeTask} of ${task.totalTasks} subtasks`}</p>
    </div>
  );
};

export default TaskCard;
