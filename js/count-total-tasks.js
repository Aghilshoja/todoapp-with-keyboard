import { state } from "./count-individual-task.js";

export const countTotalTasks = () => {
  const taskItemsLebgth = document.querySelectorAll(".task-item").length;

  const markedTasks = document.querySelectorAll(".task-item");

  markedTasks.forEach((task) => {
    task.classList.add("task-item--mark-all-tasks");
  });

  const taskCounter = document.querySelector(".toolbar__count-individual-task");
  if (!taskCounter) return;

  const taskItem = document.querySelectorAll(".task-item");
  if (!taskItem) return;

  taskItem.forEach((task) => {
    task.classList.remove("task-item--selected");
    state.taskCounter = 0;
    taskCounter.textContent = "";
  });

  const allTasksCounter = document.querySelector(".toolbar__count-total-tasks");
  if (!allTasksCounter) return;
  allTasksCounter.textContent = taskItemsLebgth;
};
