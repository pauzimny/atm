import Grid from '@mui/material/Grid';
import { ATM_ACTIONS, type ATMActionType } from '../types';
import { ActionButton } from './ActionButton';
import { useATMContext } from '../context/useATMContext';

const atmActions: { id: number; label: string; actionName: ATMActionType }[] = [
  { id: 1, label: 'Balance', actionName: ATM_ACTIONS.DISPLAY_BALANCE },
  { id: 2, label: 'Withdraw', actionName: ATM_ACTIONS.WITHDRAW },
  { id: 3, label: 'Deposit', actionName: ATM_ACTIONS.DEPOSIT },
];

export function ATMActions() {
  const { selectATMAction } = useATMContext();

  const handleATMActionButtonClick = (actionName: ATMActionType) => {
    selectATMAction(actionName);
  };

  return (
    <Grid container spacing={1}>
      {atmActions.map(atmAction => {
        const { id, label, actionName } = atmAction;
        return (
          <ActionButton
            label={label}
            key={id}
            onClick={() => handleATMActionButtonClick(actionName)}
          />
        );
      })}
    </Grid>
  );
}
