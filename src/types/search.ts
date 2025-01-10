import { ChangeEvent } from 'react';

export interface SearchBarProps {
  query: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
}

export interface SearchButtonProps {
  isLoading: boolean;
  disabled: boolean;
}