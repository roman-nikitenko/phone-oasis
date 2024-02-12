import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phones } from '../types/phones.ts';

const initialState: Phones[] = [];

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action: PayloadAction<Phones>) => {
      const newPhone = action.payload;
      const existPhone = state.find((phone) => phone.id === newPhone.id);
      if (!existPhone) {
        state.push(newPhone);
      } else {
        existPhone.quantity++;
      }
    },
    plusQuantity: (state, action: PayloadAction<number>) => {
      const existPhone = state.find((phone) => phone.id === action.payload);
      if (existPhone) {
        existPhone.quantity++;
      }
    },
    minusQuantity: (state, action: PayloadAction<number>) => {
      const existPhone = state.find((phone) => phone.id === action.payload);
      if (existPhone) {
        existPhone.quantity--;
      }
    },
    deleteFromBasket: (state, action: PayloadAction<number>) => {
      return state.filter((phone) => phone.id !== action.payload);
    },
  },
});

export default basketSlice.reducer;
export const { actions } = basketSlice;
