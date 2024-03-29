import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components/Button/Button.tsx';
import { IconButton } from 'components/IconButton/IconButton.tsx';
import { Phones } from 'types/phones.ts';
import LikeIcon from 'assets/like.svg';
import LikeIconFilled from 'assets/like-filled.svg';
import { useAppDispatch } from 'hooks/hooks.ts';
import { actions as phonesActions } from 'store/phonesSlice.ts';
import { actions as basketActions } from 'store/basketSlice.ts';
import { transformProductNameIntoPath } from 'utils/transformProductName.ts';

type Props = {
  phone: Phones;
  offset?: number;
};

export const ProductCard: React.FC<Props> = ({ offset, phone }) => {
  const { isFavourite, isForSale, image, id, title, price, category, forSalePrice, isInBasket } =
    phone;
  const path = category && `/${category}/${transformProductNameIntoPath(title)}`;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleAddToCart = (): void => {
    if (isInBasket) {
      return navigate('/basket');
    } else {
      dispatch(basketActions.addToBasket(phone));
      dispatch(phonesActions.addToBasket(id));
    }
  };

  const handleAddToFavourites = (): void => {
    dispatch(phonesActions.addFavorite(id));
  };

  return (
    <div
      className="w-full px-[5px] py-[24px] lg:px-[16px] xl:px-[24px] flex flex-col gap-[24px] border-[0.5px] border-Elements lg:border sm:max-w-[272px] transition duration-700"
      style={{ transform: `translateX(${offset}px)` }}
    >
      <img src={image} alt="product photo" />
      <div>
        <Link to={path}>
          <p className="pb-[7px] truncate text-Primary hover:text-Secondary">{title}</p>
        </Link>
        <div className="pb-[5px] flex gap-[8px]">
          <h2>{price}</h2>
          {isForSale && <h2 className="font-medium text-Secondary line-through">{forSalePrice}</h2>}
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
        <div className="flex sm:gap-[8px]">
          <Button
            text={`${isInBasket ? 'Added' : 'Add'} to cart`}
            onClick={handleAddToCart}
            className={isInBasket ? 'active-Button ' : ''}
          />
          <IconButton
            iconSrc={isFavourite ? LikeIconFilled : LikeIcon}
            className="w-[40px] h-[40px]"
            onClick={handleAddToFavourites}
          />
        </div>
      </div>
    </div>
  );
};
