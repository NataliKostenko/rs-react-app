import './App.css';
import Search from './Search';
import CardList from './CardList';
import Overlay from './Overlay';
import { useEffect, useState } from 'react';
import useSearchTerm from './useSearchTerm';
import Pagination from './Pagination';
import { Outlet } from 'react-router';

const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';
const correctUrl = 'https://swapi.dev/api/planets/?format=json';
const wrongUrl = 'https://swapi.dev/api/plonets/?format=json';

export interface Planet {
  name: string;
  diameter: string;
  climate: string;
  population: string;
  url: string;
}

export interface ApiResponseData {
  ApiResponseData: Planet[];
  hasNext: boolean;
}

export default function App() {
  const [ApiResponseData, setApiResponseData] = useState<ApiResponseData>({
    ApiResponseData: Array<Planet>(),
    hasNext: false,
  });
  const [overlay, setOverlay] = useState(true);
  const [actualUrl, setActualUrl] = useState(correctUrl);
  const [searchTerm, setSearchTerm] = useSearchTerm(storageId);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePaginationUpClick = () => {
    setOverlay(true);
    setCurrentPage(currentPage + 1);
  };

  const handlePaginationDownClick = () => {
    setOverlay(true);
    setCurrentPage(currentPage - 1);
  };

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
    const buildUrl = () => {
      const result = searchTerm
        ? `${actualUrl}&search=${searchTerm}`
        : actualUrl;

      return `${result}&page=${currentPage}`;
    };

    const requestData = async (): Promise<void> => {
      const response = await fetch(buildUrl());
      const data = await response.json();
      const result = { ApiResponseData: data.results, hasNext: !!data.next };
      setApiResponseData(result);
      history.pushState({}, '', `?page=${currentPage}`);
    };

    requestData();
  }, [searchTerm, actualUrl, currentPage]);

  useEffect(() => setOverlay(false), [overlay]);

  return (
    <>
      <div className="panels">
        <div className="container">
          <Search searchTerm={searchTerm} onClick={handleSearchClick} />
          <CardList planets={ApiResponseData.ApiResponseData} />
          <Pagination
            hasNext={ApiResponseData.hasNext}
            onClickUp={handlePaginationUpClick}
            onClickDown={handlePaginationDownClick}
            currentPage={currentPage}
          />
          <button className="errorBoundary" onClick={handleSearchErrorClick}>
            Error Button
          </button>
        </div>
        <Outlet />
      </div>
      <Overlay isEnabled={overlay} />
    </>
  );
}
