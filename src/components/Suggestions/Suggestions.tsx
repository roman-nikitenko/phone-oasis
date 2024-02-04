import React from 'react';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { Button } from 'components/Button/Button.tsx';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';

type Props = {
  title: string;
};

export const Suggestions: React.FC<Props> = ({ title }) => {
  const handleLeftClick = (): void => {};

  const handleRightClick = (): void => {};

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="pb-[24px] text-[30px] sm:text-[32px] text-Primary">{title}</h1>
        <div className="hidden sm:flex sm:gap-[16px]">
          <Button
            iconSrc={ArrowLeft}
            disabledIconSrc={ArrowLeftDisabled}
            isDisabled={true}
            onClick={handleLeftClick}
          />
          <Button
            iconSrc={ArrowRight}
            disabledIconSrc={ArrowRightDisabled}
            isDisabled={false}
            onClick={handleRightClick}
          />
        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-x-[16px] gap-y-[40px]">
        <ProductCard isForSale={true} isFavourite={false} />
        <ProductCard isForSale={false} isFavourite={true} />
        <ProductCard isForSale={false} isFavourite={true} />
        <ProductCard isForSale={false} isFavourite={true} />
      </div>
    </div>
  );
};
