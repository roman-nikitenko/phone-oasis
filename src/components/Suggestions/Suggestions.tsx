import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { IconButton } from 'components/IconButton/IconButton.tsx';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';
import { Phones } from 'types/phones.ts';
import useScreenSize from 'hooks/useScreenSize.tsx';

type Props = {
  title: string;
  phones: Phones[];
};

export const Suggestions: React.FC<Props> = ({ title, phones }) => {
  const [offset, setOffset] = useState(0);
  const [isLeftButton, setIsLeftButton] = useState(true);
  const [isRightButton, setIsRightButton] = useState(false);
  const [showNewPartPhones, setShowNewPartPhones] = useState(2);
  const [number, setNumber] = useState(2);
  const { widthScreen } = useScreenSize();

  useEffect(() => {
    if (widthScreen >= 768) {
      setShowNewPartPhones(3);
      setNumber(3);
    }
    if (widthScreen === 1024) {
      setShowNewPartPhones(4);
      setNumber(4);
    }
  }, [widthScreen]);

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

  const newPartOfPhonesHandler = () => {
    setShowNewPartPhones((prevState) => prevState + number);
  };

  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="pb-[24px] text-Primary">{title}</h1>
        <div className="hidden xl:flex sm:gap-[16px]">
          <IconButton
            iconSrc={ArrowLeft}
            disabledIconSrc={ArrowLeftDisabled}
            isDisabled={isLeftButton}
            onClick={handleLeftClick}
          />
          <IconButton
            iconSrc={ArrowRight}
            disabledIconSrc={ArrowRightDisabled}
            isDisabled={isRightButton}
            onClick={handleRightClick}
          />
        </div>
      </div>
      {widthScreen >= 1280 && (
        <div className="lg:flex sm:gap-x-[16px] gap-y-[40px]  lg:w-[1136px] lg:overflow-hidden">
          {phones.map((phone: Phones) => (
            <ProductCard phone={phone} offset={offset} />
          ))}
        </div>
      )}
      <div className="">
        <div className="xl:hidden sm:gap-x-[16px] gap-y-[40px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {phones.slice(0, showNewPartPhones).map((phone: Phones) => (
            <ProductCard phone={phone} offset={offset} />
          ))}
        </div>
      </div>
      <div
        onClick={newPartOfPhonesHandler}
        className="p-4 border xl:hidden border-Elements text-light-blue-400 cursor-pointer flex justify-center"
      >
        <p>Show more</p>
      </div>
    </div>
  );
};
