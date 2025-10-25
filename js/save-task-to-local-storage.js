import { taskManager } from "./app.js";
import { renderTasks } from "./app.js";

export const saveTasks = () => {
  const savedTasks = taskManager.getTasks();
  localStorage.setItem("todo", JSON.stringify(savedTasks));
};

 export const loadTasks = () => {
  try {
    const loadedTasks = JSON.parse(localStorage.getItem("todo"));
    if (Array.isArray(loadedTasks)) taskManager.setTask(loadedTasks);
  } catch (error) {
    console.log("catch the error", error);
  }
  renderTasks();
};