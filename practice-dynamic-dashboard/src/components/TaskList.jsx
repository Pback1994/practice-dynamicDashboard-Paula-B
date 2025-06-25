export default function Tasks() {
  const task = [
    { id: 1, taskName: "Complete Profile", isComplete: true },
    { id: 2, taskName: "Update Profile", isComplete: false },
  ];

  return (
    <div>
      <ul>
        {task.map((tasks) => (
          <li key={tasks.id}>
            {tasks.id}. {tasks.taskName} -{" "}
            {tasks.isComplete ? "Completed! \u2713" : "Not Complete! \u274C"}
          </li>
        ))}
      </ul>
    </div>
  );
}
