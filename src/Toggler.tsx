import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Toggler() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      className="switch"
      onClick={() => {
        setTheme(theme == 'dark' ? 'light' : 'dark');
      }}
    >
      Switch theme
    </button>
  );
}
