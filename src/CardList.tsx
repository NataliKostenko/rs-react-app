import './cardList.css';
import { Planet } from './App';

interface CardListProps {
  planets: Planet[];
}

export default function CardList(props: CardListProps) {
  return (
    <table>
      <tbody>
        <tr>
          <th className="w textStart">Name</th>
          <th className="textStart">Description</th>
        </tr>
        {props.planets.map((item: Planet, index: number) => (
          <tr key={index} className="w textStart">
            <td>{item.name}</td>
            <td>{`diameter: ${item.diameter}, climate: ${item.climate}, population: ${item.population}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
