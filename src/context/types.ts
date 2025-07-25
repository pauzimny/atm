import type { ATMActionStatus, ATMActionType } from '../types';

export type ATMMachineProviderProps = {
  formattedUserBalance: string;
  selectATMAction: (newSelectedAction: ATMActionType) => void;
  submitRequestedMoneyValue: (value: number) => void;
  cleanupActionStatus: () => void;
  clearAtmSelections: () => void;
  selectedATMAction?: ATMActionType;
  actionStatus?: ATMActionStatus;
};
