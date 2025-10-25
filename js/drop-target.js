import { renderTasks } from "./render-tasks.js";
import { taskManager } from "./app.js";

export const dropTarget = (e) => {
  const taskId = e.dataTransfer.getData("text");
  if (!taskId) return;
  const draggedTask = document.querySelector(`.task-item[data-id='${taskId}']`);
  const dropT = e.target.closest(".task-item");
  const tasksHolder = document.querySelector(".todo__tasks-holder");
  if (!dropT && !draggedTask && !tasksHolder) return;
  dropT.classList.remove("task-item--dragging");
  draggedTask.classList.remove("task-item--highlight");

  tasksHolder.insertBefore(draggedTask, dropT);

  const tasks = taskManager.getTasks();
  const draggedTaskIndex = tasks.findIndex((t) => t.id === Number(taskId));
  const droppedTaskIndex = tasks.findIndex(
    (t) => t.id === Number(dropT.dataset.id)
  );

  if (draggedTaskIndex === -1 && droppedTaskIndex === -1) return;

  // mutate the original array
  const [removedTask] = tasks.splice(draggedTaskIndex, 1);
  tasks.splice(droppedTaskIndex, 0, removedTask);

  taskManager.setTask(tasks);
  renderTasks();
};
