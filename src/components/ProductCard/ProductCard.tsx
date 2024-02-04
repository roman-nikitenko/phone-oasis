import React from 'react';
import { Button } from 'components/Button/Button.tsx';
import LikeIcon from 'assets/like.svg';
import LikeIconFilled from 'assets/like-filled.svg';

type Props = {
  // product: {};
  isForSale?: boolean;
  isFavourite: boolean;
};

export const ProductCard: React.FC<Props> = ({ isForSale, isFavourite }) => {
  const handleAddToCart = (): void => {};

  const handleAddToFavourites = (): void => {};

  return (
    <div className="p-[24px] flex flex-col gap-[24px] sm:border sm:border-Elements sm:max-w-[272px]">
      <img src="" alt="product photo" />
      <div>
        <p className="pb-[7px] font-medium text-Primary">
          Apple iPhone Xs 64GB Silver (iMT9G2FS/A)
        </p>
        <div className="pb-[5px] flex gap-[8px]">
          <h2>$799</h2>
          {isForSale && <h2 className="font-medium text-Secondary line-through">$899</h2>}
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
        <div className="flex justify-between">
          <Button text={'Add to cart'} onClick={handleAddToCart} />
          <Button
            iconSrc={isFavourite ? LikeIconFilled : LikeIcon}
            className="w-[40px] h-[40px]"
            onClick={handleAddToFavourites}
          />
        </div>
      </div>
    </div>
  );
};
