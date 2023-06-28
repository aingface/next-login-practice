export const formatDate = (
  year: number | undefined,
  month: number | undefined,
  day: number | undefined,
) => {
  const stringifiedYear = String(year);
  const stringifiedMonth = String(month);
  const stringifiedDay = String(day);

  const paddedYear = stringifiedYear.padStart(4, '0');
  const paddedMonth = stringifiedMonth.padStart(2, '0');
  const paddedDay = stringifiedDay.padStart(2, '0');

  return `${paddedYear}-${paddedMonth}-${paddedDay}`;
};
