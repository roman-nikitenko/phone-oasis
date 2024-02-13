import React, { useState } from 'react';
import { useLocation } from 'react-router';
import { PageTitle } from 'components/PageTitle/PageTitle.tsx';
import { PageNavigation } from 'components/PageNavigation/PageNavigation.tsx';
import { Dropdown } from 'components/Dropdown/Dropdown.tsx';
import { ProductCard } from 'components/ProductCard/ProductCard.tsx';
import { Pagination } from 'components/Pagination/Pagination.tsx';
import { capitalizeFirstLetter } from 'utils/transformProductName.ts';
import { Phones } from 'types/phones.ts';
import { useAppSelector } from 'hooks/hooks.ts';
import { ProductCategory } from 'types/common.ts';

export const ProductsPage: React.FC = () => {
  const allProducts = useAppSelector((state) => state.phones);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberProductsOnPage, setNumberProductsOnPage] = useState(16);
  const lastProductsIndex = currentPage * numberProductsOnPage;
  const firstProductsIndex = lastProductsIndex - numberProductsOnPage;
  const products = allProducts.slice(firstProductsIndex, lastProductsIndex);
  const { pathname } = useLocation();
  const paths: string[] = pathname.split('/');
  const currentPath = paths[1];

  const pageNumbers: number[] = [];

  for (let i = 1; i <= Math.ceil(allProducts.length / numberProductsOnPage); i++) {
    pageNumbers.push(i);
  }

  const sortByDate = (value: string | undefined): void => {
    console.log(value);
  };

  const sortByAmount = (value: string | undefined): void => {
    if (value) {
      setNumberProductsOnPage(+value);
    }
  };

  return (
    <div className="p-[20px] sm:p-10 lg:px-20 lg:pt-[24px] xl:px-[152px] grid gap-[40px]">
      <PageNavigation />
      <PageTitle
        title={
          currentPath === ProductCategory.PHONES
            ? 'Mobile phones'
            : capitalizeFirstLetter(currentPath)
        }
        modelQuantity={95}
      />
      <div className="mt-[20px] max-w-[1440px] mx-auto">
        <div className="flex gap-[16px] mb-[24px]">
          <Dropdown
            name="novelty"
            labelText="Sort by"
            selectedValue="Newest"
            width="176px"
            options={['Newest', 'Oldest']}
            onChange={sortByDate}
          />
          <Dropdown
            name="amount"
            labelText="Items on page"
            selectedValue={numberProductsOnPage.toString()}
            width="128px"
            options={['16', '32']}
            onChange={sortByAmount}
            isDisabled={currentPage === pageNumbers.length}
          />
        </div>
        <div className="flex flex-wrap gap-x-[16px] sm:gap[16px] gap-y-[40px]">
          {products.map((phoneItem: Phones) => (
            <ProductCard phone={phoneItem} key={phoneItem.id} />
          ))}
        </div>
      </div>
      <Pagination
        pageNumbers={pageNumbers}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
