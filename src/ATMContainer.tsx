import { Container, Input, Typography } from '@mui/material';
import { ATMKeyboard } from './components';
import { useCallback, useState } from 'react';
import type { ATMKeyboardKey } from './types';

export function ATMContainer() {
  const [atmInputValue, setAtmInputValue] = useState<string>();

  const handleKeyPress = useCallback(
    (key: ATMKeyboardKey) => {
      if (key === 'C') {
        setAtmInputValue('');
      } else if (key === 'Enter') {
        alert(`Entered value: ${atmInputValue}`);
        setAtmInputValue('');
      } else {
        setAtmInputValue(prev => (prev ? prev + key : key));
      }
    },
    [atmInputValue]
  );

  return (
    <Container>
      <Typography variant="h1">ATM App</Typography>
      <Input value={atmInputValue} fullWidth sx={{ marginTop: 4 }} />
      <ATMKeyboard onKeyPress={handleKeyPress} />
    </Container>
  );
}
