import { renderTasks } from "./app.js";
import { taskManager } from "./app.js";

export const filterSearchedTasks = (findSearch, clearButton) => {
  const search = findSearch.value.trim().toLowerCase();
  const filteredByFirstLetter = taskManager.filterSearchedTask(search);

  const tasksHolder = document.querySelector(".todo__tasks-holder");

  if (filteredByFirstLetter.length === 0) {
    tasksHolder.innerHTML = `<li class="no-searched-tasks">No tasks found</li>`;
    clearButton.classList.add("header__show-clear-value");
  } else {
    renderTasks(filteredByFirstLetter);
    clearButton.classList.add("header__show-clear-value");
  }
};
