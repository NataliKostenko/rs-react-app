import { useGetCountriesQuery, useLazyGetPopulationCountriesQuery } from "./redux/api";
import Country from "./data/Country";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCountries } from "./redux/slice";
export default function Sort() {


	const { currentData: countries } = useGetCountriesQuery('');
	const populations = (countries?.map((c: Country) => c.population) || []);
	const [population, setPopulation] = useState(0);
	const dispatch = useDispatch();
	const [getCountriesPopulation, result] = useLazyGetPopulationCountriesQuery();
	const { currentData: countriesPopulation, status } = result;
	useEffect(() => {
		if (status === 'fulfilled') {
			dispatch(setCountries(countriesPopulation || []));
		};
	}, [population, status]);

	const ascending = populations.sort(function (a, b) {
		return a - b;
	});
	const descending = populations.sort(function (a, b) {
		return b - a;
	});
	return <>
		<select name='By population'>
			<option selected>By population</option>
			<option
				onChange={() => {

					getCountriesPopulation(ascending)
				}} >
				ascending
			</option>
			<option
				onChange={() => { getCountriesPopulation(descending) }}
			>descending</option>
		</select>
	</>
}