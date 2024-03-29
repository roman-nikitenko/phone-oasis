export type Phones = {
  id: number;
  title: string;
  category: string;
  price: number;
  forSalePrice: number | null;
  isFavourite: boolean;
  isForSale: boolean;
  isInBasket: boolean;
  image: string;
  quantity: number;
};
