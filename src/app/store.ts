import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import recipiesSlice from '../features/recipies/recipiesSlice';

export const store = configureStore({
  reducer: {
    recipies: recipiesSlice
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
