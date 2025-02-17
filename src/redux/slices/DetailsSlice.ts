import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../App';

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

export default detailsSlice.reducer;
