export const draggedEndTask = (e) => {
  document
    .querySelectorAll(".task-item--highlight, .task-item--dragging")
    .forEach((taskItem) =>
      taskItem.classList.remove("task-item--highlight", "task-item--dragging")
    );
};
