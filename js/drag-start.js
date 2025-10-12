export const dragStart = (e) => {
  const task = e.target.closest(".task-item");
  if (!task) return;
  e.dataTransfer.setData("text", task.dataset.id);

  setTimeout(() => task.classList.add("task-item--dragging"), 0);
};
