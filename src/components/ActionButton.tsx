import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { useATMContext } from '../context/useATMContext';
import type { ATMActionType } from '../types';

export type ATMActionButton = {
  label: string;
  actionName: ATMActionType;
};

export function ActionButton({ label, actionName }: ATMActionButton) {
  const { selectATMAction } = useATMContext();

  return (
    <Grid size={{ xs: 4 }} sx={{ marginTop: 6 }}>
      <Button
        variant="contained"
        fullWidth
        onClick={() => selectATMAction(actionName)}
        sx={{ height: '100%', minHeight: 60 }}
      >
        {label}
      </Button>
    </Grid>
  );
}
