import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { Button } from 'components/Button/Button.tsx';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';
import { Phones } from '../../types/phones.ts';

type Props = {
  title: string;
  phones: Phones[];
};

export const Suggestions: React.FC<Props> = ({ title, phones }) => {
  const [offset, setOffset] = useState(0);
  const [isLeftButton, setIsLeftButton] = useState(true);
  const [isRightButton, setIsRightButton] = useState(false);

  const step = 288;
  const maxElements = -(phones.length - 4) * step;

  const handleLeftClick = (): void => {
    setOffset((prevState) => prevState + step);
  };

  const handleRightClick = (): void => {
    setOffset((prevState) => prevState - step);
  };

  useEffect((): void => {
    if (offset < 0) {
      setIsLeftButton(false);
    } else {
      setIsLeftButton(true);
    }

    if (offset === maxElements) {
      setIsRightButton(true);
    } else {
      setIsRightButton(false);
    }
  }, [offset]);

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="pb-[24px] text-[30px] sm:text-[32px] text-Primary">{title}</h1>
        <div className="hidden sm:flex sm:gap-[16px]">
          <Button
            iconSrc={ArrowLeft}
            disabledIconSrc={ArrowLeftDisabled}
            isDisabled={isLeftButton}
            onClick={handleLeftClick}
          />
          <Button
            iconSrc={ArrowRight}
            disabledIconSrc={ArrowRightDisabled}
            isDisabled={isRightButton}
            onClick={handleRightClick}
          />
        </div>
      </div>
      <div className="flex gap-x-[16px] gap-y-[40px] touch-pan-right w-[1136px] overflow-hidden">
        {phones.map((phone) => (
          <ProductCard key={phone.id} offset={offset} phone={phone} />
        ))}
      </div>
    </div>
  );
};
