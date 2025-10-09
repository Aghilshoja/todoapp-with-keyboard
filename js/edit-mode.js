import { toDoApp } from "./app-state.js";

toDoApp.prototype.handleEditTask = function (id) {
  const editedTask = this.task.find((edited) => edited.id === id);
  return editedTask;
};
