import { validateInput } from "./handle-errors.js";

document.querySelector(".login__form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInput()) {
    window.location.href = "index.html";
  }
});
