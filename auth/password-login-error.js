import { validatePasswordLogin } from "./pure-passwrod-logic-login.js";

export const validatePasswordInput = () => {
  const password = document.querySelector(".login__form__user-password");
  const passwordError = document.querySelector(".login__form__password-error");

  if (validatePasswordLogin(password.value)) {
    return true;
  } else {
    passwordError.textContent =
      "Password must start with a letter and include at least one uppercase letter.";
    setTimeout(() => {
      passwordError.textContent = "";
    }, 2000);
    return false;
  }
};
