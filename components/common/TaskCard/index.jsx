import { useState, useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({taskName, subTasks, taskId, colId }) => {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [completedTasks, setCompletedTasks] = useState(0);

  useEffect(() => {
    setCompletedTasks(subTasks.filter((item) => item.isCompleted).length);
  }, [subTasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: taskId });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="bg-white dark:bg-dark-gray w-[280px] cursor-pointer touch-none
      shadow-[0px_4px_6px_rgba(54,_78,_126,_0.101545)]
      z-[-30] mb-5 rounded-lg px-4 py-[1.4375rem]"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      //onClick={toggleEditMode}
      onMouseEnter={() => setMouseIsOver(true)}
      onMouseLeave={() => setMouseIsOver(false)}
    >
      <p className="heading-md text-black dark:text-white mb-2 select-none">
        {taskName}
      </p>
      <p className="txt-md text-medium-gray select-none">{`${completedTasks} of ${subTasks?.length} subtasks`}</p>
    </div>
  );
};

export default TaskCard;
