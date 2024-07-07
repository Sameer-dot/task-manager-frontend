const TaskCard = (props) => {
  const {
    task = {
      title:
        "Create paper prototypes and conduct 10 usability tests with potential customers",
      completeTask: 2,
      totalTasks: 5,
    },
  } = props;
  return (
    <div className="w-72 px-4 py-6 bg-white dark:bg-dark-gray h-fit rounded-lg card-shadow">
      <p className="heading-md text-black dark:text-white mb-2">{task.title}</p>
      <p className="txt-md text-medium-gray ">{`${task.completeTask} of ${task.totalTasks} subtasks`}</p>
    </div>
  );
};

export default TaskCard;
