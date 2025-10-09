import { toDoApp } from "./app-state.js";

toDoApp.prototype.addTask = function (text) {
  const newTask = {
    id: Date.now(),
    text,
    timestamp: new Date().toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };
  this.task.push(newTask);
  return newTask;
};
