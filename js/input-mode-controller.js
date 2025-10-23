export const setContentEditable = (searchBox) => {
  const taskInput = document.querySelector(".form-section__task-input");

  const target = searchBox || taskInput;
  if (!target) return;

  if (window.innerWidth > 1281) {
    target.setAttribute("contenteditable", "true");
    target.setAttribute("contenteditable", "true");
  } else if (window.innerWidth <= 1201) {
    target.removeAttribute("contenteditable");
    target.removeAttribute("contenteditable");
  }
};
