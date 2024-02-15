import React from 'react';
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
  };

  return (
    <div className="md:flex border border-Elements relative md:justify-between p-[16px] md:p-[31px]">
      <div className="flex mb-6 md:mb-0 items-center gap-[16px]">
        <img
          onClick={deleteItem}
          src={closeIcon}
          className="cursor-pointer md:flex hidden"
          alt="cancel"
        />
        <img src={image} className="w-[66px] h-[66px] lg:ml-[16px]" alt="phone" />
        <p className="md:w-[295px]">
          <Link to={`/detailPage/${id}`}>{title}</Link>
        </p>
        <img
          onClick={deleteItem}
          src={closeIcon}
          className="cursor-pointer absolute top-[10px] right-[10px] md:hidden"
          alt="cancel"
        />
      </div>
      <div className="flex items-center md:gap-[20px] justify-between">
        <div className="flex items-center justify-between w-[100px]">
          <button
            className="w-8 h-8 border border-Elements flex justify-center items-center"
            onClick={() => quantityHandler(Options.MINUS)}
          >
            <img src={minusIcon} alt="button minus" />
          </button>
          <p> {quantity} </p>
          <button
            className="w-8 h-8 border border-Elements flex justify-center items-center"
            onClick={() => quantityHandler(Options.PLUS)}
          >
            <img src={plusIcon} alt="button minus" />
          </button>
        </div>
        <h2>${priceCount}</h2>
      </div>
    </div>
  );
};

// <div className="border border-Elements xl:w-[752px] flex flex-col py-[31px] pl-[24px] pr-[40px]">
//   <div className="flex items-center gap-[24px]">
//     <img onClick={deleteItem} src={closeIcon} className="cursor-pointer" alt="cancel" />
//     <img src={image} alt="image phone" className="w-[66px] h-[66px]" />
//     <p className="w-[295px]">
//       <Link to={`/detailPage/${id}`}>{title}</Link>
//     </p>
//   </div>
//
//   <div className="flex justify-between w-[200px]">
//     <div className="flex items-center justify-between w-[100px]">
//       <button
//         className="w-8 h-8 border border-Elements flex justify-center items-center"
//         onClick={() => quantityHandler(Options.MINUS)}
//       >
//         <img src={minusIcon} alt="button minus" />
//       </button>
//       <p> {quantity} </p>
//       <button
//         className="w-8 h-8 border border-Elements flex justify-center items-center"
//         onClick={() => quantityHandler(Options.PLUS)}
//       >
//         <img src={plusIcon} alt="button minus" />
//       </button>
//     </div>
//     <h2>${priceCount}</h2>
//   </div>
// </div>
