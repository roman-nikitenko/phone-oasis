import React from 'react';

type Props = {
  children: number | undefined;
};

export const Marker: React.FC<Props> = ({ children }) => {
  return (
    <div className="text-[9px] flex justify-center items-center w-[14px] h-[14px] bg-Red rounded-full right-[17px] top-[17px] border-white border text-white absolute">
      {children}
    </div>
  );
};
