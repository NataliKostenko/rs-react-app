import { useAppSelector } from './redux/hooks';
import { getIsLoading } from "./redux/slices/SearchSlice";

export default function Overlay() {
  const isLoading = useAppSelector(getIsLoading);
  return (
    <div
      className="overlay"
      style={{ display: isLoading ? 'block' : 'none' }}
    ></div>
  );
}
