import { useCallback, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useATMContext } from './context/useATMContext';
import { ATMActions, ATMKeyboard, ATMDisplay, ActionButton } from './components';
import { ATM_ACTIONS, type ATMKeyboardKey } from './types';

export function ATMContainer() {
  const [atmInputValue, setAtmInputValue] = useState<string>('');
  const {
    selectedATMAction,
    submitRequestedMoneyValue,
    cleanupActionStatus,
    clearAtmSelections,
    actionStatus,
  } = useATMContext();

  const shouldDisplayKeyboard =
    selectedATMAction && selectedATMAction !== ATM_ACTIONS.DISPLAY_BALANCE && !actionStatus;
  const shouldDisplayActionsButtons = !selectedATMAction;
  const shouldDisplayRepeatButton = !!actionStatus;
  const shouldDisplayCancelButton = !!selectedATMAction;

  const userActionCleanup = useCallback(() => {
    setAtmInputValue('');
    clearAtmSelections();
  }, [clearAtmSelections]);

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
        case '+00':
          setAtmInputValue(prev => (prev ? (parseFloat(prev) * 100).toString() : ''));
          break;
        default:
          setAtmInputValue(prev => (prev ? prev + key : key));
      }
    },
    [atmInputValue, submitRequestedMoneyValue]
  );

  return (
    <Container sx={{ minWidth: { sm: 450 } }}>
      <Typography variant="h1" sx={{ fontSize: 32 }} flexGrow={1}>
        - ATM -
      </Typography>

      <ATMDisplay inputValue={atmInputValue} />
      {shouldDisplayActionsButtons && <ATMActions />}
      {shouldDisplayKeyboard && <ATMKeyboard onKeyPress={handleKeyPress} />}
      {shouldDisplayRepeatButton && <ActionButton label="Repeat" onClick={cleanupActionStatus} />}
      {shouldDisplayCancelButton && (
        <ActionButton label="Cancel" onClick={userActionCleanup} sx={{ marginTop: 2 }} />
      )}
    </Container>
  );
}
