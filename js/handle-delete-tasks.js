import { renderTasks } from "./render-tasks.js";
import { taskManager } from "./app.js";
import { hideToolbar } from "./hide-toolbar.js";
import { resetCounters } from "./reset-counters.js";

export const performDeleteTasks = (e) => {
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
}
}