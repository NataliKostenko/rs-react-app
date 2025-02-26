import search from '/search.svg';
import './Search.css';
import { useAppSelector } from './redux/hooks';
import { getSearchTerm, setSearchTerm } from './redux/slices/SearchSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export default function Search() {
  const searchTerm = useAppSelector(getSearchTerm);
  const dispatch = useDispatch();
  const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);

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
        onClick={() => dispatch(setSearchTerm(localSearchTerm))}
      >
        <img src={search} className="search" alt="search" />
      </button>
    </div>
  );
}
