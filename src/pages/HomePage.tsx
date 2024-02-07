import React from 'react';
import { CarouselHero } from 'components/CarouselHero.tsx';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import { Categories } from 'components/Suggestions/Categories.tsx';
import banner from 'assets/banner.jpeg';
import tablet from 'assets/tablet.jpg';
import ipad from 'assets/ipad.jpg';
import { useAppSelector } from '../hooks/hooks.ts';

export const HomePage: React.FC = () => {
  const phones = useAppSelector((state) => state.phones);
  const slides = [banner, tablet, ipad];

  // const phones: Phones[] = [
  //   {
  //     id: 1,
  //     title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
  //     isFavourite: false,
  //     isForSale: false,
  //     image: 'src/assets/phones/image1.jpeg',
  //   },
  //   {
  //     id: 2,
  //     title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
  //     isFavourite: false,
  //     isForSale: true,
  //     image: 'src/assets/phones/image2.jpeg',
  //   },
  //   {
  //     id: 3,
  //     title: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
  //     isFavourite: true,
  //     isForSale: false,
  //     image: 'src/assets/phones/image3.jpeg',
  //   },
  //   {
  //     id: 4,
  //     title: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
  //     isFavourite: false,
  //     isForSale: true,
  //     image: 'src/assets/phones/image4.jpeg',
  //   },
  //   {
  //     id: 5,
  //     title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
  //     isFavourite: true,
  //     isForSale: false,
  //     image: 'src/assets/phones/image5.jpeg',
  //   },
  //   {
  //     id: 6,
  //     title: 'Apple iPhone 11 256GB Purple (iMT9G2FS/A)',
  //     isFavourite: false,
  //     isForSale: true,
  //     image: 'src/assets/phones/image6.jpeg',
  //   },
  //   {
  //     id: 7,
  //     title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
  //     isFavourite: false,
  //     isForSale: true,
  //     image: 'src/assets/phones/image7.jpeg',
  //   },
  // ];

  return (
    <div className="sm:px-[20px] md:py-[40px] xl:px-[152px] lg:py-[80px] grid justify-items-center gap-[40px] xl:gap-[80px]">
      <div className="flex justify-center">
        <CarouselHero slides={slides} />
      </div>
      <Suggestions phones={phones} title="Hot Prices" />
      <Categories />
      <Suggestions phones={phones} title="Brand new models" />
    </div>
  );
};
