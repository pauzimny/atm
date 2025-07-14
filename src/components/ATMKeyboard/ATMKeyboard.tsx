import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { ATMButton } from './ATMButton';
import { ATM_KEYBOARD_KEYS, ATM_OPS_KEYBOARD_KEYS } from '../../utils';
import type { ATMKeyboardKey, ATMOpsKey } from '../../types';
import { useATMContext } from '../../context/useATMContext';
import type { ATMKeyboardProps } from './types';
import { useCallback } from 'react';

export function ATMKeyboard({ updateInputValue, inputValue }: ATMKeyboardProps) {
  const { selectedATMAction, submitRequestedMoneyValue } = useATMContext();

  const isButtonDisabled = !selectedATMAction;

  const getButtonColor = (buttonKey: ATMOpsKey) => {
    switch (buttonKey) {
      case 'Enter':
        return 'success';
      case 'C':
        return 'error';
      case '<':
        return 'warning';
      default:
        return;
    }
  };

  const handleKeyClick = useCallback(
    (key: ATMKeyboardKey) => {
      switch (key) {
        case 'C':
          updateInputValue('');
          break;
        case 'Enter':
          submitRequestedMoneyValue(parseFloat(inputValue));
          updateInputValue('');
          break;
        case '<':
          updateInputValue(inputValue ? inputValue.slice(0, -1) : '');
          break;
        case '+00':
          updateInputValue(inputValue ? (parseFloat(inputValue) * 100).toString() : '');
          break;
        default:
          updateInputValue(inputValue ? inputValue + key : key);
      }
    },
    [inputValue, updateInputValue, submitRequestedMoneyValue]
  );

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
              onKeyClick={handleKeyClick}
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
                color={getButtonColor(key)}
                onClick={() => handleKeyClick(key)}
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
