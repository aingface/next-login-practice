export const validatePassword = (targetPassword: string) => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&()])[A-Za-z\d@$!%*#?&()]{8,20}$/;
  return regex.test(targetPassword);
};
