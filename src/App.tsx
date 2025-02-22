import './App.css';
import Search from './Search';
import CardList from './CardList';
import Overlay from './Overlay';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { Outlet } from 'react-router';
import FlayoutElement from './FlayoutElement';
import Toggler from './Toggler';
import { ThemeContext } from './ThemeContext';

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
  const [overlay, setOverlay] = useState(true);
  const handleSearchErrorClick = () => setOverlay(true);

  useEffect(() => setOverlay(false), [overlay]);

  const [theme, setTheme] = useState('dark');

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <div className={`wrap ${theme}`}>
          <div className="panels">
            <div className="container">
              <Toggler />
              <Search />
              <CardList />
              <FlayoutElement />
              <Pagination />
              <button
                className="errorBoundary"
                onClick={handleSearchErrorClick}
              >
                Error Button
              </button>
            </div>
            <Outlet />
          </div>
          <Overlay isEnabled={overlay} />
        </div>
      </ThemeContext.Provider>
    </>
  );
}
