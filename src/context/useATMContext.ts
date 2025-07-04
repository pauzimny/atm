import { createContext, useContext } from 'react';
import type { ATMMachineProviderProps } from './types';

export const ATMMachineContext = createContext<ATMMachineProviderProps | undefined>(undefined);

export const useATMContext = () => {
  const context = useContext(ATMMachineContext);

  if (!context) {
    throw new Error('useATMContext must be used within ATMMachineContext');
  }

  return context;
};
