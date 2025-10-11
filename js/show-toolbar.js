export const showToolbar = (e) => {
  const closestTask = e.target.closest(".task-item");
  if (!closestTask) return;

  const header =
    document.querySelector(".header") ||
    document.querySelector(".header--design");
  if (!header) return;

  const toolBar = closestTask.querySelector(".action-buttons");
  if (!toolBar) return;

  if (toolBar && header) {
    header.textContent = "";
    toolBar.classList.add("action-buttons--render-toolbar");
  }
};
