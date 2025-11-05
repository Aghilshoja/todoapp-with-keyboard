import { taskManager } from "./app.js";
import { renderTasks } from "./render-tasks.js";
  
const renderTasksByFilter = (filter, emptyMessage) => {
  const filteredTasks = taskManager.filterTasks(filter);
  if (!filteredTasks) return;

  const tasksHolder = document.querySelector(".todo__tasks-holder");
  if (!tasksHolder) return;

  if (filteredTasks.length > 0) {
    renderTasks(filteredTasks);
  } else {
    tasksHolder.innerHTML = `${emptyMessage}`;
  }
};

 export const renderCompletedTasks = () =>
  renderTasksByFilter((task) => task.isCompleted,   `<li class="no-completed-tasks">no completed tasks found</li>`)

export const showEditedTasks = () =>
  renderTasksByFilter(
    (task) => task.showEditedTasks,
    `<li class="no-edited-tasks">no edited tasks found</li>`
  ); 