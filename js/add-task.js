import { toDoApp } from "./app-state.js";

toDoApp.prototype.addTask = function (text) {
  const newTask = { id: Date.now(), text };
  this.task.push(newTask);
  return newTask;
};
