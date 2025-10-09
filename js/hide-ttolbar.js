const createHeader = () => `
  <h1 class="header__title">Smart To Do</h1>

  <div class="header__actions">
    <button
      class="fa-solid fa-circle-half-stroke header__dark-mode-btn"
      aria-label="Toggle dark mode"
    ></button>
    <button
      class="fa-solid fa-magnifying-glass header__search-btn"
      aria-label="Search tasks"
    ></button>
    <button
      class="fa-solid fa-ellipsis-vertical header__more-btns"
      aria-label="More options"
    ></button>
  </div>
`;

export const hideToolbar = () => {
  const toolbar = document.querySelector(".toolbar");
  toolbar.classList.remove("toolbar--rendering");

  const selectedTaskRemoval = document.querySelectorAll(".task-item");
  selectedTaskRemoval.forEach((selectedTask) => {
    selectedTask.classList.remove("task-item--selected");
  });

  const header = document.querySelector(".header");
  if (header) {
    header.innerHTML = createHeader();
    header.classList.remove("padding-for-header");
    const getModes = document
      .querySelectorAll(".action-buttons")
      .forEach((hide) => {
        hide.classList.remove("action-buttons--render-toolbar");
      });
  }

  const taskItems = document.querySelectorAll(".task-item");
  taskItems.forEach((task) => {
    task.classList.remove("task-item--mark-all-tasks");
  });
};
