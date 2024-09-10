import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  urls: string[];
};

export const ProductPhotos: React.FC<Props> = ({ urls }) => {
  const [mainImageIndex, setMainImageIndex] = useState(0);

  return (
    <div className="flex-1 grid gap-[16px] grid-flow-row md:grid-flow-col auto-cols-max lg:max-w-[620px]">
      <div className="flex order-1 md:-order-1 md:grid gap-[16px] justify-center">
        {urls.map((_, index: number) => (
          <button
            key={index}
            className={classNames(
              'w-[75px] h-[75px] md:w-[80px] md:h-[80px] flex justify-center items-center border border-Elements hover:border-Icons active:border-Primary',
              mainImageIndex === index && 'border-Primary'
            )}
          >
            <img
              src={urls[index]}
              alt="product image"
              className="w-[66px] h-[66px]"
              onClick={() => setMainImageIndex(index)}
            />
          </button>
        ))}
      </div>
      <img src={urls[mainImageIndex]} alt="product image" className="w-[464px] h-[464px]" />
    </div>
  );
};
