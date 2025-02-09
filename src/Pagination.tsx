import './Pagination.css';
import { MouseEventHandler } from 'react';
import arrowNext from './assets/arrowNext.svg';
import arrowPrevious from './assets/arrowPrevious.svg';

interface PaginationProps {
  onClickUp: MouseEventHandler<HTMLButtonElement>;
  onClickDown: MouseEventHandler<HTMLButtonElement>;
  hasNext: boolean;
  currentPage: number;
}
export default function Pagination(props: PaginationProps) {
  const { onClickUp, onClickDown, hasNext, currentPage } = props;
  if (hasNext || currentPage != 1) {
    return (
      <div className="pagination">
        <button
          disabled={currentPage < 2}
          className="arrow"
          onClick={onClickDown}
        >
          <img src={arrowPrevious} alt="arrowprevious" />
        </button>
        <p>{currentPage}</p>
        <button className="arrow" onClick={onClickUp} disabled={!hasNext}>
          <img src={arrowNext} alt="arrownexts" />
        </button>
      </div>
    );
  }
}
