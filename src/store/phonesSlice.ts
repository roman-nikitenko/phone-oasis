import { Phones } from '../types/phones.ts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Phone1 from '../assets/phones/image1.jpeg';
import Phone2 from '../assets/phones/image2.jpeg';
import Phone3 from '../assets/phones/image3.jpeg';
import Phone4 from '../assets/phones/image4.jpeg';
import Phone5 from '../assets/phones/image5.jpeg';
import Phone6 from '../assets/phones/image6.jpeg';
import Phone7 from '../assets/phones/image7.jpeg';

const initialState: Phones[] = [
  {
    id: 1,
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: 899,
    forSalePrice: 799,
    image: Phone1,
    quantity: 1,
  },
  {
    id: 2,
    title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: 1999,
    forSalePrice: 1199,
    image: Phone2,
    quantity: 1,
  },
  {
    id: 3,
    title: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: true,
    price: 899,
    forSalePrice: 799,
    image: Phone3,
    quantity: 1,
  },
  {
    id: 4,
    title: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: 859,
    forSalePrice: 899,
    image: Phone4,
    quantity: 1,
  },
  {
    id: 5,
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: true,
    price: 899,
    forSalePrice: 799,
    image: Phone5,
    quantity: 1,
  },
  {
    id: 6,
    title: 'Apple iPhone 11 256GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: false,
    price: 899,
    forSalePrice: null,
    image: Phone6,
    quantity: 1,
  },
  {
    id: 7,
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: false,
    price: 1299,
    forSalePrice: null,
    image: Phone7,
    quantity: 1,
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
