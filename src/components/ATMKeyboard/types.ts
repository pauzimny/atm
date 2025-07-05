import type { ATMKeyboardKey } from '../../types';

export type ATMKeyboardProps = {
  onKeyPress: (key: ATMKeyboardKey) => void;
};

export type ATMButtonProps = {
  buttonKey: ATMKeyboardKey;
  onKeyPress: ATMKeyboardProps['onKeyPress'];
  disabled: boolean;
};
