import { stateOfEdited } from "./perform-edit-task.js"
import { secondPlaceholder } from "../keyboard-js/build-ui.js"


const inputTask = document.querySelector('.form-section__task-input')

export const cancelEdit = (taskInput) => {
     if (!stateOfEdited && !taskInput) return 
      const cancelEditMode = document.querySelector('.cancel-editing')
    if (!cancelEditMode && !secondPlaceholder) return
    taskInput.textContent = ''
stateOfEdited.isEdited = null;
  cancelEditMode.classList.remove('cancel-editing--block')

  secondPlaceholder.textContent = 'Enter a task'
   inputTask.appendChild(secondPlaceholder)
}