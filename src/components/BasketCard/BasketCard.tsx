import React from 'react';
import { Phones } from 'types/phones.ts';
import closeIcon from 'assets/close-grey.svg';
import minusIcon from 'assets/minus.svg';
import plusIcon from 'assets/plus.svg';
import { useAppDispatch } from 'hooks/hooks.ts';
import { actions as basketActions } from 'store/basketSlice.ts';
import { actions as phonesActions } from 'store/phonesSlice.ts';
import { Link } from 'react-router-dom';
import { IconButton } from 'components/IconButton/IconButton.tsx';

type Props = {
  phone: Phones;
};

enum Options {
  PLUS = 'plus',
  MINUS = 'minus',
}

export const BasketCard: React.FC<Props> = ({ phone }) => {
  const { image, title, price, id, quantity } = phone;
  const dispatch = useAppDispatch();
  const priceCount = price * quantity;

  const quantityHandler = (option: Options): void => {
    switch (option) {
      case Options.PLUS:
        dispatch(basketActions.plusQuantity(id));
        break;
      case Options.MINUS:
        if (quantity <= 1) {
          return;
        }
        dispatch(basketActions.minusQuantity(id));
        break;
      default:
        return;
    }
  };

  const deleteItem = (): void => {
    dispatch(basketActions.deleteFromBasket(id));
    dispatch(phonesActions.deleteFromBasket(id));
  };

  return (
    <div className="md:flex lg:w-[752px] border border-Elements relative md:justify-between p-[16px] md:p-[31px]">
      <div className="flex mb-6 md:mb-0 items-center gap-[16px]">
        <img
          onClick={deleteItem}
          src={closeIcon}
          className="cursor-pointer absolute top-[10px] right-[10px] md:static md:flex"
          alt="cancel"
        />
        <img src={image} className="w-[66px] h-[66px] lg:ml-[16px]" alt="phone" />
        <p className="md:w-[295px] hover:text-Secondary">
          <Link to={`/detailPage/${id}`}>{title}</Link>
        </p>
      </div>
      <div className="flex items-center md:gap-[20px] lg:gap-[43px] justify-between">
        <div className="flex items-center justify-between w-[100px]">
          <IconButton
            iconSrc={minusIcon}
            onClick={() => quantityHandler(Options.MINUS)}
            isDisabled={quantity === 1}
          />
          <p> {quantity} </p>
          <IconButton iconSrc={plusIcon} onClick={() => quantityHandler(Options.PLUS)} />
        </div>
        <h2>${priceCount}</h2>
      </div>
    </div>
  );
};
