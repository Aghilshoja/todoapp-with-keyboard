import { toDoApp } from "./app-state.js";

toDoApp.prototype.showCompletedTasks = function (completedTask) {
  const filteredTaskss = this.task.filter(completedTask);
  return filteredTaskss;
};
