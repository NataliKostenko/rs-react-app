import './cardList.css';
import { Planet } from './App';
import { Link, useNavigate } from 'react-router';
import { setCurrentPlanet } from './redux/slices/DetailsSlice';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './redux/hooks';
import {
  addSelectedItem,
  getCurrentPage,
  getSearchTerm,
  removeSelectedItem,
  setHasNext,
} from './redux/slices/SearchSlice';
import { useGetPlanetsQuery } from './redux/api';
import { SyntheticEvent, useEffect } from 'react';
import React from 'react';
import { RootState } from './redux/store';

export default function CardList() {
  const searchTerm = useAppSelector(getSearchTerm);
  const currentPage = useAppSelector(getCurrentPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useGetPlanetsQuery({
    searchTerm,
    currentPage,
  }).currentData;
  const planets = data?.results;
  const hasNext = !!data?.next;
  useEffect(() => {
    dispatch(setHasNext(hasNext));
  }, [dispatch, hasNext]);

  const selectedItems = useAppSelector(
    (state: RootState) => state.search.selectedItems
  );
  if (planets?.length) {
    return (
      <table
        onClick={(e) => {
          if (e.target instanceof Element && e.target.tagName != 'A')
            navigate('/');
        }}
      >
        <thead>
          <tr>
            <th></th>
            <th className="w textStart">Name</th>
            <th className="textStart">Description</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((item: Planet, index: number) => (
            <tr
              key={index}
              className="w textStart"
              data-planet={JSON.stringify(item)}
            >
              <td>
                <input
                  checked={
                    selectedItems.findIndex((x) => x.url == item.url) > -1
                  }
                  type="checkbox"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const planetJson =
                      e.target?.parentElement?.parentElement?.dataset['planet'];
                    if (planetJson) {
                      const planet: Planet = JSON.parse(planetJson);
                      if (e.target.checked) dispatch(addSelectedItem(planet));
                      else dispatch(removeSelectedItem(planet.url));
                    }
                  }}
                />
              </td>
              <td
                onClick={(e: SyntheticEvent<HTMLTableCellElement>) => {
                  const planetJson =
                    e.currentTarget?.parentElement?.dataset['planet'];
                  if (planetJson) {
                    const planet: Planet = JSON.parse(planetJson);
                    dispatch(setCurrentPlanet(planet));
                  }
                }}
              >
                <Link
                  to={`details/${item.url.split('/').findLast((e) => !!e)}`}
                >
                  {item.name}
                </Link>
              </td>
              <td>{`diameter: ${item.diameter}, climate: ${item.climate}, population: ${item.population}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>Not found search result</p>;
  }
}
