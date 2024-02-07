import React from 'react';
import { useLocation } from 'react-router';
import { PageTitle } from 'components/PageTitle/PageTitle.tsx';
import { PageNavigation } from 'components/PageNavigation/PageNavigation.tsx';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { capitalizeFirstLetter } from 'utils/transformProductName.ts';
import { Phones } from 'types/phones.ts';
import { phones } from './HomePage.tsx';

export const ProductsPage: React.FC = () => {
  const { pathname } = useLocation();
  const paths: string[] = pathname.split('/');
  const currentPath = paths[1];

  return (
    <div className="p-[20px] md:p-[40px] xl:px-[152px] lg:pt-[24px] grid gap-[40px]">
      <PageNavigation />
      <PageTitle
        title={currentPath === 'phones' ? 'Mobile phones' : capitalizeFirstLetter(currentPath)}
        modelQuantity={95}
      />
      <div className="flex justify-center flex-wrap gap-x-[16px] gap-y-[40px]">
        {phones.map((phoneItem: Phones) => (
          <ProductCard product={phoneItem} />
        ))}
      </div>
    </div>
  );
};
