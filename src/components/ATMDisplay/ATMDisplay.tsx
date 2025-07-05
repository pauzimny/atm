import { useCallback } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useATMContext } from '../../context/useATMContext';
import { ATM_ACTIONS } from '../../types';
import type { ATMDisplayProps } from './types';
import { ATMDisplayInput } from './ATMDisplayInput';

export function ATMDisplay({ inputValue }: ATMDisplayProps) {
  const { selectedATMAction, formattedUserBalance, actionStatus } = useATMContext();

  const getInputLabelText = useCallback(() => {
    return `Enter amount of money you want to ${selectedATMAction === ATM_ACTIONS.WITHDRAW ? 'withdraw' : 'deposit'}`;
  }, [selectedATMAction]);

  const renderDisplayContent = () => {
    switch (selectedATMAction) {
      case ATM_ACTIONS.DISPLAY_BALANCE:
        return (
          <Typography sx={{ fontSize: 32 }}>
            Balance: <span>{formattedUserBalance}</span>
          </Typography>
        );

      case ATM_ACTIONS.WITHDRAW:
      case ATM_ACTIONS.DEPOSIT:
        return (
          <ATMDisplayInput
            inputValue={inputValue}
            inputLabel={getInputLabelText()}
            actionStatus={actionStatus}
            actionType={selectedATMAction}
          />
        );

      default:
        return <Typography sx={{ fontSize: 32 }}>Select an action</Typography>;
    }
  };

  return (
    <Grid container sx={{ alignItems: 'center', height: 160 }}>
      <Box sx={{ width: '100%' }}>{renderDisplayContent()}</Box>
    </Grid>
  );
}
