import { ATM_KEYBOARD_KEYS, ATM_OPS_KEYBOARD_KEYS } from './utils';

type ATMKeyboardNumericKey = (typeof ATM_KEYBOARD_KEYS)[number];

type ATMOpsKey = (typeof ATM_OPS_KEYBOARD_KEYS)[number];

export type ATMKeyboardKey = ATMKeyboardNumericKey | ATMOpsKey;
