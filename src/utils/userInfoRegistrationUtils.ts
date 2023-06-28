export const checkIsRegisterValuesValid = (
  isYearValid: boolean,
  isMonthValid: boolean,
  isDayValid: boolean,
  isEmailValid: boolean,
  isPasswordValid: boolean,
) => {
  if (isYearValid && isMonthValid && isDayValid && isEmailValid && isPasswordValid) {
    return true;
  }
  return false;
};

export const validateEmail = (email: string | undefined) => {
  const formattedEmail = typeof email !== 'string' ? '' : email;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(formattedEmail);
};

export const validatePassword = (targetPassword: string) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&()])[A-Za-z\d@$!%*#?&()]{8,20}$/;
  return regex.test(targetPassword);
};
