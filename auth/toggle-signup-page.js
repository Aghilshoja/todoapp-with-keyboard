export const cachedElements = {
  login: document.querySelector(".login"),
  singUp: document.querySelector(".signup"),
};

export const toggleSignUp = () => {
  cachedElements.login.classList.add("login--hiding");
  cachedElements.singUp.classList.add("signup--rendering");
};
