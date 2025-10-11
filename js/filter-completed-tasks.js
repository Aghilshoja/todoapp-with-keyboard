import { taskManager } from "./app.js";
import { renderTasks } from "./app.js";

export const filterAndRender = (filter, emptyMessage) => {
  const filteredTasks = taskManager.showCompletedTasks(filter);
  if (!filteredTasks) return;

  const tasksHolder = document.querySelector(".todo__tasks-holder");
  if (!tasksHolder) return;

  if (filteredTasks.length > 0) {
    renderTasks(filteredTasks);
  } else {
    tasksHolder.innerHTML = `<li class="no-completed-tasks">${emptyMessage}</li>`;
  }
};
