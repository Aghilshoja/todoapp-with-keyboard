import { toDoApp } from "./app-state.js";
import { createTaskElement } from "./build-UI.js";
import { showToolbar } from "./show-toolbar.js";
import { hideToolbar } from "./hide-toolbar.js";
import { resetCounters } from "./reset-counters.js";
import { updateTaskCounter } from "./count-individual-task.js";
import { clearAllTasks } from "./clear-all-tasks.js";
import { countTotalTasks } from "./count-total-tasks.js";
import { displayVisualFeedback } from "./copid-visual-feedback.js";
import { toggleTaskCompletion } from "./toggle-completion.js";
import { replaceHeaderWithSearch } from "./replace-header-with-search.js";
import { toggleDropDownList } from "./dropdown-list.js";
import { filterAndRender } from "./filter-completed-tasks.js";
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

const saveTasks = () => {
  const savedTasks = taskManager.getTasks();
  localStorage.setItem("todo", JSON.stringify(savedTasks));
};

const loadTasks = () => {
  try {
    const loadedTasks = JSON.parse(localStorage.getItem("todo"));
    if (Array.isArray(loadedTasks)) taskManager.setTask(loadedTasks);
  } catch (error) {
    console.log("catch the error", error);
  }
  renderTasks();
};

const loadDarkMode = () => {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  if (savedDarkMode === true) {
    document.body.classList.add("dark-mode");
  }
};

document.addEventListener("DOMContentLoaded", () => {
  loadTasks();
  loadDarkMode();
});

export const stateOfEdited = {
  isEdited: null,
};

export let isTasksClearedOrCounted = {
  state: false,
};
const taskInput = document.querySelector(".form-section__task-input");

export const renderTasks = (filteredTasks) => {
  taskList.textContent = "";

  const tasks = filteredTasks || taskManager.getTasks();
  const sortedTask = [...tasks].sort((a, b) => {
    return b.isCompleted - a.isCompleted;
  });
  if (!tasks) return;
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="no-task-added">No tasks added</li>`;
    saveTasks();
    return;
  }
  sortedTask.forEach((task) => taskList.prepend(createTaskElement(task)));
  saveTasks();
};

const toggleAndClearTasks = () => {
  if (!isTasksClearedOrCounted.state) {
    countTotalTasks();
  } else {
    if (confirm("are you sure wanna delete the tasks?")) {
      const tasks = taskManager.getTasks();

      const clearTasks = clearAllTasks(tasks);
      taskManager.setTask(clearTasks);
      renderTasks();
      hideToolbar();
      resetCounters();
    }
  }
  isTasksClearedOrCounted.state = !isTasksClearedOrCounted.state;
};

const renderCompletedTasks = () =>
  filterAndRender((t) => t.isCompleted, "no completed tasks found");

document.body.addEventListener("click", (e) => {
  const dropdownList = document.querySelector(".dropdown-list");
  if (dropdownList) {
    dropdownList.classList.remove("dropdown-list--render");
  }
  if (e.target.closest(".form-section__submit-task")) {
    const value = taskInput.value.trim();
    if (!value) return;
    taskManager.addTask(value);
    taskInput.value = "";
    renderTasks();
    hideToolbar();
    return;
  }
  if (e.target.closest(".action-buttons__backarrow")) {
    hideToolbar();
    resetCounters();
    return;
  }
  if (e.target.closest(".action-buttons__handle-delete")) {
    const taskId = Number(
      e.target.closest(".action-buttons__handle-delete").dataset.id
    );
    const selectedTasks = Array.from(
      document.querySelectorAll(".task-item--selected")
    ).map((selected) => Number(selected.dataset.id));
    if (confirm("are you sure you wanna delte the tasks permenantly?")) {
      taskManager.handleDeleteTask(taskId, selectedTasks);

      renderTasks();
      hideToolbar();
      resetCounters();
      return;
    }
  }
  if (e.target.closest(".toolbar__clear-all-tasks")) {
    toggleAndClearTasks();
  }
  if (e.target.closest(".task-item")) {
    updateTaskCounter(e);
    showToolbar(e);
  }
  if (e.target.closest(".wrapper__is-completed")) {
    const taskId = Number(
      e.target.closest(".wrapper__is-completed").dataset.id
    );
    const completedTask = taskManager.handleCompletedTask(taskId);
    if (completedTask) toggleTaskCompletion(e, completedTask);
    renderTasks();
    hideToolbar();
    resetCounters();
    return;
  }
  if (e.target.closest(".action-buttons__handle-edit")) {
    const taskId = Number(
      e.target.closest(".action-buttons__handle-edit").dataset.id
    );
    const taskToEdit = taskManager.handleEditTask(taskId);
    if (taskToEdit) {
      const cleanedText = taskToEdit.text.replace(/\s*\(edited\)$/, "");
      taskInput.value = cleanedText;
    }
    stateOfEdited.isEdited = taskId;
  }
  if (e.target.closest(".action-buttons__handle-copy")) {
    const taskId = Number(
      e.target.closest(".action-buttons__handle-copy").dataset.id
    );
    const taskTocopy = taskManager.handleCopyTask(taskId);
    if (taskTocopy) displayVisualFeedback(e, taskTocopy);
    setTimeout(() => {
      hideToolbar();
    }, 2000);
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
    replaceHeaderWithSearch();
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
});
