import { useCallback, useMemo, useState, type ReactNode } from 'react';
import { ATMMachineContext } from './useATMContext';
import { ATM_ACTION_STATUS, ATM_ACTIONS, type ATMActionStatus, type ATMActionType } from '../types';
import { USER_BALANCE } from '../utils';
import { checkIsBalanceEnough, checkIsValidInput, getFormattedCurrency } from '../helpers';
import { isEmpty } from '../guards';

export const ATMMachineProvider = ({ children }: { children: ReactNode }) => {
  const [selectedATMAction, setSelectedATMAction] = useState<ATMActionType | undefined>();
  const [userBalance, setUserBalance] = useState<number>(USER_BALANCE);
  const [actionStatus, setActionStatus] = useState<ATMActionStatus>();

  const selectATMAction = useCallback((newSelectedAction: ATMActionType) => {
    setSelectedATMAction(newSelectedAction);
  }, []);

  const handleWithdrawAction = useCallback(
    (value: number) => {
      const isValidInput = checkIsValidInput(value);

      if (!isValidInput) {
        setActionStatus(ATM_ACTION_STATUS.ERROR_INVALID_VALUE);
        return;
      }

      const isBalanceEnough = checkIsBalanceEnough({
        availableBalance: userBalance,
        requestedValue: value,
      });

      if (!isBalanceEnough) {
        setActionStatus(ATM_ACTION_STATUS.ERROR_NOT_ENOUGH_BALANCE);
        return;
      }

      const updatedBalance = userBalance - value;
      setUserBalance(updatedBalance);
      setActionStatus(ATM_ACTION_STATUS.SUCCESS);
    },
    [userBalance]
  );

  const handleDepositAction = useCallback(
    (value: number) => {
      const updatedBalance = userBalance + value;
      setUserBalance(updatedBalance);
      setActionStatus(ATM_ACTION_STATUS.SUCCESS);
    },
    [userBalance]
  );

  const submitRequestedMoneyValue = useCallback(
    (value: number) => {
      if (isEmpty(value)) return;

      switch (selectedATMAction) {
        case ATM_ACTIONS.DEPOSIT:
          handleDepositAction(value);
          break;

        case ATM_ACTIONS.WITHDRAW:
          handleWithdrawAction(value);
          break;
        default:
          throw new Error('Unknown ATM action!');
      }
    },
    [selectedATMAction, handleWithdrawAction, handleDepositAction]
  );

  const cleanupActionStatus = useCallback(() => {
    setActionStatus(undefined);
  }, []);

  const clearAtmSelections = useCallback(() => {
    setActionStatus(undefined);
    setSelectedATMAction(undefined);
  }, []);

  const formattedUserBalance = useMemo(() => {
    return getFormattedCurrency(userBalance);
  }, [userBalance]);

  return (
    <ATMMachineContext.Provider
      value={{
        selectedATMAction,
        selectATMAction,
        formattedUserBalance,
        submitRequestedMoneyValue,
        cleanupActionStatus,
        actionStatus,
        clearAtmSelections,
      }}
    >
      {children}
    </ATMMachineContext.Provider>
  );
};
