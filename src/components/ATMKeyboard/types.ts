import type { ATMKeyboardKey } from '../../types';

export type ATMKeyboardProps = {
  inputValue: string;
  updateInputValue: (value: string) => void;
};

export type ATMButtonProps = {
  buttonKey: ATMKeyboardKey;
  onKeyClick: (key: ATMKeyboardKey) => void;
  disabled: boolean;
};
