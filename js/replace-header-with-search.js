import { filterSearchedTasks } from "./filter-searched-task.js";
import { renderTasks } from "./app.js";

const createInput = () => {
  const searchModeFilter = `
    <div class="header__search-mode">
    <button class="header__back-arrow"><i class="fa-solid fa-arrow-left"></i></button>
    <input class="header__search-box" placeholder="search for the task" type="text">
    <button class="header__clear-value"><i class="fa-solid fa-xmark"></i></button>
    `;
  return searchModeFilter;
};

export const createHeader = () => `  <h1 class="header__title">Smart To Do</h1>

      <div class="header__actions">
        <button class="header__dark-mode-btn" aria-label="Toggle dark mode">
          <i class="fa-solid fa-circle-half-stroke" aria-hidden="true"></i>
        </button>
        <button class="header__search-btn" aria-label="Search tasks">
          <i class="fa-solid fa-magnifying-glass" aria-hidden="true"></i>
        </button>
        <button class="header__more-btns" aria-label="More options">
          <i class="fa-solid fa-ellipsis-vertical" aria-hidden="true"></i>
        </button>
      </div>`;

export const isSearchHidden = {
  state: false,
};

export const replaceHeaderWithSearch = () => {
  const header = document.querySelector(".header");

  if (!isSearchHidden.state) {
    header.classList.remove("header");
    header.innerHTML = createInput();
    const searchIcon = header.querySelector(".header__search-box");
    const clearButton = header.querySelector(".header__clear-value");

    searchIcon.addEventListener("input", () =>
      filterSearchedTasks(searchIcon, clearButton)
    );

    clearButton.addEventListener("click", () => {
      searchIcon.value = "";
      clearButton.classList.remove("header__show-clear-value");
      renderTasks();
    });
  } else {
    const headerDesign = document.querySelector(".header--design");
    headerDesign.innerHTML = createHeader();
    headerDesign.classList.add("header");
  }

  isSearchHidden.state = !isSearchHidden.state;
};
