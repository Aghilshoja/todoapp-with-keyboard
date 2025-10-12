export const draggedLeave = (e) => {
  const closestTaskItem = e.target.closest(".task-item");
  if (!closestTaskItem) return;
  closestTaskItem.classList.remove("task-item--highlight");
};
