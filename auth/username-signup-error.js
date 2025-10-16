import { validateUsername } from "./username-logic-validation.js";

export const validateUsernameSignup = () => {
  const usernameSign = document.querySelector(".signup__form__username");
  if (!usernameSign) return;

  const errorMessage = document.querySelector(".signup__form__username--error");
  if (!errorMessage) return;

  if (validateUsername(usernameSign.value)) {
    return true;
  } else {
    errorMessage.textContent =
      "Username must start with a letter or underscore and can only contain letters, numbers, or underscores.";
    setTimeout(() => {
      errorMessage.textContent = "";
    }, 2000);
    return false;
  }
};
