/* import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planet } from '../../App';

const initialState: Planet[] = [];

export const planetsSlice = createSlice({
  name: 'listPlanets',
  initialState,
  reducers: {
    setListPlanets: (state: Planet[], action: PayloadAction<Planet[]>) => {
      return action.payload;
    },
  },
});

export const { setListPlanets } = planetsSlice.actions;

export default planetsSlice.reducer; */
