import React from 'react';
import { CarouselHero } from 'components/CarouselHero/CarouselHero.tsx';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import { Categories } from 'components/Categories/Categories.tsx';
import mack from 'assets/banner/mack.jpg';
import tablet from 'assets/banner/stufs.jpg';
import ipad from 'assets/banner/iphones.jpg';
import { useAppSelector } from '../hooks/hooks.ts';

export const HomePage: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);
  const slides = [
    { id: 1, image: mack },
    { id: 2, image: tablet },
    { id: 3, image: ipad },
  ];

  return (
    <div className="sm:px-[20px] md:py-[20px] xl:px-[152px] pb-[80px] grid justify-items-center gap-[40px] xl:gap-[80px]">
      <div className="flex justify-center">
        <CarouselHero slides={slides} />
      </div>
      <Suggestions phones={phones} title="Hot Prices" />
      <Categories />
      <Suggestions phones={phones} title="Brand new models" />
    </div>
  );
};
