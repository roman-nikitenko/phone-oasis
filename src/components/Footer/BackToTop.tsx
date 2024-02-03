import React from 'react';

export const BackToTop: React.FC = () => {
  return (
    <div className=" items-center gap-[16px] hidden sm:flex">
      <span className="small-text text-Secondary">Back to top</span>
      <div className="flex justify-center items-center border border-Icons transition-colors hover:border-Primary cursor-pointer w-[32px] h-[32px]">
        <img src={'src/assets/arrow-up-darkgrey.svg'} alt="arrow up icon" />
      </div>
    </div>
  );
};
