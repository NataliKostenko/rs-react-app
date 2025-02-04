import { MouseEventHandler } from 'react';
import search from '/search.svg';
import './Search.css';
interface SearchProps {
  searchTerm: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Search(props: SearchProps) {
  return (
    <div className="topControls">
      <input defaultValue={props.searchTerm} id="searchTerm" type="text" />
      <button type="submit" onClick={props.onClick}>
        <img src={search} className="search" alt="search" />
      </button>
    </div>
  );
}
