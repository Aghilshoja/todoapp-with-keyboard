import { filterSearchedTasks } from "./filter-searched-task.js";
import { renderTasks } from "./app.js";
import { stateOfInputs } from "../keyboard-js/app.js";

const createInput = () => `
    <div class="header__search-mode">
    <button class="header__back-arrow"><i class="fa-solid fa-arrow-left"></i></button>
    <div tabindex="0" role="textbox" class="header__search-box">search for tasks</div>
    <button class="header__clear-value"><i class="fa-solid fa-xmark"></i></button>
    `;

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
  if (!header) return;
  const spaceBar = document.querySelector(
    ".virtual-keyboard__container__space-button"
  );
  if (!spaceBar) return;

  const backSapce = document.querySelector(
    ".virtual-keyboard__container__delete-key"
  );
  if (!backSapce) return;

  if (!isSearchHidden.state) {
    header.classList.remove("header");
    header.innerHTML = createInput();
    const searchIcon = header.querySelector(".header__search-box");
    const clearButton = header.querySelector(".header__clear-value");

    document.addEventListener("click", (e) => {
      if (e.target.closest(".virtual-keyboard__container__space-button")) {
        searchIcon.textContent += " ";
      }
    });

    document.addEventListener("click", (e) => {
      if (
        e.target.classList.contains("virtual-keyboard__container__delete-key")
      ) {
        searchIcon.textContent = searchIcon.textContent.slice(0, -1);
      }
    });

    searchIcon.addEventListener("focus", () => {
      searchIcon.textContent = "";
      stateOfInputs.activeInput = searchIcon;
    });

    searchIcon.addEventListener("blur", () => {
      stateOfInputs.activeInput = null;
    });

    searchIcon.addEventListener("input", () =>
      filterSearchedTasks(searchIcon, clearButton)
    );

    clearButton.addEventListener("click", () => {
      searchIcon.textContent = "";
      clearButton.classList.remove("header__show-clear-value");
      renderTasks();
    });
    return searchIcon;
  }

  isSearchHidden.state = !isSearchHidden.state;
  return searchIcon;
};
