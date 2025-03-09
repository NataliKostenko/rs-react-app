import { useDispatch } from 'react-redux';
import arrowNext from '../public/arrowNext.svg';
import arrowPrevious from '../public/arrowPrevious.svg';
import { useAppSelector } from './redux/hooks';
import { setCurrentPage } from './redux/slices/SearchSlice';
import Image from 'next/image';

export default function Pagination(props: { hasNext: boolean }) {
  const { hasNext } = props;
  const searchState = useAppSelector((s) => s.search);
  const currentPage = searchState.currentPage;
  const dispatch = useDispatch();

  if (hasNext || currentPage != 1) {
    return (
      <div className="pagination">
        <button
          disabled={currentPage < 2}
          className="arrow"
          onClick={() => dispatch(setCurrentPage(currentPage - 1))}
        >
          <Image src={arrowPrevious} alt="arrowprevious" />
        </button>
        <p>{currentPage}</p>
        <button
          className="arrow"
          onClick={() => dispatch(setCurrentPage(currentPage + 1))}
          disabled={!hasNext}
        >
          <Image src={arrowNext} alt="arrownexts" />
        </button>
      </div>
    );
  }
}
