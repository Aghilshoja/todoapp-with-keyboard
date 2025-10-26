import { toDoApp } from "./app-state.js";
import { showToolbar } from "./show-toolbar.js";
import { hideToolbar } from "./hide-toolbar.js";
import { resetCounters } from "./reset-counters.js";
import { updateTaskCounter } from "./count-individual-task.js";
import { completeTask } from "./complete-task.js";
import { replaceHeaderWithSearch } from "./replace-header-with-search.js";
import { toggleDropDownList } from "./dropdown-list.js";
import { dragStart } from "./drag-start.js";
import { dragOver } from "./drag-over.js";
import { dropTarget } from "./drop-target.js";
import { draggedEnter } from "./drag-enter.js";
import { draggedEndTask } from "./draggend.js";
import { draggedLeave } from "./dragged-leave.js";
import { submitTasks } from "./submit-tasks.js";
import { setContentEditable } from "./input-mode-controller.js";
import { loadTasks } from "./save-tasks-to-local-storage.js";
import { renderTasks } from "./render-tasks.js";
import { loadDarkMode } from "./save-dark-mode-to-loacal-storage.js";
import { showEditedTasks } from "./filter-completed-tasks.js";
import { renderCompletedTasks } from "./filter-completed-tasks.js";
import { toggleAndClearTasks } from "./toggle-and-clear-tasks.js";
import { performEditTask } from "./perform-edit-task.js";
import { performDeleteTasks } from "./handle-delete-tasks.js";
import { performCopyTask } from "./perform-copy-task.js";
import { submitTaskOnEnter } from "./add-task-on-enter-key.js";
import { cancelEdit } from "./cancel-edit-task.js";
import "./add-task.js";
import "./get-tasks.js";
import "./delete-mode.js";
import "./set-tasks.js";
import "./edit-mode.js";
import "./copy-mode.js";
import "./completed-mode.js";
import "./search-mode.js";
import "./show-completed-tasks-mode.js";

export const taskManager = new toDoApp();

const taskList = document.querySelector(".todo__tasks-holder");

const searchBox = {
  isSearchBox: null,
};

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  loadDarkMode();
  setContentEditable(searchBox.isSearchBox);
});

window.addEventListener("resize", () =>
  setContentEditable(searchBox.isSearchBox)
);

const taskInput = document.querySelector(".form-section__task-input");
const span = document.querySelector('.span')
taskInput.addEventListener('keydown', () => {
  span.textContent = ''
})

taskList.addEventListener("dragstart", (e) => dragStart(e));
taskList.addEventListener("dragover", (e) => dragOver(e));
taskList.addEventListener("dragenter", (e) => draggedEnter(e));
taskList.addEventListener("dragleave", (e) => draggedLeave(e));
taskList.addEventListener("drop", (e) => dropTarget(e));
taskList.addEventListener("dragend", (e) => draggedEndTask(e));

taskInput.addEventListener('keydown', (e) => {
 submitTaskOnEnter(e)
})

document.body.addEventListener("click", (e) => {
  const dropdownList = document.querySelector(".dropdown-list");
  if (dropdownList) {
    dropdownList.classList.remove("dropdown-list--render");
  }
  if (e.target.closest(".form-section__submit-task")) {
    submitTasks(e);
    return;
  }
  if (e.target.closest(".action-buttons__backarrow")) {
    hideToolbar();
    resetCounters();
    return;
  }
  if (e.target.closest(".action-buttons__handle-delete")) {
    performDeleteTasks(e);
    return;
  }
  if (e.target.closest(".toolbar__clear-all-tasks")) {
    toggleAndClearTasks();
  }
  if (e.target.closest(".task-item")) {
    updateTaskCounter(e);
    showToolbar(e);
  }
  if (e.target.closest(".wrapper__is-completed")) {
    completeTask(e);
    return;
  }
  if (e.target.closest(".action-buttons__handle-edit")) {
    performEditTask(e, taskInput);
  }
  if (e.target.closest(".action-buttons__handle-copy")) {
    performCopyTask(e);
    return;
  }
  if (e.target.closest(".header__dark-mode-btn")) {
    document.body.classList.toggle("dark-mode");
    const darkModeBtn = document.querySelector(".header__dark-mode-btn");
    darkModeBtn?.removeAttribute("aria-hidden");

    const darkMode = document.body.classList.contains("dark-mode");
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }
  if (e.target.closest(".header__search-btn")) {
    const newSearchBox = replaceHeaderWithSearch();
    searchBox.isSearchBox = newSearchBox;
    setContentEditable(searchBox.isSearchBox); 
    return;
  }
  if (e.target.closest(".header__back-arrow")) {
    replaceHeaderWithSearch();
    hideToolbar();
    renderTasks();
    return;
  }
  if (e.target.closest(".header__more-btns")) {
    const ellipsis = document.querySelector(".header__more-btns");
    ellipsis?.removeAttribute("aria-hidden");
    toggleDropDownList();
  }
  if (e.target.classList.contains("dropdown-list__completed-tasks")) {
    renderCompletedTasks();
  }
  if (e.target.classList.contains("dropdown-list__all-tasks")) {
    renderTasks();
  }
  if (e.target.classList.contains("dropdown-list__edited-tasks")) {
    showEditedTasks();
  }
  if (e.target.closest('.cancel-editing__icon')) {
      cancelEdit(taskInput)
  }
});
