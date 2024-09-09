import React, { useEffect } from 'react';
import classNames from 'classnames';
import { Button } from 'components/Button/Button.tsx';
import { IconButton } from 'components/IconButton/IconButton.tsx';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';

type Props = {
  totalAmountOfProducts: number;
  numberProductsOnPage: number;
  currentPage: number;
  pageNumbers: number[];
  setPageNumbers: React.Dispatch<React.SetStateAction<number[]>>;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalAmountOfProducts,
  numberProductsOnPage,
  pageNumbers,
  setPageNumbers,
  setCurrentPage,
}) => {
  const handlePreviousPage = (): void => {
    setCurrentPage((prev: number) => prev - 1);
    window.scrollTo(0, 0);
  };

  const handleNextPage = (): void => {
    setCurrentPage((prev: number) => prev + 1);
    window.scrollTo(0, 0);
  };

  const handleSetCurrentPage = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    for (let i = 0; i <= totalAmountOfProducts / numberProductsOnPage; i++) {
      setPageNumbers((prev: number[]) => [...prev, i]);
    }

    return () => {
      setPageNumbers([]);
    };
  }, [numberProductsOnPage]);

  return (
    <div className="justify-self-center flex gap-[16px]">
      <IconButton
        iconSrc={ArrowLeft}
        isDisabled={currentPage === 0}
        disabledIconSrc={ArrowLeftDisabled}
        onClick={handlePreviousPage}
      />
      <div className="flex gap-[8px]">
        {pageNumbers.map((pageNumber: number) => (
          <Button
            key={pageNumber}
            text={String(pageNumber + 1)}
            onClick={() => handleSetCurrentPage(pageNumber)}
            className={classNames(
              'pagination-Button',
              currentPage !== pageNumber
                ? 'not-Active-Pagination-Button'
                : 'active-Pagination-Button'
            )}
          />
        ))}
      </div>
      <IconButton
        iconSrc={ArrowRight}
        isDisabled={
          currentPage === pageNumbers.length - 1 || totalAmountOfProducts < numberProductsOnPage
        }
        disabledIconSrc={ArrowRightDisabled}
        onClick={handleNextPage}
      />
    </div>
  );
};
