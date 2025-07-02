import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import type { ATMKeyboardKey } from '../types';
import { ATM_KEYBOARD_KEYS } from '../utils';

type ATMKeyboardProps = {
  onKeyPress: (key: ATMKeyboardKey) => void;
};

export function ATMKeyboard({ onKeyPress }: ATMKeyboardProps) {
  return (
    <Grid container spacing={1} sx={{ maxWidth: 500, margin: 'auto', marginTop: 3 }}>
      {ATM_KEYBOARD_KEYS.map(key => (
        <Grid key={key}>
          <Button
            variant="contained"
            fullWidth
            onClick={() => onKeyPress(key)}
            sx={{ height: 80, width: 80, fontSize: 18 }}
          >
            {key}
          </Button>
        </Grid>
      ))}
    </Grid>
  );
}
