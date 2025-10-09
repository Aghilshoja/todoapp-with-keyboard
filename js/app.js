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
import "./add-task.js";
import "./get-tasks.js";
import "./delete-mode.js";
import "./set-tasks.js";
import "./edit-mode.js";
import "./copy-mode.js";
import "./completed-mode.js";

const taskManager = new toDoApp();

export const stateOfEdited = {
  isEdited: null,
};

export let isTasksClearedOrCounted = {
  state: false,
};
const taskInput = document.querySelector(".form-section__task-input");
const taskList = document.querySelector(".to-do-app__tasks-holder");

export const renderTasks = () => {
  taskList.textContent = "";

  const tasks = taskManager.getTasks();
  const sortedTask = [...tasks].sort((a, b) => {
    return b.isCompleted - a.isCompleted;
  });
  if (!tasks) return;
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="no-task-added">No tasks added</li>`;
    return;
  }
  sortedTask.forEach((task) => taskList.prepend(createTaskElement(task)));
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

document.body.addEventListener("click", (e) => {
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
});
renderTasks();
