import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import type { SxProps, Theme } from '@mui/material/styles';

export type ATMActionButton = {
  label: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
};

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
