import './filter.css';
import Country from "./data/Country";
import { useGetCountriesQuery, useLazyGetFilterRegionCountriesQuery } from "./redux/api";
import { setCountries } from './redux/slice';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

export default function Filter() {

	const { currentData: countries } = useGetCountriesQuery('');
	const regions = [...new Set(countries?.map((c: Country) => c.region) || [])];

	const [region, setRegion] = useState('Region');
	const dispatch = useDispatch();
	const [getCountriesByRegion, result] = useLazyGetFilterRegionCountriesQuery();
	const { currentData: countriesByRegion, status } = result;
	useEffect(() => {
		if (status === 'fulfilled') {
			dispatch(setCountries(countriesByRegion || []));
		};
	}, [region, status]);

	return <>
		<ul className='menu'>
			<li><a href='#'>{region}</a>
				<ul>
					{regions.map((item: string, index: number) => (
						<li key={index}><a href='#'
							onClick={() => {
								setRegion(item);
								getCountriesByRegion(item);
							}}
						>{item}</a></li>))}
				</ul>
			</li>
		</ul>
	</>
}