import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button.tsx';
import { Phones } from 'types/phones.ts';
import LikeIcon from 'assets/like.svg';
import LikeIconFilled from 'assets/like-filled.svg';

import { useAppDispatch } from '../../hooks/hooks.ts';
import { actions } from '../../store/phonesSlice.ts';
import { Phones } from '../../types/phones.ts';

type Props = {
  phone: Phones;
  offset?: number;
};

export const ProductCard: React.FC<Props> = ({ offset, phone }) => {
  const { isFavourite, isForSale, image, id, title } = phone;
  const dispatch = useAppDispatch();

import { transformProductNameIntoPath } from 'utils/transformProductName.ts';

type Props = {
  product: Phones;
  offset?: number;
};

export const ProductCard: React.FC<Props> = ({ product, offset }) => {
  const path =
    product.category && `/${product.category}/${transformProductNameIntoPath(product.title)}`;

  const handleAddToCart = (): void => {};

  const handleAddToFavourites = (): void => {
    dispatch(actions.addFavorite(id));
  };

  return (
    <div
      className="p-[24px] flex flex-col gap-[24px] sm:border sm:border-Elements sm:max-w-[272px] transition duration-700"
      style={{ transform: `translateX(${offset}px)` }}
    >

      <img src={image} alt="product photo" />
      <div>
        <p className="pb-[7px] font-medium text-Primary">{title}</p>

      <img src={product.image} alt="product photo" />
      <div>
        <Link to={path}>
          <p className="pb-[7px] font-medium text-Primary hover:text-Secondary">{product.title}</p>
        </Link>

        <div className="pb-[5px] flex gap-[8px]">
          <h2>{product.price}</h2>
          {product.isForSale && (
            <h2 className="font-medium text-Secondary line-through">{product.forSalePrice}</h2>
          )}
        </div>
        <div className="py-[16px] flex flex-col gap-[8px] border-t border-Elements">
          <p className="small-text text-Secondary flex justify-between">
            Screen
            <span className="text-Primary">5.8”OLED</span>
          </p>
          <p className="small-text text-Secondary flex justify-between">
            Capacity
            <span className="text-Primary">64 GB</span>
          </p>
          <p className="small-text text-Secondary flex justify-between">
            RAM
            <span className="text-Primary">4 GB</span>
          </p>
        </div>
        <div className="flex gap-[8px] justify-between">
          <Button text={'Add to cart'} onClick={handleAddToCart} />
          <Button
            iconSrc={product.isFavourite ? LikeIconFilled : LikeIcon}
            className="w-[40px] h-[40px]"
            onClick={handleAddToFavourites}
          />
        </div>
      </div>
    </div>
  );
};
