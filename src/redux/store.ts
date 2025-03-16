import type { Action, ThunkAction } from '@reduxjs/toolkit';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './slice';

import { listenerMiddleware } from './listenerMiddleware';

const rootReducer = combineReducers({
	user: userReducer,

});

export function setupStore(preloadedState?: Partial<RootState>) {
	return configureStore({
		preloadedState,
		reducer: rootReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware()
				.prepend(listenerMiddleware.middleware)
				.concat(user.middleware),
	});
}

export type AppStore = ReturnType<typeof setupStore>;
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ThunkReturnType = void> = ThunkAction<
	ThunkReturnType,
	RootState,
	unknown,
	Action
>;