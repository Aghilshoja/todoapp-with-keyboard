export const toggleDropDownList = () => {
  const dropDown = document.querySelector(".dropdown-list");
  if (!dropDown) return;

  dropDown.classList.toggle("dropdown-list--render");
};
