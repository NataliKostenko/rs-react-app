import { Link } from 'react-router';
import './Details.css';
import { useAppSelector } from './redux/hooks';
import { getCurrentPlanet } from './redux/slices/DetailsSlice';

export default function Details() {
  const currentPlanet = useAppSelector(getCurrentPlanet);

  return (
    <div className="details">
      <h2>{currentPlanet?.name}</h2>
      <p>diameter: {currentPlanet?.diameter}</p>
      <p>climate: {currentPlanet?.climate}</p>
      <p>population: {currentPlanet?.population}</p>
      <button>
        <Link to={'/'}>Close</Link>
      </button>
    </div>
  );
}
