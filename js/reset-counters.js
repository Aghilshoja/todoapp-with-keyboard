import { state } from "./count-individual-task.js";

export const resetCounters = () => {
  const individualCounter = document.querySelector(
    ".toolbar__count-individual-task"
  );

  state.taskCounter = 0;
  individualCounter.textContent = "";

  const taskCounter = document.querySelector(".toolbar__count-total-tasks");
  if (!taskCounter) return;

  const taskItems = document.querySelectorAll(".task-item");

  taskCounter.textContent = "";
};
