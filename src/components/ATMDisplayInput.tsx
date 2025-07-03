import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import type { ATMDisplayProps } from './ATMDisplay';
import { getFormattedCurrency } from '../helpers';
import { isEmpty } from '../guards';
import { ATM_ACTION_STATUS, ATM_ACTIONS, type ATMActionStatus, type ATMActionType } from '../types';

const statusMessages = {
  error: 'Your account balance is too low for this withdrawal.',
  successWithdrawal: 'Withdrawal successful.',
  successDeposit: 'Deposit successful,',
};

const getSuccesStatusMessage = (actionType?: ATMActionType) => {
  if (!actionType) return;

  return actionType === ATM_ACTIONS.WITHDRAW
    ? statusMessages.successWithdrawal
    : statusMessages.successDeposit;
};

type ATMDisplayInputProps = ATMDisplayProps & {
  inputLabel: string;
  actionStatus?: ATMActionStatus;
  actionType?: ATMActionType;
};

export function ATMDisplayInput({
  inputValue,
  inputLabel,
  actionStatus,
  actionType,
}: ATMDisplayInputProps) {
  const displayLabel = !actionStatus && isEmpty(inputValue);
  const displayValue = !displayLabel && !isEmpty(inputValue);
  const isError = actionStatus === ATM_ACTION_STATUS.ERROR;
  const isSuccess = actionStatus === ATM_ACTION_STATUS.SUCCESS;

  return (
    <Box width={'100%'} fontSize={24}>
      {displayLabel && <Typography>{inputLabel}</Typography>}
      {displayValue && getFormattedCurrency(parseFloat(inputValue))}
      {isError && <Alert severity="error">{statusMessages.error}</Alert>}
      {isSuccess && <Alert severity="success">{getSuccesStatusMessage(actionType)}</Alert>}
    </Box>
  );
}
