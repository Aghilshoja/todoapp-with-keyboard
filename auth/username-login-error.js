import { validateUsername } from "./pure-login-logic.js";

export const validateInput = () => {
  const username = document.querySelector(".login__form__username");
  if (!username) return;
  const usernameError = document.querySelector(".login__form__username-error");
  if (!usernameError) return;

  if (validateUsername(username.value)) {
    return true;
  } else {
    usernameError.textContent =
      "Username must start with a letter or underscore and can only contain letters, numbers, or underscores.";
    setTimeout(() => {
      usernameError.textContent = "";
    }, 2000);
    return false;
  }
};
