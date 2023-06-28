export const validateEmail = (email: string | undefined) => {
  const formattedEmail = typeof email !== 'string' ? '' : email;
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(formattedEmail);
};
