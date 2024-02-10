import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phones } from '../types/phones.ts';

const initialState: Phones[] = [];

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Phones>) => {
      state.push(action.payload);
    },
    deleteFromBasket: (state, action: PayloadAction<number>) => {
      return state.filter((phone) => phone.id !== action.payload);
    },
  },
});

export default basketSlice.reducer;
export const { actions } = basketSlice;
