import { handleTaskValidation } from "./task-validation.js";
import { renderTasks } from "./render-tasks.js";
import { hideToolbar } from "./hide-toolbar.js";
import { taskManager } from "./app.js";

export const submitTasks = (e) => {
        e.preventDefault();
    const value = handleTaskValidation();
    const trimmedValue = value.taskInput.textContent.trim();
    if (trimmedValue !== "" && value.span.textContent !== "Enter a task") taskManager.addTask(trimmedValue);
    value.taskInput.textContent = "";
    value.span.textContent = 'Enter a task';
    value.taskInput.appendChild(value.span);

    renderTasks();
    hideToolbar();
}