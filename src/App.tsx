import './App.css';
import Search from './Search';
import CardList from './CardList';
import ErrorBoundary from './ErrorBoundary';
import Overlay from './Overlay';
import { useEffect, useState } from 'react';

const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';
const correctUrl = 'https://swapi.dev/api/planets/?format=json';
const wrongUrl = 'https://swapi.dev/api/plonets/?format=json';

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
}

export default function App() {
  const [overlay, setOverlay] = useState(true);
  const [actualUrl, setActualUrl] = useState(correctUrl);
  const [searchTerm, setSearchTerm] = useState(localStorage[storageId] || '');

  const handleSearchClick = () => {
    const searchTerm = (
      document.getElementById('searchTerm') as HTMLInputElement
    )?.value.trim();
    localStorage[storageId] = searchTerm;
    setOverlay(true);
    setActualUrl(correctUrl);
    setSearchTerm(searchTerm);
  };

  const handleSearchErrorClick = () => {
    setOverlay(true);
    setActualUrl(wrongUrl);
  };

  useEffect(() => setOverlay(false), [overlay]);

  return (
    <>
      <div className="container">
        <Search searchTerm={searchTerm} handleClick={handleSearchClick} />
        <ErrorBoundary>
          <CardList searchTerm={searchTerm} actualUrl={actualUrl} />
        </ErrorBoundary>
        <button className="errorBoundary" onClick={handleSearchErrorClick}>
          Error Button
        </button>
      </div>
      <Overlay isEnabled={overlay} />
    </>
  );
}
