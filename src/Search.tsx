import search from '/search.svg';
import './Search.css';
import { useAppSelector } from './redux/hooks';
import { getSearchTerm, setSearchTerm } from './redux/slices/SearchSlice';
import { useDispatch } from 'react-redux';

export default function Search() {
  const searchTerm = useAppSelector(getSearchTerm);
  const dispatch = useDispatch();

  const handleClick = () => {
    const term = (
      document.getElementById('searchTerm') as HTMLInputElement
    )?.value.trim();
    dispatch(setSearchTerm(term));
  };

  return (
    <div className="topControls">
      <input defaultValue={searchTerm} id="searchTerm" type="text" />
      <button type="submit" onClick={handleClick}>
        <img src={search} className="search" alt="search" />
      </button>
    </div>
  );
}
