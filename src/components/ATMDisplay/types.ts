import type { ATMActionStatus, ATMActionType } from '../../types';

export type ATMDisplayProps = { inputValue: string };

export type ATMDisplayInputProps = ATMDisplayProps & {
  inputLabel: string;
  actionStatus?: ATMActionStatus;
  actionType?: ATMActionType;
};
