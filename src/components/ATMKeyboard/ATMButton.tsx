import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import type { ATMButtonProps } from './types';

export function ATMButton({ buttonKey, onKeyPress, disabled }: ATMButtonProps) {
  const shouldDisplayEmptyButton = buttonKey === '0';
  return (
    <>
      {shouldDisplayEmptyButton && <EmptyButtonSpace />}
      <Grid size={4} key={buttonKey}>
        <Button
          variant="contained"
          fullWidth
          sx={{ aspectRatio: '1 / 1', fontSize: 18 }}
          onClick={() => onKeyPress(buttonKey)}
          disabled={disabled}
        >
          {buttonKey}
        </Button>
      </Grid>
    </>
  );
}

function EmptyButtonSpace() {
  return (
    <Grid size={4}>
      <Button variant="contained" fullWidth sx={{ aspectRatio: '1 / 1', fontSize: 18 }} disabled />
    </Grid>
  );
}
