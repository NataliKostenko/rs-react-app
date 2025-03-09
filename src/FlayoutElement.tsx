import { RootState } from './redux/store';
import { useAppSelector } from './redux/hooks';
import { clearSelectedItems } from './redux/slices/SearchSlice';
import { useDispatch } from 'react-redux';
import { SyntheticEvent } from 'react';

export default function FlayoutElement() {
  const selectedItems = useAppSelector(
    (state: RootState) => state.search.selectedItems
  );
  const count = selectedItems.length;
  const dispatch = useDispatch();
  const handleClick = (e: SyntheticEvent<HTMLAnchorElement>) => {
    let content = 'name, url, diameter, climate, population \n';
    content += selectedItems
      .map(
        (planet) =>
          `${planet.name}, ${planet.url}, ${planet.diameter}, ${planet.climate}, ${planet.population}.`
      )
      .join('\n');
    const blob = new Blob([content], { type: 'text/csv;charset=utf-8' });
    const objUrl = URL.createObjectURL(blob);
    const fileName = `${count}_planets.csv`;
    e.currentTarget.download = fileName;
    e.currentTarget.href = objUrl;
  };

  if (count == 0) return null;
  return (
    <div className="flayout">
      <div>Selected {count} elements</div>
      <button onClick={() => dispatch(clearSelectedItems())}>
        Unselect all
      </button>
      <button>
        <a onClick={handleClick}>Download</a>
      </button>
    </div>
  );
}
