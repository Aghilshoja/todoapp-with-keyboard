import { renderTasks } from "./render-tasks.js";
import { hideToolbar } from "./hide-toolbar.js";
import { resetCounters } from "./reset-counters.js";
import { taskManager } from "./app.js";
import { toggleTaskCompletion } from "./toggle-completion.js";

export const completeTask = (e) => {
        const taskId = Number(
      e.target.closest(".wrapper__is-completed").dataset.id
    );
    const completedTask = taskManager.handleCompletedTask(taskId);
    if (completedTask) toggleTaskCompletion(e, completedTask);
    renderTasks();
    hideToolbar();
    resetCounters();
}