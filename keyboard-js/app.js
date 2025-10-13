import { keyboard } from "./state-app.js";
import { app } from "./keyboard-structure.js";
import { toggleLangs } from "./toggle-langs.js";
import { taskManager } from "../js/app.js";
import { renderTasks } from "../js/app.js";
import { hideToolbar } from "../js/hide-toolbar.js";
import { toggleCapsLock } from "./caps-lock-feature.js";
import "./get-characters.js";

export const keyboardManager = new keyboard(app);

const langs = keyboardManager.getCharacters();
toggleLangs(langs.keyboard.en);

const taskInput = document.querySelector(".form-section__task-input");

document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("virtual-keyboard__container__english")) {
    toggleLangs(langs.keyboard.fa);
  }
  if (e.target.classList.contains("virtual-keyboard__container__persian")) {
    toggleLangs(langs.keyboard.en);
  }
  if (
    e.target.classList.contains("virtual-keyboard__container__symbol-switcher")
  ) {
    toggleLangs(langs.keyboard.symbols);
  }
  if (
    e.target.classList.contains("virtual-keyboard__container__reverse-switcher")
  ) {
    toggleLangs(langs.keyboard.en);
  }
  if (
    e.target.classList.contains("virtual-keyboard__container__submit-button")
  ) {
    const value = taskInput.value.trim();
    if (!value) return;
    taskManager.addTask(value);
    taskInput.value = "";
    renderTasks();
    hideToolbar();
    return;
  }
  if (e.target.classList.contains("virtual-keyboard__container__delete-key")) {
    taskInput.value = taskInput.value.slice(0, -1);
  }
  if (e.target.classList.contains("virtual-keyboard__container__arrow-key")) {
    toggleCapsLock();
  }
  if (
    e.target.classList.contains("virtual-keyboard__container__space-button")
  ) {
    taskInput.value += " ";
  }
});
