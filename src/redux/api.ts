import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import Country from '../data/Country';

export const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://restcountries.com/v3.1/' }),
	endpoints: (builder) => ({
		getCountries: builder.query<Country[], string>({
			query: (searchTerm) => searchTerm ?
				`name/${searchTerm}` : `all`
		}),
		getFilterRegionCountries: builder.query<Country[], string>({
			query: (filter) =>
				`region/${filter}`
		}),

		getPopulationCountries: builder.query<Country[], string>({
			query: (sort) =>
				`population/${sort}`
		}),
	})
});
export const {
	useGetCountriesQuery, useLazyGetCountriesQuery,
	useGetFilterRegionCountriesQuery, useLazyGetFilterRegionCountriesQuery,
	useGetPopulationCountriesQuery, useLazyGetPopulationCountriesQuery,
} = apiSlice;