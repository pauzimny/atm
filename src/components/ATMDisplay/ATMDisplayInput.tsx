import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ATMDisplayInputProps } from './types';
import { isEmpty } from '../../guards';
import { getFormattedCurrency } from '../../helpers';
import { StatusMessages } from './StatusMessages';

export function ATMDisplayInput({
  inputValue,
  inputLabel,
  actionStatus,
  actionType,
}: ATMDisplayInputProps) {
  const displayLabel = !actionStatus && isEmpty(inputValue);
  const displayValue = !displayLabel && !isEmpty(inputValue);

  return (
    <Box width={'100%'} fontSize={24}>
      {displayLabel && <Typography>{inputLabel}</Typography>}
      {displayValue && getFormattedCurrency(parseFloat(inputValue))}
      <StatusMessages actionStatus={actionStatus} actionType={actionType} />
    </Box>
  );
}
