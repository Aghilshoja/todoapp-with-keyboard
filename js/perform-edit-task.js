import { taskManager } from "./app.js";

export const stateOfEdited = {
  isEdited: null,
};

export const performEditTask = (e, taskInput) => {
        const taskId = Number(
      e.target.closest(".action-buttons__handle-edit").dataset.id
    );
    const taskToEdit = taskManager.handleEditTask(taskId);
    if (taskToEdit) {
      const cleanedText = taskToEdit.text.replace(/\s*\(edited\)$/, "");
      taskInput.textContent = cleanedText;
      /* flip flag of the edited tasks to true so that we can find all of the edited tasks */
      taskToEdit.showEditedTasks = !taskToEdit.showEditedTasks;
    }
    stateOfEdited.isEdited = taskId;
}