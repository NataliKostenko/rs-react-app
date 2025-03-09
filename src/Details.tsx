import { useAppSelector } from '@/redux/hooks';
import { getCurrentPlanet } from '@/redux/slices/DetailsSlice';
import Link from 'next/link';

export default function Details() {

  const currentPlanet = useAppSelector(getCurrentPlanet);
  if (currentPlanet) {
    return (
      <div className="details">
        <h2>{currentPlanet?.name}</h2>
        <p>diameter: {currentPlanet?.diameter}</p>
        <p>climate: {currentPlanet?.climate}</p>
        <p>population: {currentPlanet?.population}</p>
        <Link href={'/'}> <button >
          Close
        </button></Link>
      </div>
    );
  } return null;
}
