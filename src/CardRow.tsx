import { useDispatch } from 'react-redux';
import { useAppSelector } from './redux/hooks';
import {
  addSelectedItem,
  removeSelectedItem,
} from './redux/slices/SearchSlice';
import { RootState } from './redux/store';
import { SyntheticEvent } from 'react';
import { setCurrentPlanet } from './redux/slices/DetailsSlice';
import Planet from './data/Planet';

export default function CardRow(props: { item: Planet }) {
  const { item } = props;
  const selectedItems = useAppSelector(
    (state: RootState) => state.search.selectedItems
  );

  const dispatch = useDispatch();

  return (
    <tr className="w textStart" data-planet={JSON.stringify(item)}>
      <td>
        <input
          checked={selectedItems.findIndex((x) => x.url == item.url) > -1}
          type="checkbox"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            e.stopPropagation();
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
          e.stopPropagation();
          const planetJson = e.currentTarget?.parentElement?.dataset['planet'];
          if (planetJson) {
            const planet: Planet = JSON.parse(planetJson);
            dispatch(setCurrentPlanet(planet));
          }
        }} >
        {item.name}
      </td>
      <td>{`diameter: ${item.diameter}, climate: ${item.climate}, population: ${item.population}`}</td>
    </tr>
  );
}
