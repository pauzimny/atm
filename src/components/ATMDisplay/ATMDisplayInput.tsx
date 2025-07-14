import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import type { ATMDisplayInputProps } from './types';
import { ATM_ACTION_STATUS, ATM_ACTIONS, type ATMActionType } from '../../types';
import { isEmpty } from '../../guards';
import { getFormattedCurrency } from '../../helpers';

const statusMessages = {
  errorNotEnoughBalance: 'Your account balance is too low for this withdrawal.',
  successWithdrawal: 'Withdrawal successful.',
  successDeposit: 'Deposit successful.',
  errorInvalidInput: 'This ATM gives out only 20, 50, 100, and 200 PLN notes.',
};

const getSuccessStatusMessage = (actionType?: ATMActionType) => {
  if (!actionType) return;

  return actionType === ATM_ACTIONS.WITHDRAW
    ? statusMessages.successWithdrawal
    : statusMessages.successDeposit;
};

export function ATMDisplayInput({
  inputValue,
  inputLabel,
  actionStatus,
  actionType,
}: ATMDisplayInputProps) {
  const displayLabel = !actionStatus && isEmpty(inputValue);
  const displayValue = !displayLabel && !isEmpty(inputValue);

  const isNotEnoughBalanceError = actionStatus === ATM_ACTION_STATUS.ERROR_NOT_ENOUGH_BALANCE;
  const isInvalidValueError = actionStatus === ATM_ACTION_STATUS.ERROR_INVALID_VALUE;

  const isSuccess = actionStatus === ATM_ACTION_STATUS.SUCCESS;

  return (
    <Box width={'100%'} fontSize={24}>
      {displayLabel && <Typography>{inputLabel}</Typography>}
      {displayValue && getFormattedCurrency(parseFloat(inputValue))}
      {isNotEnoughBalanceError && (
        <Alert severity="error">{statusMessages.errorNotEnoughBalance}</Alert>
      )}
      {isInvalidValueError && <Alert severity="error">{statusMessages.errorInvalidInput}</Alert>}
      {isSuccess && <Alert severity="success">{getSuccessStatusMessage(actionType)}</Alert>}
    </Box>
  );
}
