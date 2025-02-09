import { Link, useLoaderData } from 'react-router';
import './Details.css';

export default function Details() {
  const data = useLoaderData();
  return (
    <div className="details">
      <h2>{data.name}</h2>
      <p>diameter: {data.diameter}</p>
      <p>climate: {data.climate}</p>
      <p>population: {data.population}</p>
      <button>
        <Link to={'/'}>Close</Link>
      </button>
    </div>
  );
}
