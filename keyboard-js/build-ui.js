import { stateOfInputs } from "./app.js";

   const placeholder = document.querySelector('.span')
  
 export const secondPlaceholder = document.querySelector('.span')
 
 const addInputHandler = (button) {
  button.addEventListener("click", () => {
    if (!stateOfInputs.activeInput) return;
    placeholder.textContent = "";
    stateOfInputs.activeInput.textContent += button.textContent;

      /* Simulate native input event so listeners (like search) react to virtual typing */

    const event = new Event("input", { bubbles: true });
    stateOfInputs.activeInput.dispatchEvent(event);
  });
}

export const createElement = (chars, specialKey) => {
  const buttons = document.createElement("button");
  buttons.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });

  if (specialKey[chars]) {
    buttons.className = specialKey[chars].class;
    buttons.setAttribute('aria-label', `${specialKey[chars].label}`)
    buttons.textContent = chars;
  } else if (/[0-9]/.test(chars)) {
  buttons.classList.add("virtual-keyboard__container__regular-buttons");
    // Numbers  aria label
  buttons.setAttribute("aria-label", `Number ${chars}`);
  buttons.textContent = chars; 
   addInputHandler(button)
  } else {
    buttons.classList.add("virtual-keyboard__container__regular-buttons");
    //letters aria label
      buttons.setAttribute('aria-label', `key ${chars}`)
    buttons.textContent = chars;
      addInputHandler(buttons)
  }
  return buttons;
};
