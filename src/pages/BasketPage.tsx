import React, { useEffect, useState } from 'react';
import { useAppSelector } from '../hooks/hooks.ts';
import { PageNavigation } from '../components/PageNavigation/PageNavigation.tsx';
import { BasketCard } from '../components/Basket/BasketCard.tsx';
import { Button } from '../components/Button/Button.tsx';

export const BasketPage: React.FC = () => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItemsQuantity, setTotalItemsQuantity] = useState(0);
  const basket = useAppSelector((state) => state.basket);
  const checkoutHandler = () => {
    console.log(1);
  };
  useEffect(() => {
    setTotalItemsQuantity(basket.reduce((acc, phone) => acc + phone.quantity, 0));
    setTotalPrice(basket.reduce((acc, phone) => acc + phone.price * phone.quantity, 0));
  }, [basket]);

  return (
    <div className="p-[20px] md:p-[40px] xl:px-[152px] lg:pt-[24px] grid gap-[40px]">
      <PageNavigation />
      <h1 className="text-Primary">Basket</h1>
      <div className="flex gap-4 items-start justify-between">
        <div className="flex flex-col gap-4">
          {basket.map((phone) => (
            <BasketCard phone={phone} key={phone.id} />
          ))}
        </div>
        <div className="w-[368px] p-6 border border-Elements">
          <div className="flex flex-col pb-6 border-b border-Elements">
            <h1 className="text-center">${totalPrice}</h1>
            <p className="text-center text-Secondary">Total for {totalItemsQuantity} items</p>
          </div>
          <div className="flex justify-center pt-6">
            <Button text="Checkout" onClick={checkoutHandler} />
          </div>
        </div>
      </div>
    </div>
  );
};
