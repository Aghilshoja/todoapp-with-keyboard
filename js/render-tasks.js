import { saveTasks } from "./save-tasks-to-local-storage.js";
import { taskManager } from "./app.js";
import { createTaskElement } from "./build-UI.js";

export const renderTasks = (filteredTasks) => {
    const taskList = document.querySelector(".todo__tasks-holder");
    if (!taskList) return;
  taskList.textContent = ""; // clear the task list so they do not get duplicated after adding a task

  const tasks = filteredTasks || taskManager.getTasks();
  const sortedTask = [...tasks].sort((a, b) => {
    return b.isCompleted - a.isCompleted;
  });
  if (!tasks) return;
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="no-task-added">No tasks added</li>`;
    saveTasks();
    return;
  }
  sortedTask.forEach((task) => taskList.prepend(createTaskElement(task)));
  saveTasks();
};