import React, { MouseEventHandler } from 'react';
import search from '/search.svg';
import './Search.css';

interface SearchProps {
  searchTerm: string;
  handleClick: MouseEventHandler<HTMLButtonElement> | undefined;
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
        <button type="submit" onClick={this.props.handleClick}>
          <img src={search} className="search" alt="search" />
        </button>
      </div>
    );
  }
}
export default Search;
