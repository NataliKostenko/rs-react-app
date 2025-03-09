import { setSearchTerm } from './redux/slices/SearchSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import useLocalStorage from './useLocalStorage';
import Image from 'next/image';
import search from '../public/search.svg';
const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';

export default function Search() {
  const [storageTerm, setStorageTerm] = useLocalStorage(storageId, '');
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState<string>(storageTerm);

  return (
    <div className="topControls">
      <input
        value={localSearchTerm}
        onInput={(e: React.FormEvent<HTMLInputElement>) => {
          setLocalSearchTerm(e.currentTarget.value);
        }}
        type="text"
      />
      <button
        type="submit"
        onClick={() => {
          setStorageTerm(localSearchTerm);
          dispatch(setSearchTerm(localSearchTerm));
        }}
      >
        <Image src={search} className="search" alt="search" />
      </button>
    </div>
  );
}
