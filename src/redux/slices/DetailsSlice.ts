import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../App';
import { RootState } from '../store';

export type DetailsState = {
  value?: Planet;
  isOpen: boolean;
  url: string;
};

const initialState: DetailsState = {
  isOpen: false,
  url: '',
};

export const detailsSlice = createSlice({
  name: 'currentPlanet',
  initialState,
  reducers: {
    setCurrentPlanet: (state: DetailsState, action: PayloadAction<Planet>) => {
      return { ...state, value: action.payload };
    },

    setCurrentUrl: (state: DetailsState, action: PayloadAction<string>) => {
      return { ...state, url: action.payload };
    },
  },
});

export const { setCurrentPlanet, setCurrentUrl } = detailsSlice.actions;
export const getCurrentPlanet = (state: RootState) => state.details.value;
export default detailsSlice.reducer;
