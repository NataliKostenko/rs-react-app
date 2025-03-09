import CardRow from './CardRow';
import Planet from './data/Planet';

export default function CardList(props: { planets: Planet[] }) {

  const { planets } = props;

  if (planets?.length) {
    return (
      <table
        id="table">
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
    )
  } else {
    return <p>Not found search result</p>
  }
}