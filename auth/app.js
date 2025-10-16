import { validateInput } from "./username-login-error.js";
import { validatePasswordInput } from "./password-login-error.js";

document.querySelector(".login__form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInput() && validatePasswordInput()) {
    window.location.href = "index.html";
  }
});
