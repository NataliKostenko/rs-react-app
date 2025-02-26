import { useDispatch } from 'react-redux';
import './Pagination.css';
import arrowNext from './assets/arrowNext.svg';
import arrowPrevious from './assets/arrowPrevious.svg';
import { useAppSelector } from './redux/hooks';
import { setCurrentPage } from './redux/slices/SearchSlice';

export default function Pagination() {
  const searchState = useAppSelector((s) => s.search);
  const currentPage = searchState.currentPage;
  const hasNext = searchState.hasNext;
  const dispatch = useDispatch();

  if (hasNext || currentPage != 1) {
    return (
      <div className="pagination">
        <button
          disabled={currentPage < 2}
          className="arrow"
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        >
          <img src={arrowPrevious} alt="arrowprevious" />
        </button>
        <p>{currentPage}</p>
        <button
          className="arrow"
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={!hasNext}
        >
          <img src={arrowNext} alt="arrownexts" />
        </button>
      </div>
    );
  }
}
