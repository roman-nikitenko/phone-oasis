import React from 'react';
import arrowUp from 'assets/arrow-up-darkgrey.svg';

export const BackToTop: React.FC = () => {
  return (
    <div className=" items-center gap-[16px] hidden sm:flex">
      <span className="small-text text-Secondary">Back to top</span>
      <div className="flex justify-center items-center border border-Icons transition-colors hover:border-Primary cursor-pointer w-[32px] h-[32px]">
        <img src={arrowUp} alt="arrow up icon" onClick={() => window.scrollTo(0, 0)} />
      </div>
    </div>
  );
};
