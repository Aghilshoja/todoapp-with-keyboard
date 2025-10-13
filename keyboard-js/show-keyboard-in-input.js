export const attachListener = () => {
  const taskInput = document.querySelector(".form-section__task-input");
  if (!taskInput) return;
  const allRows = document.querySelectorAll(
    ".virtual-keyboard__container__row-0, .virtual-keyboard__container__row-1, .virtual-keyboard__container__row-2, .virtual-keyboard__container__row-3, .virtual-keyboard__container__row-4"
  );
  if (!allRows) return;

  allRows.forEach((rows) => {
    const EachButton = rows.querySelectorAll(
      ".virtual-keyboard__container__regular-buttons"
    );
    EachButton.forEach((buttons) => {
      buttons.addEventListener("click", () => {
        taskInput.value += buttons.textContent;
      });
    });
  });
};
