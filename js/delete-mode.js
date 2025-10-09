import { toDoApp } from "./app-state.js";

toDoApp.prototype.handleDeleteTask = function (id, selectedTasks) {
  if (this.task.length > 0) {
    this.task = this.task.filter(
      (selectedT) => !selectedTasks.includes(selectedT.id)
    );
  }
  this.task = this.task.filter((deletedTask) => deletedTask.id !== id);
};
