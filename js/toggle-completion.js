export const toggleTaskCompletion = (e, matchedTask) => {
  const completedTaskIds = Number(
    e.target.closest(".wrapper__is-completed").dataset.id
  );
  if (!completedTaskIds) return;

  if (matchedTask) {
    matchedTask.isCompleted = !matchedTask.isCompleted;
  }
};
