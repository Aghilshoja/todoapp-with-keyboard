export const clearAllTasks = (tasks) => {
  const tasksId = Array.from(document.querySelectorAll(".task-item")).map(
    (task) => Number(task.dataset.id)
  );

  const totalTasksCounter = document.querySelector(
    ".toolbar__count-total-tasks"
  );
  if (!totalTasksCounter) return;
  totalTasksCounter.textContent = "";

  if (tasksId.length > 0) {
    tasks = tasks.filter((task) => !tasksId.includes(task.id));
  }
  const markedTasks = document.querySelectorAll(".task-item");

  markedTasks.forEach((task) => {
    task.classList.remove("mark-all-tasks");
  });
  return tasks;
};
