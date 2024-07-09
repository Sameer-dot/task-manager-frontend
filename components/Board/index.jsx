import { useMemo, useState } from "react";
import ColumnContainer from "./ColumnContainer";
import {
  DndContext,
  closestCenter,
  DragEndEvent,
  DragOverEvent,
  DragOverlay,
  DragStartEvent,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { createPortal } from "react-dom";
import TaskCard from "../common/TaskCard";
import { BoardData } from "@/assets/constants/dummyBoardData";

function Board() {
  const [boardState, setBoardState] = useState(BoardData);
  const [activatedBoard, setActivatedBoard] = useState(boardState[0]);
  const [activeDragTask, setActiveDragTask] = useState();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (e) => {
    const { active } = e;
    const activeTaskId = active.id;
    const activeTaskColumn = Number(active.data?.current?.sortable.containerId);
    setActiveDragTask(
      activatedBoard.columns
        .find((cols) => cols.id === activeTaskColumn)
        ?.tasks.find((task) => task.id === activeTaskId)
    );
  };

  const handleDragOver = (e) => {
    const { active, over } = e;
    const activeId = active.id;
    const overId = over?.id;
    const activeColumnId = Number(active.data?.current?.sortable?.containerId);
    const targetColumnId = Number(over?.data?.current?.sortable?.containerId);

    let activeColumn = activatedBoard.columns.find(
      (cols) => cols.id === activeColumnId
    );
    let targetColumn = activatedBoard.columns.find((cols) => {
      return !targetColumnId
        ? cols.id === Number(overId)
        : cols.id === targetColumnId;
    });
    const activeIndex = activeColumn?.tasks.findIndex(
      (task) => task.id === activeId
    );
    const overIndex = targetColumn?.tasks.findIndex(
      (task) => task.id === overId
    );
    if (!activeColumn || !targetColumn || activeColumn === targetColumn) return;
    let newIndex;
    setActivatedBoard((prev) => {
      let boardColumns = prev.columns;
      boardColumns = prev.columns.map((cols) => {
        const isBelowOverItem =
          e.over &&
          e.active.rect.current.translated &&
          e.active.rect.current.translated.top >
            e.over.rect.top + e.over.rect.height;
        const modifier = isBelowOverItem ? 1 : 0;
        if (cols.id === activeColumn?.id) {
          return {
            ...cols,
            tasks: cols.tasks.filter((task) => task.id !== activeId),
          };
        }
        if (cols.id === targetColumn?.id) {
          newIndex =
            overIndex >= 0
              ? overIndex + modifier
              : targetColumn.tasks.length + 1;
          return {
            ...cols,
            tasks: [
              ...cols.tasks.slice(0, newIndex),
              {
                ...activeColumn?.tasks[activeIndex || 0],
                status: targetColumn.name,
              },
              ...cols.tasks.slice(newIndex, targetColumn?.tasks.length),
            ],
          };
        }
        return cols;
      });
      return { ...prev, columns: boardColumns };
    });
  };

  const handleDragDrop = async (e) => {
    const { active, over } = e;
    const activeId = active.id;
    const overId = over?.id;
    const activeColumnId = Number(active.data?.current?.sortable?.containerId);
    const targetColumnId = Number(over?.data?.current?.sortable?.containerId);
    let activeColumn = activatedBoard.columns.find(
      (cols) => cols.id === activeColumnId
    );
    let targetColumn = activatedBoard.columns.find(
      (cols) => cols.id === targetColumnId
    );
    if (!activeColumn || !targetColumn || activeColumn !== targetColumn) return;
    const activeIndex = activeColumn?.tasks.findIndex(
      (task) => task.id === activeId
    );
    const overIndex = targetColumn?.tasks.findIndex(
      (task) => task.id === overId
    );
    if (activeIndex === overIndex) return;
    setActivatedBoard((prev) => {
      let boardColumns = prev.columns;
      boardColumns = prev.columns.map((cols) => {
        if (cols.id === activeColumn?.id) {
          return {
            ...cols,
            tasks: arrayMove(cols.tasks, activeIndex, overIndex),
          };
        }
        return cols;
      });
      return { ...prev, columns: boardColumns };
    });
    setActiveDragTask(null);
  };

  return (
    <div className="ml-6 mt-6 flex h-[80vh] w-full select-none snap-x overflow-x-auto scroll-smooth pb-[50px] overflow-y-hidden">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragOver={handleDragOver}
        onDragEnd={handleDragDrop}
      >
        {activatedBoard.columns.map((item, number) => (
          <ColumnContainer
            key={item.id}
            colName={item.name}
            tasks={item.tasks}
            taskQty={item.tasks.length}
            colId={item.id}
            colNum={number}
          />
        ))}
        <div className="flex justify-center items-center ml-6 min-w-[278px] mt-[3rem] h-[calc(80vh-60px)] rounded-md bg-light-custom-gradient dark:bg-dark-custom-gradient dark:text-medium-gray">
          <button className="heading-xl text-medium-gray hover:text-purple">
            + New Column
          </button>
        </div>
        <DragOverlay>
          {activeDragTask ? (
            <TaskCard
              taskName={activeDragTask.title}
              subTasks={activeDragTask.subtasks}
              taskId={activeDragTask.id}
              colId={activeDragTask.id}
            />
          ) : null}
        </DragOverlay>
      </DndContext>
    </div>
  );
}

export default Board;
