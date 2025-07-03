import { useCallback, useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useATMContext } from './context/useATMContext';
import { ATMActions, ATMKeyboard, ATMDisplay } from './components';
import type { ATMKeyboardKey } from './types';

export function ATMContainer() {
  const [atmInputValue, setAtmInputValue] = useState<string>('');
  const { selectedATMAction, submitRequestedMoneyValue, cleanupActionStatus } = useATMContext();

  useEffect(() => {
    setAtmInputValue('');
    cleanupActionStatus();
  }, [selectedATMAction, cleanupActionStatus]);

  const handleKeyPress = useCallback(
    (key: ATMKeyboardKey) => {
      switch (key) {
        case 'C':
          setAtmInputValue('');
          break;
        case 'Enter':
          submitRequestedMoneyValue(parseFloat(atmInputValue));
          setAtmInputValue('');
          break;
        case '<':
          setAtmInputValue(prev => (prev ? prev.slice(0, -1) : ''));
          break;
        default:
          setAtmInputValue(prev => (prev ? prev + key : key));
      }
    },
    [atmInputValue, submitRequestedMoneyValue]
  );

  return (
    <Container>
      <Typography variant="h1" sx={{ fontSize: 32 }}>
        - ATM -
      </Typography>

      <ATMActions />
      <ATMDisplay inputValue={atmInputValue} />
      <ATMKeyboard onKeyPress={handleKeyPress} />
    </Container>
  );
}
