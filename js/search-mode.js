import { toDoApp } from "./app-state.js";

toDoApp.prototype.filterSearchedTask = function (search) {
  const filteredByFirstLetter = this.task.filter((task) => {
    return (
      task.text.toLowerCase().startsWith(search) ||
      task.text.toLowerCase().includes(search)
    );
  });
  return filteredByFirstLetter;
};
