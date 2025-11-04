export const validatePassword = (password) => {
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  return passwordRegex.test(password);
};
export const validatePasswordIsSame = (samePassword, password) => {
  return password === samePassword;
};

export const allFieldsCheck = (fields) => fields.every((field) => field.trim());
