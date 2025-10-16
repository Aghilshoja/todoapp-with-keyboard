import { validateInput } from "./username-login-error.js";
import { validatePasswordInput } from "./password-login-error.js";
import { toggleSignUp } from "./toggle-signup-page.js";
import { toggleLogin } from "./toggle-login-page.js";
import { validateUsernameSignup } from "./username-signup-error.js";
import { validatePasswordSigUp } from "./password-signup-error.js";

document.querySelector(".login__form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateInput() && validatePasswordInput()) {
    window.location.href = "html/index.html";
  }
});

document.querySelector(".signup__form").addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateUsernameSignup() && validatePasswordSigUp()) {
    window.location.href = "index.html";
  }
});

document.body.addEventListener("click", (e) => {
  const signupButton = document.querySelector(".submit-validation__signup");
  if (!signupButton) return;
  const loginButton = document.querySelector(".submit-validation__login");
  if (!loginButton) return;
  if (e.target.classList.contains("submit-validation__signup")) {
    loginButton.classList.remove("submit-validation__login--background");
    e.target.classList.add("submit-validation__signup--background");
    toggleSignUp();
  }
  if (e.target.classList.contains("submit-validation__login")) {
    signupButton.classList.remove("submit-validation__signup--background");
    e.target.classList.add("submit-validation__login--background");

    toggleLogin();
  }
});
