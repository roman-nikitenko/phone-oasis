import React, { useEffect, useState } from 'react';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { Button } from 'components/Button/Button.tsx';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';
import { Phones } from 'types/phones.ts';

type Props = {
  title: string;
  phones: Phones[];
};

export const Suggestions: React.FC<Props> = ({ title, phones }) => {
  const [offset, setOffset] = useState(0);
  const [isLeftButton, setIsLeftButton] = useState(true);
  const [isRightButton, setIsRightButton] = useState(false);
  const [showNewPartPhones, setShowNewPartPhones] = useState(2);
  const [windowWidth, setWindowWidth] = useState([window.innerWidth]);
  const [number, setNumber] = useState(2);

  useEffect(() => {
    const windowWidthHandler = () => {
      setWindowWidth([innerWidth]);
    };

    window.addEventListener('resize', windowWidthHandler);

    return () => {
      window.removeEventListener('resize', windowWidthHandler);
    };
  }, []);

  useEffect(() => {
    if (Number(windowWidth) >= 768) {
      setShowNewPartPhones(3);
      setNumber(3);
    }
    if (Number(windowWidth) === 1024) {
      setShowNewPartPhones(4);
      setNumber(4);
    }
  }, [windowWidth]);

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
      {Number(windowWidth) >= 1280 && (
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
