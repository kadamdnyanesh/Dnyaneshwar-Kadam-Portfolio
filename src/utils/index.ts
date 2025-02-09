export function calculateYearsAndMonths(dateString: string | number | Date) {
  // Parse the input date
  const inputDate = new Date(dateString);
  const currentDate = new Date();

  // Calculate the total difference in years and months
  let years = currentDate.getFullYear() - inputDate.getFullYear();
  let months = currentDate.getMonth() - inputDate.getMonth();

  // Adjust if the months difference is negative
  if (months < 0) {
    years--;
    months += 12;
  }
  return { years, months };
}
