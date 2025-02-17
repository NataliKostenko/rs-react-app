import './cardList.css';
import { Planet } from './App';
import { Link, useNavigate } from 'react-router';
import { setCurrentUrl } from './redux/slices/DetailsSlice';
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
import { useEffect } from 'react';
import React from 'react';
import { RootState } from './redux/store';

export default function CardList() {
  const searchTerm = useAppSelector(getSearchTerm);
  const currentPage = useAppSelector(getCurrentPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useGetPlanetsQuery({ searchTerm, currentPage }).currentData;
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
            <tr key={index} className="w textStart">
              <td>
                <input
                  data-planet-url={item.url}
                  checked={selectedItems.findIndex((x) => x == item.url) > -1}
                  type="checkbox"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const planetUrl = e.target?.dataset['planetUrl'];
                    if (planetUrl) {
                      if (e.target.checked)
                        dispatch(addSelectedItem(planetUrl));
                      else dispatch(removeSelectedItem(planetUrl));
                    }
                  }}
                />
              </td>
              <td
                onClick={() => {
                  dispatch(
                    setCurrentUrl(
                      `https://swapi.dev/api/planets/${item.url.split('/').findLast((e) => !!e)}`
                    )
                  );
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
