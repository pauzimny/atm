import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import type { ATMKeyboardKey } from '../types';
import type { ATMKeyboardProps } from './ATMKeyboard';

type ATMButtonProps = {
  buttonKey: ATMKeyboardKey;
  onKeyPress: ATMKeyboardProps['onKeyPress'];
  disabled: boolean;
};

export function ATMButton({ buttonKey, onKeyPress, disabled }: ATMButtonProps) {
  const shouldDisplayEmptyButton = buttonKey === '0';
  return (
    <>
      {shouldDisplayEmptyButton && <EmptyButtonSpace />}
      <Grid size={{ xs: 4 }} key={buttonKey}>
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

      {shouldDisplayEmptyButton && <EmptyButtonSpace />}
    </>
  );
}

function EmptyButtonSpace() {
  return (
    <Grid size={{ xs: 4 }}>
      <Button variant="contained" fullWidth sx={{ aspectRatio: '1 / 1', fontSize: 18 }} disabled />
    </Grid>
  );
}
