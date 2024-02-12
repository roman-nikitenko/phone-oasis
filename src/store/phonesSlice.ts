import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Phones } from 'types/phones.ts';
import { initialState } from './PhonesData.ts';

export const phonesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state: Phones[], action: PayloadAction<number>): void => {
      state.map((phone: Phones): void => {
        if (phone.id === action.payload) {
          phone.isFavourite = !phone.isFavourite;
        }
      });
    },
    addToBasket: (state: Phones[], action: PayloadAction<number>): void => {
      state.map((phone: Phones): void => {
        if (phone.id === action.payload) {
          phone.isInBasket = !phone.isInBasket;
        }
      });
    },
  },
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;
