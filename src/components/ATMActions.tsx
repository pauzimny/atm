import { Button, Grid } from '@mui/material';
import { ATM_ACTIONS, type ATMActionType } from '../types';

const atmActions: (ATMActionButton & { id: number })[] = [
  { id: 1, label: 'Display balance', actionName: ATM_ACTIONS.DISPLAY_BALANCE },
  { id: 2, label: 'Withdraw money', actionName: ATM_ACTIONS.WITHDRAW },
  { id: 3, label: 'Deposit money', actionName: ATM_ACTIONS.DEPOSIT },
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

type ATMActionButton = {
  label: string;
  actionName: ATMActionType;
};

export function ActionButton({ label, actionName }: ATMActionButton) {
  return (
    <Grid size={{ xs: 4 }} sx={{ marginTop: 6 }}>
      <Button
        variant="contained"
        fullWidth
        onClick={() => console.log('actionName', actionName)}
        sx={{ height: '100%', minHeight: 60 }}
      >
        {label}
      </Button>
    </Grid>
  );
}
