
import Toggler from "@/Toggler";
import CardList from "@/CardList";
import FlayoutElement from "@/FlayoutElement";
import Pagination from "@/Pagination";
import Details from "@/Details";
import getPlanets from "@/data/getPlanets";
import Search from "@/Search";
import Planet from '@/data/Planet';
import { useEffect, useState } from "react";
import { useAppSelector } from "@/redux/hooks";
import Overlay from "@/Overlay";
import { setIsLoading } from "@/redux/slices/SearchSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const searchState = useAppSelector((s) => s.search);
  const searchTerm = searchState.searchTerm;
  const pageNumber = searchState.currentPage;
  const dispatch = useDispatch();
  useEffect(() => {
    async function getData() {
      dispatch(setIsLoading(true));
      const { results, next } = await getPlanets(searchTerm, pageNumber);
      setPlanets(results);
      setHasNext(!!next);
      dispatch(setIsLoading(false));
    };
    getData();
  }, [searchTerm, pageNumber, dispatch]);

  return (
    <><div className='panels'>
      <div className='container'>
        <Toggler />
        <Search />
        <CardList planets={planets} />
        <FlayoutElement />
        <Pagination hasNext={hasNext} />
        <button
          className="errorBoundary"
          onClick={() => { throw new Error(); }}
        >
          Error Button
        </button>
      </div>
      <Details />
    </div><Overlay /></>
  );
}

