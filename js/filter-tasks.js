import { toDoApp } from "./app-state.js";

toDoApp.prototype.filterTasks = function (taskFilter) {
  const filteredTasks = this.task.filter(taskFilter);
  return filteredTasks;
};
