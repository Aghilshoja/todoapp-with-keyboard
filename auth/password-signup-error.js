import { validatePassword } from "./password-logic-validation.js";

export const validatePasswordSigUp = () => {
  const passwordSignUp = document.querySelector(
    ".signup__form__username-password"
  );
  if (!passwordSignUp) return;
  const messageError = document.querySelector(".signup__form__password--error");
  if (!messageError) return;
  if (validatePassword(passwordSignUp.value)) {
    messageError.textContent = "here ";
    return true;
  } else {
    messageError.textContent =
      "Password must start with a letter and include at least one uppercase letter.";
    setTimeout(() => {
      messageError.textContent = "";
    }, 2000);
    return false;
  }
};
