import search from '/search.svg';
import './search.css';
import { useAppSelector } from './redux/hooks';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getSearchTerm, setCountries, setSearchTerm } from './redux/slice';
import { useLazyGetCountriesQuery } from './redux/api';

export default function Search() {
	const searchTerm = useAppSelector(getSearchTerm);
	const dispatch = useDispatch();
	const [localSearchTerm, setLocalSearchTerm] = useState(searchTerm);
	const [getCountries, result] = useLazyGetCountriesQuery();
	const { data: countries, status } = result;
	useEffect(() => {
		if (status === 'fulfilled') {
			dispatch(setCountries(countries || []));
		};
	}, [searchTerm, status]);

	return (
		<div className="topControls">
			<input
				value={localSearchTerm}
				onInput={(e: React.FormEvent<HTMLInputElement>) => {
					setLocalSearchTerm(e.currentTarget.value);
				}}
				type="text"
			/>
			<button
				type="submit"
				onClick={() => {
					dispatch(setSearchTerm(localSearchTerm));
					getCountries(localSearchTerm);
				}}
			>
				<img src={search} className="search" alt="search" />
			</button>
		</div>
	);
}