import './cardList.css';
import { Planet } from './App';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useAppSelector } from './redux/hooks';
import {
  getCurrentPage,
  getSearchTerm,
  setHasNext,
} from './redux/slices/SearchSlice';
import { useGetPlanetsQuery } from './redux/api';
import { useEffect } from 'react';
import CardRow from './CardRow';

export default function CardList() {
  const searchTerm = useAppSelector(getSearchTerm);
  const currentPage = useAppSelector(getCurrentPage);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const data = useGetPlanetsQuery({
    searchTerm,
    currentPage,
  });
  const planets = data.currentData?.results;
  const hasNext = !!data.currentData?.next;
  useEffect(() => {
    dispatch(setHasNext(hasNext));
  }, [dispatch, hasNext]);

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
            <CardRow key={index} item={item} />
          ))}
        </tbody>
      </table>
    );
  } else {
    return <p>Not found search result</p>;
  }
}
