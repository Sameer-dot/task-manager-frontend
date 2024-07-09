import { useMemo, useState, useEffect } from "react";
import { useDroppable } from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import TaskCard from "../../common/TaskCard";
import { CSS } from "@dnd-kit/utilities";

function ColumnContainer({colName, tasks, taskQty, colId, colNum }) {
  const [dotColor, setDotColor] = useState("bg-[#67E2AE]");
  const [editMode, setEditMode] = useState(false);

  const taskListId = useMemo(() => {
    return tasks?.length ? tasks.map((task) => task.id) : [0];
  }, [tasks]);

  useEffect(() => {
    const purpleDotId = [1, 4, 7, 10, 13];
    if (colNum % 3 === 0 || colNum === 0) {
      setDotColor("bg-[#49C4E5]");
      return;
    }
    if (purpleDotId.includes(colNum)) {
      setDotColor("bg-[#8471F2]");
      return;
    }
    setDotColor("bg-[#67E2AE]");
  }, [colNum]);

  const { setNodeRef } = useDroppable({ id: colId.toString() });
  const { transform, transition } = useSortable({ id: colId });

  return (
    <div className="pl-6 touch-none self-start h-full">
      <SortableContext
        id={colId.toString()}
        items={taskListId}
        strategy={verticalListSortingStrategy}
      >
        <div className="flex items-center pb-6 w-[280px]" ref={setNodeRef}>
          <span
            className={`${dotColor} w-[15px] aspect-square rounded-full mr-3`}
          ></span>
          <h2 className="text-medium-gray text-600">
            {colName} ({taskQty})
          </h2>
        </div>
        <div className="flex flex-col overflow-y-auto max-h-[calc(80vh-60px)]">
          {" "}
          {tasks.map((task) => (
            <div key={task.id}>
              <TaskCard
                taskName={task.title}
                subTasks={task.subtasks}
                taskId={task.id}
                colId={colId}
              />
            </div>
          ))}
        </div>
      </SortableContext>
    </div>
  );
}

export default ColumnContainer;
