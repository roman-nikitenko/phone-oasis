import React from 'react';
import { IconButton } from 'components/IconButton/IconButton.tsx';
import arrowUp from 'assets/arrow-up-darkgrey.svg';

export const BackToTop: React.FC = () => {
  return (
    <div className=" items-center gap-[16px] hidden sm:flex">
      <span className="small-text text-Secondary">Back to top</span>
      <IconButton iconSrc={arrowUp} onClick={() => window.scrollTo(0, 0)} />
    </div>
  );
};
