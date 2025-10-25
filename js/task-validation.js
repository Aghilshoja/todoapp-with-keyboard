const taskInput = document.querySelector(".form-section__task-input");
const showError = document.querySelector(".input-field__hide-error");
const span = document.querySelector('.span')
export const handleTaskValidation = () => {
  if (taskInput.textContent === "Enter a task" || taskInput.textContent === '') {
    showError.classList.add("input-field__show-error");
    showError.textContent = "Please enter a task";
    setTimeout(() => {
      showError.classList.remove("input-field__show-error");
    }, 2000);
  }
  return {
    taskInput, 
    span
};
}