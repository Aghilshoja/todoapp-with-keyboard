export const validatePasswordLogin = (password) => {
  const passwordPatterns =
    /^(?=[A-Za-z])(?=.*[A-Z])[A-Za-z][A-Za-z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]*$/;
  return password.length > 7 && passwordPatterns.test(password);
};
