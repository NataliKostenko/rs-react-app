import { useState } from 'react';

export default function useSearchTerm(
  storageId: string
): [string, (t: string) => void] {
  const initialValue = localStorage[storageId] || '';
  const [termState, setTermState] = useState(initialValue);
  const setSearchTerm = (term: string) => {
    setTermState(term);
    window.localStorage.setItem(storageId, term);
  };
  return [termState, setSearchTerm];
}
