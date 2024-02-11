import { ProductCategory } from './common.ts';

export type Phones = {
  id: number;
  title: string;
  category: ProductCategory;
  price: string;
  forSalePrice: string | null;
  isFavourite: boolean;
  isForSale: boolean;
  isInBasket: boolean;
  image: string;
};
