import React from 'react';
import { CarouselHero } from 'components/CarouselHero.tsx';
import { Suggestions } from 'components/Suggestions/Suggestions.tsx';
import { Categories } from 'components/Categories/Categories.tsx';
import banner from 'assets/banner.jpeg';
import tablet from 'assets/tablet.jpg';
import ipad from 'assets/ipad.jpg';
import { Phones } from 'types/phones.ts';

export const phones: Phones[] = [
  {
    title: 'Apple iPhone Xs 64GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: false,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image1.jpeg',
  },
  {
    title: 'Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image2.jpeg',
  },
  {
    title: 'Apple iPhone 11 128GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: false,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image3.jpeg',
  },
  {
    title: 'Apple iPhone X 256GB Silver (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image4.jpeg',
  },
  {
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: true,
    isForSale: false,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image5.jpeg',
  },
  {
    title: 'Apple iPhone 11 256GB Purple (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image6.jpeg',
  },
  {
    title: 'Apple iPhone 11 Pro Max 512GB Midnight Green (iMT9G2FS/A)',
    category: 'phones',
    isFavourite: false,
    isForSale: true,
    price: '$899',
    forSalePrice: '$799',
    image: 'src/assets/phones/image7.jpeg',
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
