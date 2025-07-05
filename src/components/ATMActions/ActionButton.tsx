import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import type { ATMActionButton } from './types';

export function ActionButton({ label, onClick, sx }: ATMActionButton) {
  return (
    <Grid size={4}>
      <Button
        variant="contained"
        fullWidth
        onClick={onClick}
        sx={{ height: '100%', minHeight: 60, ...sx }}
      >
        {label}
      </Button>
    </Grid>
  );
}
