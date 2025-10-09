import { toDoApp } from "./app-state.js";

toDoApp.prototype.handleCopyTask = function (id) {
  const matchedTask = this.task.find((copied) => copied.id === id);
  return matchedTask;
};
