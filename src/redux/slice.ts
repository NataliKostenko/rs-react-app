import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import Country from '../data/Country';
import { RootState } from './store';

export type SearchState = {
	searchTerm: string;
	countries: Country[];
};

const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';

const initialState: SearchState = {
	searchTerm: localStorage[storageId] || '',
	countries: []
};

export const searchSlice = createSlice({
	name: 'search',
	initialState,
	reducers: {
		setSearchTerm: (state: SearchState, action: PayloadAction<string>) => {
			window.localStorage.setItem(storageId, action.payload);
			return {
				...state,
				searchTerm: action.payload,
				filter: []
			};
		},

		setCountries: (state: SearchState, action: PayloadAction<Country[]>) => ({ ...state, countries: action.payload }),


	},
});

export const {
	setSearchTerm,
	setCountries,
} = searchSlice.actions;

export const getSearchTerm = (state: RootState) => state.country.searchTerm;
export const getCoutries = (state: RootState) => state.country.countries;
export default searchSlice.reducer;