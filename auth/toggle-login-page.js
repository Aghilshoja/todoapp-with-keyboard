import { cachedElements } from "./toggle-signup-page.js";

export const toggleLogin = () => {
  cachedElements.login.classList.remove("login--hiding");
  cachedElements.singUp.classList.remove("signup--rendering");
};
