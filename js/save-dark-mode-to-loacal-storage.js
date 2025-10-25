export const loadDarkMode = () => {
  const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
  if (savedDarkMode === true) {
    document.body.classList.add("dark-mode");
  }
};