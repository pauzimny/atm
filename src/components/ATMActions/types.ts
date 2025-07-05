import type { SxProps, Theme } from '@mui/material/styles';

export type ATMActionButton = {
  label: string;
  onClick: () => void;
  sx?: SxProps<Theme>;
};
