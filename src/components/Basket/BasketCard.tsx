import React, { useState } from 'react';
import { Phones } from '../../types/phones.ts';
import closeIcon from 'assets/close-grey.svg';
import minusIcon from 'assets/minus.svg';
import plusIcon from 'assets/plus.svg';
import { useAppDispatch } from '../../hooks/hooks.ts';
import { actions as basketActions } from '../../store/basketSlice.ts';
import { Link } from 'react-router-dom';

type Props = {
  phone: Phones;
};

type Options = 'plus' | 'minus';

export const BasketCard: React.FC<Props> = ({ phone }) => {
  const { image, title, price, id } = phone;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useAppDispatch();
  const priceCount = price * quantity;

  const quantityHandler = (option: Options): void => {
    switch (option) {
      case 'plus':
        setQuantity((prevState) => prevState + 1);
        break;
      case 'minus':
        if (quantity <= 1) {
          return;
        }
        setQuantity((prevState) => prevState - 1);
        break;
      default:
        return;
    }
  };

  const deleteItem = (): void => {
    dispatch(basketActions.deleteFromBasket(id));
  };

  return (
    <div className="border border-Elements w-[752px] flex items-center justify-between py-[31px] pl-[24px] pr-[40px]">
      <div className="flex items-center gap-[24px]">
        <img onClick={deleteItem} src={closeIcon} className="cursor-pointer" alt="cancel" />
        <img src={image} alt="image phone" className="w-[66px] h-[66px]" />
        <p className="w-[295px]">
          <Link to={`/detailPage/${id}`}>{title}</Link>
        </p>
      </div>

      <div className="flex justify-between w-[200px]">
        <div className="flex items-center justify-between w-[100px]">
          <button
            className="w-8 h-8 border border-Elements flex justify-center items-center"
            onClick={() => quantityHandler('minus')}
          >
            <img src={minusIcon} alt="button minus" />
          </button>
          <p> {quantity} </p>
          <button
            className="w-8 h-8 border border-Elements flex justify-center items-center"
            onClick={() => quantityHandler('plus')}
          >
            <img src={plusIcon} alt="button minus" />
          </button>
        </div>
        <h2>${priceCount}</h2>
      </div>
    </div>
  );
};
