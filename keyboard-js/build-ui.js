export const createElement = (chars, specialKey) => {
  const buttons = document.createElement("button");

  if (specialKey[chars]) {
    buttons.className = specialKey[chars].class;
    buttons.textContent = chars;
  } else {
    buttons.classList.add("virtual-keyboard__container__regular-buttons");
    buttons.textContent = chars;
  }

  return buttons;
};
