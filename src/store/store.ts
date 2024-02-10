import { configureStore } from '@reduxjs/toolkit';
import phonesReducer from './phonesSlice.ts';
import basketReducer from './basketSlice.ts';

export const store = configureStore({
  reducer: {
    phones: phonesReducer,
    basket: basketReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
