import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard.tsx';
import { useAppSelector } from '../hooks/hooks.ts';
import { PageNavigation } from '../components/PageNavigation/PageNavigation.tsx';
import { PageTitle } from '../components/PageTitle/PageTitle.tsx';

export const FavouritesPage: React.FC = () => {
  const { phones } = useAppSelector((state) => state);
  const favoritePhone = phones.filter((phone) => phone.isFavourite);

  return (
    <div className="">
      <div className="p-[20px] md:p-[40px] xl:px-[152px] lg:pt-[24px] grid gap-[40px]">
        <PageNavigation />
        <PageTitle title="Favourites" />
        <div className="flex flex-wrap gap-x-[16px] gap-y-[40px]">
          {favoritePhone.map((item) => (
            <ProductCard phone={item} />
          ))}
        </div>
      </div>
    </div>
  );
};
