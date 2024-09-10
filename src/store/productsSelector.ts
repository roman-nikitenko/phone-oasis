import { ProductCategory } from 'types/common';

export const selectProductsByCategoryName = (productType: string) => {
  return (state: any) => {
    switch (productType) {
      case ProductCategory.PHONES:
        return state.phones;
      case ProductCategory.TABLETS:
        return state.tablets;
      case ProductCategory.ACCESSORIES:
        return state.accessories;
      default:
        return state.phones;
    }
  };
};
