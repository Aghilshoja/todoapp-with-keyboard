import { handleTaskValidation } from "./task-validation.js"
import { hideToolbar } from "./hide-toolbar.js"
import { renderTasks } from "./render-tasks.js"
import { taskManager } from "./app.js"


export const submitTaskOnEnter = (e) => {
      if (e.key === 'Enter') {
        const value = handleTaskValidation() 
        const trimdValue = value.taskInput.textContent.trim()
        if (trimdValue !== '' && value.span.textContent !== 'Enter a task') taskManager.addTask(trimdValue)
          value.taskInput.textContent = ''
        value.span.textContent = 'Enter a task'
        value.taskInput.appendChild(value.span)
        const taskInput = document.querySelector('.cancel-editing')
          if (!taskInput) return
          taskInput.classList.remove('cancel-editing--block')
          renderTasks()
        hideToolbar()
}
}