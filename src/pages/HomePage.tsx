import React from 'react';
import { CarouselHero } from '../components/CarouselHero.tsx';

export const HomePage: React.FC = () => {
  return (
    <div className="px-[152px] pt-[40px] flex justify-center items-center">
      <h1>Home</h1>
      <CarouselHero />
    </div>
  );
};
