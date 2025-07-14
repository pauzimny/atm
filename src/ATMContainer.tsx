import { useCallback, useState } from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useATMContext } from './context/useATMContext';
import { ATMActions, ATMKeyboard, ATMDisplay, ActionButton } from './components';
import { ATM_ACTIONS } from './types';

export function ATMContainer() {
  const [atmInputValue, setAtmInputValue] = useState<string>('');
  const { selectedATMAction, cleanupActionStatus, clearAtmSelections, actionStatus } =
    useATMContext();

  const shouldDisplayKeyboard =
    selectedATMAction && selectedATMAction !== ATM_ACTIONS.DISPLAY_BALANCE && !actionStatus;
  const shouldDisplayActionsButtons = !selectedATMAction;
  const shouldDisplayRepeatButton = !!actionStatus;
  const shouldDisplayCancelButton = !!selectedATMAction;

  const userActionCleanup = useCallback(() => {
    setAtmInputValue('');
    clearAtmSelections();
  }, [clearAtmSelections]);

  const updateInputValue = useCallback((value: string) => {
    setAtmInputValue(value);
  }, []);

  return (
    <Container sx={{ minWidth: { sm: 450 } }}>
      <Typography variant="h1" sx={{ fontSize: 32 }} flexGrow={1}>
        - ATM -
      </Typography>

      <ATMDisplay inputValue={atmInputValue} />
      {shouldDisplayActionsButtons && <ATMActions />}
      {shouldDisplayKeyboard && (
        <ATMKeyboard updateInputValue={updateInputValue} inputValue={atmInputValue} />
      )}
      {shouldDisplayRepeatButton && <ActionButton label="Repeat" onClick={cleanupActionStatus} />}
      {shouldDisplayCancelButton && (
        <ActionButton label="Cancel" onClick={userActionCleanup} sx={{ marginTop: 2 }} />
      )}
    </Container>
  );
}
