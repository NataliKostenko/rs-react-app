import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

export type State = {
	name: string;
	age: number;
	email: string;
	password: string;
	confirm: string;
};

const initialState: State = {
	name: '',
	age: 0,
	email: '',
	password: '',
	confirm: ''
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state: State, action: PayloadAction<State>) => {
			return { ...state, value: action.payload };
		},
	},
});

export const { setUser } = userSlice.actions;
export const getUser = (state: RootState) => state.user;
export default userSlice.reducer;