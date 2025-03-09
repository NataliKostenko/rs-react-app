import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Planet from '@/data/Planet';

export type SearchState = {
  searchTerm: string;
  currentPage: number;
  hasNext: boolean;
  selectedItems: Planet[];
  planets: Planet[];
  isLoading: boolean;
};

const initialState: SearchState = {
  searchTerm: '',
  currentPage: 1,
  hasNext: false,
  selectedItems: [],
  planets: [],
  isLoading: false,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state: SearchState, action: PayloadAction<string>) => {
      return {
        ...state,
        searchTerm: action.payload,
        currentPage: 1,
        hasNext: false,
        selectedItems: [],
      };
    },
    setHasNext: (state: SearchState, action: PayloadAction<boolean>) => {
      return { ...state, hasNext: action.payload };
    },
    setCurrentPage: (state: SearchState, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    addSelectedItem: (state: SearchState, action: PayloadAction<Planet>) => {
      if (
        state.selectedItems
          .map((planet) => planet.url)
          .indexOf(action.payload.url) > 0
      ) {
        return { ...state };
      }

      return {
        ...state,
        selectedItems: [...state.selectedItems, action.payload],
      };
    },
    removeSelectedItem: (state: SearchState, action: PayloadAction<string>) => {
      return {
        ...state,
        selectedItems: state.selectedItems.filter(
          (x) => x.url != action.payload
        ),
      };
    },
    clearSelectedItems: (state: SearchState) => {
      return { ...state, selectedItems: [] };
    },
    setIsLoading: (state: SearchState, action: PayloadAction<boolean>) => {
      return { ...state, isLoading: action.payload };
    },
    setPlanets: (state: SearchState, action: PayloadAction<Planet[]>) => {
      return { ...state, planets: action.payload };
    },
  }
});

export const {
  setSearchTerm,
  setHasNext,
  setCurrentPage,
  addSelectedItem,
  removeSelectedItem,
  clearSelectedItems,
  setIsLoading,
  setPlanets,
} = searchSlice.actions;

export const getSearchTerm = (state: RootState) => state.search.searchTerm;
export const getCurrentPage = (state: RootState) => state.search.currentPage;
export const getHasNext = (state: RootState) => state.search.hasNext;
export const getIsLoading = (state: RootState) => state.search.isLoading;
//export const getPlanets = (state: RootState) => state.search.planets;

export default searchSlice.reducer;
