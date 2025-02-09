import './cardList.css';
import { Planet } from './App';
import { Link, useNavigate } from 'react-router';
interface CardListProps {
  planets: Planet[];
}

export default function CardList(props: CardListProps) {
  const { planets } = props;
  const navigate = useNavigate();

  return (
    <>
      <table
        onClick={(e) => {
          if (e.target instanceof Element && e.target.tagName != 'A')
            navigate('/');
        }}
      >
        <tbody>
          <tr>
            <th className="w textStart">Name</th>
            <th className="textStart">Description</th>
          </tr>
          {planets.map((item: Planet, index: number) => (
            <tr key={index} className="w textStart">
              <td>
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
    </>
  );
}
