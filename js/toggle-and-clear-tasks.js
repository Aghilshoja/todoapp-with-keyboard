import { renderTasks } from "./render-tasks.js";
 import { taskManager } from "./app.js";
 import { hideToolbar } from "./hide-toolbar.js";
 import { resetCounters } from "./reset-counters.js";
 import { clearAllTasks } from "./clear-all-tasks.js";
 import { countTotalTasks } from "./count-total-tasks.js";
 
 export let isTasksClearedOrCounted = {
  state: false,
};

export const toggleAndClearTasks = () => {
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