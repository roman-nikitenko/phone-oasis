import React from 'react';
import { ProductCard } from '../components/ProductCard/ProductCard.tsx';
import { useAppSelector } from '../hooks/hooks.ts';

export const FavouritesPage: React.FC = () => {
  const { phones } = useAppSelector((state) => state);
  const favoritePhone = phones.filter((phone) => phone.isFavourite);

  console.log(favoritePhone);

  return (
    <>
      <div className="flex">
        {favoritePhone.map((item) => (
          <ProductCard phone={item} />
        ))}
      </div>
    </>
  );
};
