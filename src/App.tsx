import './App.css';
import Search from './Search';
import CardList from './CardList';
import Overlay from './Overlay';
import { useEffect, useState } from 'react';
import useSearchTerm from './useSearchTerm';

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
  const [planets, setPlanets] = useState(Array<Planet>());
  const [overlay, setOverlay] = useState(true);
  const [actualUrl, setActualUrl] = useState(correctUrl);
  const [searchTerm, setSearchTerm] = useSearchTerm(storageId);

  const handleSearchClick = () => {
    const term = (
      document.getElementById('searchTerm') as HTMLInputElement
    )?.value.trim();
    setSearchTerm(term);
    setOverlay(true);
    setActualUrl(correctUrl);
  };

  const handleSearchErrorClick = () => {
    setOverlay(true);
    setActualUrl(wrongUrl);
  };

  useEffect(() => {
    const buildUrl = () =>
      searchTerm ? `${actualUrl}&search=${searchTerm}` : actualUrl;

    const requestData = () => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', buildUrl(), false);
      // We need to use sync requests because ErrorBoundary does not catch error in async code.

      let planets = Array<Planet>();
      let isError = false;
      xhr.onload = function () {
        if (xhr.status != 200) {
          isError = true;
        } else {
          planets = JSON.parse(xhr.response).results;
        }
      };

      xhr.onerror = function () {
        throw 'Request failed.';
      };

      xhr.send();

      if (isError) {
        throw `Response code ${xhr.status}`;
      }

      return planets;
    };
    setPlanets(requestData());
  }, [searchTerm, actualUrl]);
  useEffect(() => setOverlay(false), [overlay]);

  return (
    <>
      <div className="container">
        <Search searchTerm={searchTerm} onClick={handleSearchClick} />
        <CardList planets={planets} />
        <button className="errorBoundary" onClick={handleSearchErrorClick}>
          Error Button
        </button>
      </div>
      <Overlay isEnabled={overlay} />
    </>
  );
}
