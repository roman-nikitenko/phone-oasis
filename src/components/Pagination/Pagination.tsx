import React from 'react';
import classNames from 'classnames';
import { Button } from 'components/Button/Button.tsx';
import ArrowLeft from 'assets/arrow-left-darkgrey.svg';
import ArrowLeftDisabled from 'assets/arrow-left.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';
import ArrowRightDisabled from 'assets/arrow-right.svg';

type Props = {
  currentPage: number;
  pageNumbers: number[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};

export const Pagination: React.FC<Props> = ({ currentPage, pageNumbers, setCurrentPage }) => {
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

  return (
    <div className="justify-self-center flex gap-[16px]">
      <Button
        iconSrc={ArrowLeft}
        isDisabled={currentPage === 1}
        disabledIconSrc={ArrowLeftDisabled}
        onClick={handlePreviousPage}
      />
      <div className="flex gap-[8px]">
        {pageNumbers.map((pageNumber: number) => (
          <Button
            key={pageNumber}
            text={String(pageNumber)}
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
      <Button
        iconSrc={ArrowRight}
        isDisabled={currentPage === pageNumbers.length}
        disabledIconSrc={ArrowRightDisabled}
        onClick={handleNextPage}
      />
    </div>
  );
};
