import React, { ChangeEventHandler, MouseEventHandler } from 'react';
import search from '/search.svg';
import './Search.css';

interface SearchProps {
  searchTerm: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

class Search extends React.Component<SearchProps> {
  render() {
    return (
      <div className="topControls">
        <input
          defaultValue={this.props.searchTerm}
          id="searchTerm"
          type="text"
        />
        <button type="submit" onClick={this.props.onClick}>
          <img src={search} className="search" alt="search" />
        </button>
      </div>
    );
  }
}
export default Search;
