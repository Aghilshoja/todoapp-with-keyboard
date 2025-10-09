import { toDoApp } from "./app-state.js";
import { stateOfEdited } from "./app.js";

toDoApp.prototype.addTask = function (text) {
  const newTask = {
    id: Date.now(),
    text,
    timestamp: new Date().toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    isCompleted: false,
  };
  if (stateOfEdited.isEdited) {
    const matchedTask = this.task.find(
      (edit) => edit.id === stateOfEdited.isEdited
    );
    if (matchedTask) matchedTask.text = text + " (edited)";
    stateOfEdited.isEdited = null;
  } else {
    this.task.push(newTask);
  }

  return newTask;
};
