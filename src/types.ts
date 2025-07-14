import { ATM_KEYBOARD_KEYS, ATM_OPS_KEYBOARD_KEYS } from './utils';

type ATMKeyboardNumericKey = (typeof ATM_KEYBOARD_KEYS)[number];

export type ATMOpsKey = (typeof ATM_OPS_KEYBOARD_KEYS)[number];

export type ATMKeyboardKey = ATMKeyboardNumericKey | ATMOpsKey;

export const ATM_ACTIONS = {
  WITHDRAW: 'WITHDRAW',
  DEPOSIT: 'DEPOSIT',
  DISPLAY_BALANCE: 'DISPLAY_BALANCE',
} as const;

export type ATMActionType = (typeof ATM_ACTIONS)[keyof typeof ATM_ACTIONS];

export const ATM_ACTION_STATUS = {
  SUCCESS: 'SUCCESS',
  ERROR_NOT_ENOUGH_BALANCE: 'ERROR_NOT_ENOUGH_BALANCE',
  ERROR_INVALID_VALUE: 'ERROR_INVALID_VALUE',
} as const;

export type ATMActionStatus = (typeof ATM_ACTION_STATUS)[keyof typeof ATM_ACTION_STATUS];
