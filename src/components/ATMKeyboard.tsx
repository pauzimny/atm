import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ATMButton } from './ATMButton';
import { ATM_KEYBOARD_KEYS, ATM_OPS_KEYBOARD_KEYS } from '../utils';
import type { ATMKeyboardKey } from '../types';
import { useATMContext } from '../context/useATMContext';

export type ATMKeyboardProps = {
  onKeyPress: (key: ATMKeyboardKey) => void;
};

export function ATMKeyboard({ onKeyPress }: ATMKeyboardProps) {
  const { selectedATMAction } = useATMContext();

  const isButtonDisabled = !selectedATMAction;

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      sx={{ maxWidth: 400, margin: 'auto', paddingBottom: 4 }}
    >
      <Grid size={9}>
        <Grid container spacing={1}>
          {ATM_KEYBOARD_KEYS.map(buttonKey => (
            <ATMButton
              buttonKey={buttonKey}
              onKeyPress={onKeyPress}
              key={buttonKey}
              disabled={isButtonDisabled}
            />
          ))}
        </Grid>
      </Grid>

      <Grid size={3}>
        <Grid container direction="column" justifyContent={'space-between'} height={'100%'}>
          {ATM_OPS_KEYBOARD_KEYS.map(key => (
            <Grid key={key} height={'32%'}>
              <Button
                variant="contained"
                fullWidth
                sx={{ height: '100%', fontSize: 20 }}
                color={key === 'Enter' ? 'success' : key === 'C' ? 'error' : 'warning'}
                onClick={() => onKeyPress(key)}
              >
                {key}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
