import type { ATMKeyboardKey } from '../../types';

export type ATMKeyboardProps = {
  onKeyClick: (key: ATMKeyboardKey) => void;
};

export type ATMButtonProps = {
  buttonKey: ATMKeyboardKey;
  onKeyClick: ATMKeyboardProps['onKeyClick'];
  disabled: boolean;
};
