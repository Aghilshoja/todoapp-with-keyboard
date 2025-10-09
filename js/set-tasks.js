import { toDoApp } from "./app-state.js";

toDoApp.prototype.setTask = function (task) {
  this.task = task;
};
