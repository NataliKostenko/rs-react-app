import { Link } from 'react-router';
import './Details.css';
import { Planet } from './App';
import { useAppSelector } from './redux/hooks';
import { getCurrentPlanet } from './redux/slices/DetailsSlice';

export default function Details() {
  const CurrentPlanet = useAppSelector(getCurrentPlanet);

  const data: Planet = {
    name: CurrentPlanet.name,
    diameter: CurrentPlanet.diameter,
    climate: CurrentPlanet.climate,
    population: CurrentPlanet.population,
    url: CurrentPlanet.url,
  };
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
