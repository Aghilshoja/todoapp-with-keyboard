export const clearAllTasksState = (counter) => {
    document.querySelectorAll('.toolbar__clear-all-tasks').forEach(clearAllTasksButton => {
        clearAllTasksButton.disabled = counter === 0 || counter === 1
    })
}