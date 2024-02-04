import React from 'react';
import { CarouselHero } from 'components/CarouselHero.tsx';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import { Categories } from 'components/Suggestions/Categories.tsx';
import banner from 'assets/banner.jpeg';
import tablet from 'assets/tablet.jpg';
import ipad from 'assets/ipad.jpg';

export const HomePage: React.FC = () => {
  const slides = [banner, tablet, ipad];

  return (
    <div className="sm:px-[20px] md:py-[40px] xl:px-[152px] lg:py-[80px] grid justify-items-center gap-[40px] xl:gap-[80px]">
      <div className="flex justify-center">
        <CarouselHero slides={slides} />
      </div>
      <Suggestions title="Hot Prices" />
      <Categories />
      <Suggestions title="Brand new models" />
    </div>
  );
};
