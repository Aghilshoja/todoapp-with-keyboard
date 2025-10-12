export const draggedEnter = (e) => {
  const dragedEnter = e.target.closest(".task-item");
  if (!dragedEnter) return;
  dragedEnter.classList.add("task-item--highlight");
};
