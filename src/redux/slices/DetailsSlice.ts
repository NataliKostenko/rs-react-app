import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import Planet from '@/data/Planet';

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
    hiddenDetails: (state: DetailsState, action: PayloadAction<boolean>) => {
      return { ...state, isOpen: action.payload };
    }
  },
});

export const { setCurrentPlanet, setCurrentUrl, hiddenDetails } = detailsSlice.actions;
export const getCurrentPlanet = (state: RootState) => state.details.value;
export default detailsSlice.reducer;
