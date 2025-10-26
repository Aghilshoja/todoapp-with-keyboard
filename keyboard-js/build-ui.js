import { stateOfInputs } from "./app.js";

   const placeholder = document.querySelector('.span')
  
 export const secondPlaceholder = document.querySelector('.span')
 
export const createElement = (chars, specialKey) => {
  const buttons = document.createElement("button");
  buttons.addEventListener("mousedown", (e) => {
    e.preventDefault();
  });



  if (specialKey[chars]) {
    buttons.className = specialKey[chars].class;
    buttons.textContent = chars;
  } else {
    buttons.classList.add("virtual-keyboard__container__regular-buttons");
    buttons.textContent = chars;
    buttons.addEventListener("click", () => {
      if (!stateOfInputs.activeInput) return;
         placeholder.textContent = '' 
      stateOfInputs.activeInput.textContent += buttons.textContent;

      // Simulate native input event so listeners (like search) react to virtual typing

      const event = new Event("input", { bubbles: true });
      if (event !== null) stateOfInputs.activeInput.dispatchEvent(event);
    });
  }
  return buttons;
    
};
