import { Container, Typography, TextField } from '@mui/material';
import { ATMKeyboard } from './components';
import { useCallback, useState } from 'react';
import type { ATMKeyboardKey } from './types';
import { getFormattedCurrency } from './helpers';

export function ATMContainer() {
  const [atmInputValue, setAtmInputValue] = useState<string>('');

  const handleKeyPress = useCallback(
    (key: ATMKeyboardKey) => {
      switch (key) {
        case 'C':
          setAtmInputValue('');
          break;
        case 'Enter':
          alert(`Entered value: ${atmInputValue}`);
          setAtmInputValue('');
          break;
        default:
          setAtmInputValue(prev => (prev ? prev + key : key));
      }
    },
    [atmInputValue]
  );

  return (
    <Container>
      <Typography variant="h1">ATM App</Typography>
      <TextField
        label=""
        value={getFormattedCurrency(atmInputValue)}
        fullWidth
        sx={{ marginTop: 4 }}
        slotProps={{
          input: {
            readOnly: true,
            sx: {
              input: {
                textAlign: 'center',
                fontWeight: 'bold',
                fontSize: 24,
              },
            },
          },
        }}
      />

      <ATMKeyboard onKeyPress={handleKeyPress} />
    </Container>
  );
}
