import { isTasksClearedOrCounted } from "./app.js";

export const state = {
  taskCounter: 0,
};

export const updateTaskCounter = (e) => {
  const counterButton = document.querySelector(
    ".toolbar__count-individual-task"
  );
  if (!counterButton) return;

  //add a counter when task is clicked
  const section = document.querySelector(".toolbar");
  section.classList.add("toolbar--rendering");

  const taskItem = e.target.closest(".task-item");
  if (!taskItem) return;

  taskItem.classList.toggle("task-item--selected");

  if (taskItem.classList.contains("task-item--selected")) {
    state.taskCounter++;
  } else {
    state.taskCounter--;
  }
  counterButton.textContent = state.taskCounter;

  const tasksCounter = document.querySelector(".toolbar__count-total-tasks");
  if (!tasksCounter) return;

  const taskItems = document.querySelectorAll(".task-item");

  taskItems.forEach((task) => {
    task.classList.remove("task-item--mark-all-tasks");
    tasksCounter.textContent = "";
    isTasksClearedOrCounted.state = false;
  });
};
