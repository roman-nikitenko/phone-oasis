import React from 'react';
import { CarouselHero } from 'components/CarouselHero.tsx';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import { Categories } from 'components/Categories/Categories.tsx';
import banner from 'assets/banner.jpeg';
import tablet from 'assets/tablet.jpg';
import ipad from 'assets/ipad.jpg';
import { Phones } from 'types/phones.ts';
import Phone1 from 'assets/phones/image1.jpeg';
import Phone2 from 'assets/phones/image2.jpeg';
import Phone3 from 'assets/phones/image3.jpeg';
import Phone4 from 'assets/phones/image4.jpeg';
import Phone5 from 'assets/phones/image5.jpeg';
import Phone6 from 'assets/phones/image6.jpeg';
import Phone7 from 'assets/phones/image7.jpeg';

export const phones: Phones[] = [
  {
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: Phone1,
  },
  {
    title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$1999',
    forSalePrice: '$1199',
    image: Phone2,
  },
  {
    title: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: Phone3,
  },
  {
    title: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$859',
    forSalePrice: '$899',
    image: Phone4,
  },
  {
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: Phone5,
  },
  {
    title: 'Apple iPhone 11 256GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: false,
    price: '$899',
    forSalePrice: null,
    image: Phone6,
  },
  {
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: false,
    price: '$1299',
    forSalePrice: null,
    image: Phone7,
  },
];

export const HomePage: React.FC = () => {
  const slides = [banner, tablet, ipad];

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
