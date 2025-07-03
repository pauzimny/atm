import { isEmpty } from './guards';

export const getFormattedCurrency = (valueToBeFormatted: number | undefined) => {
  if (isEmpty(valueToBeFormatted)) {
    return '';
  }

  return new Intl.NumberFormat('pl-PL', {
    style: 'currency',
    currency: 'PLN',
    minimumFractionDigits: 2,
    currencyDisplay: 'code',
  }).format(valueToBeFormatted);
};

export const checkIsValidInput = ({
  requestedValue,
  availableBalance,
}: {
  requestedValue: number;
  availableBalance: number;
}) => {
  if (isNaN(requestedValue) || isNaN(availableBalance)) return false;
  if (requestedValue <= 0) return false;

  return requestedValue <= availableBalance;
};
