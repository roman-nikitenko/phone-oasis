import { Phones } from '../types/phones.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: Phones[] = [
  {
    id: 1,
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    isFavourite: false,
    isForSale: false,
    image: 'src/assets/phones/image1.jpeg',
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    isFavourite: false,
    isForSale: true,
    image: 'src/assets/phones/image2.jpeg',
  },
  {
    id: 3,
    title: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
    isFavourite: true,
    isForSale: false,
    image: 'src/assets/phones/image3.jpeg',
  },
  {
    id: 4,
    title: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
    isFavourite: false,
    isForSale: true,
    image: 'src/assets/phones/image4.jpeg',
  },
  {
    id: 5,
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    isFavourite: true,
    isForSale: false,
    image: 'src/assets/phones/image5.jpeg',
  },
  {
    id: 6,
    title: 'Apple iPhone 11 256GB Purple (iMT9G2FS/A)',
    isFavourite: false,
    isForSale: true,
    image: 'src/assets/phones/image6.jpeg',
  },
  {
    id: 7,
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    isFavourite: false,
    isForSale: true,
    image: 'src/assets/phones/image7.jpeg',
  },
];

export const phonesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<number>) => {
      state.map((phone) => {
        if (phone.id === action.payload) {
          phone.isFavourite = !phone.isFavourite;
        }
      });
    },
  },
});

export default phonesSlice.reducer;
export const { actions } = phonesSlice;
