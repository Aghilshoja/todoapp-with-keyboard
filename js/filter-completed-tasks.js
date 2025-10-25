import { taskManager } from "./app.js";
import { renderTasks } from "./render-tasks.js";
  
const filterAndRender = (filter, emptyMessage) => {
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

 export const renderCompletedTasks = () =>
  filterAndRender((t) => t.isCompleted, "no completed tasks found");

export const showEditedTasks = () =>
  filterAndRender(
    (editedTasks) => editedTasks.showEditedTasks,
    "no edited tasks found"
  ); 