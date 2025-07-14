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

export const checkIsBalanceEnough = ({
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

export const checkIsValidInput = (amount: number) => {
  if (!Number.isInteger(amount) || amount <= 0) return false;

  for (let x = 0; x <= Math.floor(amount / 50); x++) {
    const remaining = amount - x * 50;
    if (remaining % 20 === 0) {
      return true;
    }
  }

  return false;
};
