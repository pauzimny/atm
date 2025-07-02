export const getFormattedCurrency = (valueToBeFormatted: string | undefined) => {
  if (!valueToBeFormatted) {
    return '';
  }

  const parsedNumericValue = parseFloat(valueToBeFormatted);

  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
  }).format(parsedNumericValue);
};
