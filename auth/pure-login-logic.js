export const validateUsername = (username) => {
  const usernamePattern = /^[A-Za-z_][A-Za-z0-9_]*$/;
  return username.length > 6 && usernamePattern.test(username);
};
