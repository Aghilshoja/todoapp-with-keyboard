import { toDoApp } from "./app-state.js";

toDoApp.prototype.handleCopyTask = function (copiedTask) {
  const matchedTask = this.task.find((copied) => copied.id === copiedTask);
  return matchedTask;
};
