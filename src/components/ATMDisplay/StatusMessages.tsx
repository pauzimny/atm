import Alert, { type AlertColor } from '@mui/material/Alert';
import { ATM_ACTION_STATUS, ATM_ACTIONS, type ATMActionType } from '../../types';
import type { ATMDisplayInputProps, StatusMessagesProps } from './types';

const statusMessages = {
  successWithdrawal: 'Withdrawal successful.',
  successDeposit: 'Deposit successful.',
  errorInvalidInput: 'This ATM gives out only 20, 50, 100, and 200 PLN notes.',
  errorNotEnoughBalance: 'Your account balance is too low for this withdrawal.',
};

const getSuccessStatusMessage = (actionType?: ATMActionType) => {
  if (!actionType) return '';

  return actionType === ATM_ACTIONS.WITHDRAW
    ? statusMessages.successWithdrawal
    : statusMessages.successDeposit;
};

const getErrorStatusMessage = (
  actionStatus: Omit<ATMDisplayInputProps['actionStatus'], 'SUCCESS'>
) => {
  return actionStatus === ATM_ACTION_STATUS.ERROR_NOT_ENOUGH_BALANCE
    ? statusMessages.errorNotEnoughBalance
    : statusMessages.errorInvalidInput;
};

export const StatusMessages = ({ actionStatus, actionType }: StatusMessagesProps) => {
  const renderStatusMessage = () => {
    if (!actionStatus) {
      return null;
    }

    const isSuccess = actionStatus === ATM_ACTION_STATUS.SUCCESS;
    let messageText = '';
    let alertSeverity: AlertColor;

    if (isSuccess) {
      messageText = getSuccessStatusMessage(actionType);
      alertSeverity = 'success';
    } else {
      messageText = getErrorStatusMessage(actionStatus);
      alertSeverity = 'error';
    }

    return <Alert severity={alertSeverity}>{messageText}</Alert>;
  };

  return <>{renderStatusMessage()}</>;
};
