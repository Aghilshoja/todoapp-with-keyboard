import { toDoApp } from "./app-state.js";

toDoApp.prototype.getTasks = function () {
  return this.task;
};
