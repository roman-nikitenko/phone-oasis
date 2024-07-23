import React from 'react';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button.tsx';
import { IconButton } from 'components/IconButton/IconButton.tsx';
import { useAppDispatch } from 'hooks/hooks.ts';
import { actions as basketActions } from 'store/basketSlice.ts';
import { actions as phonesActions } from 'store/phonesSlice.ts';
import { Phones } from 'types/phones.ts';
import LikeIconFilled from 'assets/like-filled.svg';
import LikeIcon from 'assets/like.svg';

type Props = {
  product: Phones;
};

export const ProductPrice: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleAddToCart = (): void => {
    if (product.isInBasket) {
      return navigate('/basket');
    } else {
      dispatch(basketActions.addToBasket(product));
      dispatch(phonesActions.addToBasket(product.id));
    }
  };

  const handleAddToFavourites = (): void => {
    dispatch(phonesActions.addFavorite(product.id));
  };

  return (
    <div className="py-[32px]">
      <div className="pb-[16px] flex gap-[8px]">
        <h2 className="text-Primary">${product.price}</h2>
        {product.isForSale && (
          <h2 className="font-medium text-Secondary line-through">${product.forSalePrice}</h2>
        )}
      </div>
      <div className="flex sm:gap-[8px]">
        <Button
          text={`${product.isInBasket ? 'Added' : 'Add'} to cart`}
          onClick={handleAddToCart}
          className={classNames('h-[48px] max-w-[263px]', product.isInBasket && 'active-Button')}
        />
        <IconButton
          iconSrc={product.isFavourite ? LikeIconFilled : LikeIcon}
          className="w-[48px] h-[48px]"
          onClick={handleAddToFavourites}
        />
      </div>
    </div>
  );
};
