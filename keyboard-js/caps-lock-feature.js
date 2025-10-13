let isUpperCase = false;

export const toggleCapsLock = () => {
  const allRows = document.querySelectorAll(
    ".virtual-keyboard__container__row-1, .virtual-keyboard__container__row-2, .virtual-keyboard__container__row-3"
  );
  if (!allRows) return;

  allRows.forEach((getRows) => {
    const buttons = getRows.querySelectorAll(
      ".virtual-keyboard__container__regular-buttons"
    );
    buttons.forEach((getButtons) => {
      getButtons.textContent = !isUpperCase
        ? getButtons.textContent.toUpperCase()
        : getButtons.textContent.toLowerCase();
    });
  });
  isUpperCase = !isUpperCase;
};
