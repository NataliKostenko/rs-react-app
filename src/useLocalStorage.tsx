import { useState } from 'react';

const useLocalStorage = (
  key: string,
  initialValue: string
): [string, (value: string | ((oldState: string) => string)) => void] => {
  const [state, setState] = useState<string>(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.log(error);
    }
  });

  const setValue = (value: string | ((oldState: string) => string)) => {
    try {
      const valueToStore = value instanceof Function ? value(state) : value;
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
      setState(value);
    } catch (error) {
      console.log(error);
    }
  };

  return [state, setValue];
};

export default useLocalStorage;
