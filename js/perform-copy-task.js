import { taskManager } from "./app.js";
import { hideToolbar } from "./hide-toolbar.js";
import { displayVisualFeedback } from "./copid-visual-feedback.js";


export const performCopyTask = (e) => {
    const taskId = Number(
      e.target.closest(".action-buttons__handle-copy").dataset.id
    );
    const taskTocopy = taskManager.handleCopyTask(taskId);
    if (taskTocopy) displayVisualFeedback(e, taskTocopy);
    setTimeout(() => {
      hideToolbar(); // execute toolbar after 2 seconds so that check mark can show up as a feedback of copying action
    }, 2000);
}