import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SearchState = {
  searchTerm: string;
  currentPage: number;
  hasNext: boolean;
  selectedItems: string[];
};

const storageId = 'b0a9c80d-0965-4b88-aaca-69df890a1d3b';

const initialState: SearchState = {
  searchTerm: localStorage[storageId] || '',
  currentPage: 1,
  hasNext: false,
  selectedItems: [],
};

export const searchSlice = createSlice({
  name: 'searchTerm',
  initialState,
  reducers: {
    setSearchTerm: (state: SearchState, action: PayloadAction<string>) => {
      window.localStorage.setItem(storageId, action.payload);
      return {
        ...state,
        searchTerm: action.payload,
        currentPage: 1,
        hasNext: false,
      };
    },
    setHasNext: (state: SearchState, action: PayloadAction<boolean>) => {
      return { ...state, hasNext: action.payload };
    },
    setCurrentPage: (state: SearchState, action: PayloadAction<number>) => {
      return { ...state, currentPage: action.payload };
    },
    addSelectedItem: (state: SearchState, action: PayloadAction<string>) => {
      if (state.selectedItems.indexOf(action.payload) > 0) {
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
        selectedItems: state.selectedItems.filter((x) => x != action.payload),
      };
    },
  },
});

export const {
  setSearchTerm,
  setHasNext,
  setCurrentPage,
  addSelectedItem,
  removeSelectedItem,
} = searchSlice.actions;

export const getSearchTerm = (state: RootState) => state.search.searchTerm;
export const getCurrentPage = (state: RootState) => state.search.currentPage;
export const getHasNext = (state: RootState) => state.search.hasNext;

export default searchSlice.reducer;
