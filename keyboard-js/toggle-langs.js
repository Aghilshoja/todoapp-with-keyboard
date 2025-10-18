/* import { keyboardManager } from "./app.js"; */
import { createElement } from "./build-ui.js";

export const toggleLangs = (langs) => {
  const keyboardContainer = document.querySelector(
    ".virtual-keyboard__container"
  );
  if (!keyboardContainer) return;

  keyboardContainer.textContent = "";
  langs.rows.forEach((rows, index) => {
    const eachRow = document.createElement("div");
    eachRow.classList.add(`virtual-keyboard__container__row-${index}`);
    rows.forEach((strings) => {
      const createdButtons = createElement(strings, langs.specialKeys);
      eachRow.appendChild(createdButtons);
    });
    keyboardContainer.appendChild(eachRow);
  });
};
