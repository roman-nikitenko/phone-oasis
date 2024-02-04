import React from 'react';
import { CarouselHero } from '../components/CarouselHero.tsx';
import banner from 'assets/banner.jpeg';
import tablet from 'assets/tablet.jpg';
import ipad from 'assets/ipad.jpg';

export const HomePage: React.FC = () => {
  const slides = [banner, tablet, ipad ]

  return (
    <div className="px-[152px] pt-[40px]">
      <div className="flex justify-center">
        <CarouselHero slides={slides} />
      </div>
    </div>
  );
};
