import Grid from '@mui/material/Grid';
import { ATM_ACTIONS } from '../types';
import { ActionButton, type ATMActionButton } from './ActionButton';

const atmActions: (ATMActionButton & { id: number })[] = [
  { id: 1, label: 'Balance', actionName: ATM_ACTIONS.DISPLAY_BALANCE },
  { id: 2, label: 'Withdraw', actionName: ATM_ACTIONS.WITHDRAW },
  { id: 3, label: 'Deposit', actionName: ATM_ACTIONS.DEPOSIT },
];

export function ATMActions() {
  return (
    <Grid container spacing={1}>
      {atmActions.map(atmAction => {
        const { id, ...rest } = atmAction;
        return <ActionButton {...rest} key={id} />;
      })}
    </Grid>
  );
}
