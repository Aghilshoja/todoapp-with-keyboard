import { toDoApp } from "./app-state.js";

toDoApp.prototype.handleCompletedTask = function (id) {
  const matchedTask = this.task.find(
    (completedTask) => completedTask.id === id
  );
  return matchedTask;
};
