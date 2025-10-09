const deleteIcon = (task) => {
  const delIcon = document.createElement("i");
  delIcon.className = "fa-solid fa-trash";

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("action-buttons__handle-delete");
  deleteButton.dataset.id = task.id;

  deleteButton.appendChild(delIcon);

  return deleteButton;
};

const editIcon = (task) => {
  const editIcon = document.createElement("i");
  editIcon.className = "fa-solid fa-pen-to-square";

  const editButton = document.createElement("button");
  editButton.classList.add("action-buttons__handle-edit");
  editButton.dataset.id = task.id;

  editButton.appendChild(editIcon);

  return editButton;
};

const backArrowIcon = () => {
  const backArrowIcon = document.createElement("i");
  backArrowIcon.className = "fa-solid fa-arrow-left";

  const backArrowButton = document.createElement("button");
  backArrowButton.classList.add("action-buttons__backarrow");

  backArrowButton.appendChild(backArrowIcon);

  return backArrowButton;
};

const checkMarkIcon = () => {
  const checkMark = document.createElement("i");
  checkMark.className = "fa-solid fa-check";

  const checkMarkHolder = document.createElement("button");
  checkMarkHolder.classList.add("action-buttons__check-mark");

  checkMarkHolder.appendChild(checkMark);

  return checkMarkHolder;
};

const copyIcon = (task) => {
  const iconCopy = document.createElement("i");
  iconCopy.className = "fa-solid fa-copy";

  const copyButton = document.createElement("button");
  copyButton.classList.add("action-buttons__handle-copy");
  copyButton.dataset.id = task.id;

  copyButton.appendChild(iconCopy);

  return copyButton;
};

const iconsHolder = (task) => {
  const modeHolder = document.createElement("p");
  modeHolder.dataset.id = task.id;
  modeHolder.classList.add("action-buttons");
  modeHolder.appendChild(backArrowIcon());
  modeHolder.appendChild(checkMarkIcon());
  modeHolder.appendChild(copyIcon(task));
  modeHolder.appendChild(deleteIcon(task));
  modeHolder.appendChild(editIcon(task));

  return modeHolder;
};

const userInput = (task) => {
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.classList.add("wrapper__is-completed");
  checkbox.dataset.id = task.id;
  checkbox.checked = task.isCompleted;

  const usersInput = document.createElement("p");
  usersInput.classList.add("wrapper__user-input");
  usersInput.textContent = task.text;

  const textAndINputContainer = document.createElement("div");
  textAndINputContainer.classList.add("sub-wrapper");

  const ellipsisIcon = document.createElement("button");
  ellipsisIcon.className =
    "fa-solid fa-ellipsis-vertical wrapper__ellipsis-icon";

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("wrapper");

  textAndINputContainer.appendChild(checkbox);
  textAndINputContainer.appendChild(usersInput);
  mainContainer.appendChild(textAndINputContainer);
  mainContainer.appendChild(ellipsisIcon);

  return mainContainer;
};

export const createTaskElement = (task) => {
  const eachTask = document.createElement("li");
  eachTask.classList.add("task-item");
  eachTask.setAttribute("title", "click on the task to see more options");
  eachTask.dataset.id = task.id;
  eachTask.setAttribute("draggable", "true");
  if (task.isCompleted) eachTask.classList.add("task-item--done");

  const timeStamp = document.createElement("p");
  timeStamp.classList.add("task-item__timestamp");
  timeStamp.textContent = task.timestamp;

  eachTask.prepend(timeStamp);
  eachTask.prepend(userInput(task));
  eachTask.appendChild(iconsHolder(task));
  return eachTask;
};
