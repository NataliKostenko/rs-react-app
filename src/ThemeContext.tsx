import { createContext } from 'react';

interface ThemeContextValue {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export const ThemeContext = createContext({
  theme: 'dark',
} as ThemeContextValue);
