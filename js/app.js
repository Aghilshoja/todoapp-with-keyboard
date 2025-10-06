import { toDoApp } from "./app-state.js";
import "./add-task.js";
import "./get-tasks.js";

const taskManager = new toDoApp();

const taskInput = document.querySelector(".task-input");
const taskList = document.querySelector(".tasks-holder");
const submitTask = document.querySelector(".submit--task");

const createUi = (task) => {
  const taskItem = document.createElement("li");
  taskItem.classList.add("task-item");

  const text = document.createElement("span");
  text.textContent = task.text;

  taskItem.appendChild(text);
  return taskItem;
};

const renderTasks = () => {
  taskList.textContent = "";
  const tasks = taskManager.getTasks();
  if (tasks.length === 0) {
    taskList.innerHTML = `<li class="no-task-added">No tasks added</li>`;
    return;
  }
  tasks.forEach((task) => taskList.prepend(createUi(task)));
};

document.body.addEventListener("click", (e) => {
  if (e.target.closest(".submit--task")) {
    const value = taskInput.value.trim();
    if (!value) return;
    taskManager.addTask(value);
    taskInput.value = "";
    renderTasks();
  }
});

renderTasks();
