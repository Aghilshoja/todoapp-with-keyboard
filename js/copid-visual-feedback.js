export const displayVisualFeedback = (e, matchedTask) => {
  const closestTask = e.target.closest(".task-item");
  if (!closestTask) return;

  const toolBar = closestTask.querySelector(".action-buttons");
  if (!toolBar) return;

  const closestCheckMark = toolBar.querySelector(".action-buttons__check-mark");
  if (!closestCheckMark) return;

  if (matchedTask && closestCheckMark) {
    const text = matchedTask.text;
    navigator.clipboard.writeText(text);
    closestCheckMark.classList.add("action-buttons__show-check-mark");
    setTimeout(() => {
      closestCheckMark.classList.remove("action-buttons__show-check-mark");
    }, 2000);
  }
};
