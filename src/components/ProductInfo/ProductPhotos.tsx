import React, { useState } from 'react';
import classNames from 'classnames';

type Props = {
  urls: string[];
};

export const ProductPhotos: React.FC<Props> = ({ urls }) => {
  const [mainImageUrl, setMainImageUrl] = useState(urls[0]);
  return (
    <div className="flex-1 grid gap-[16px] grid-flow-row md:grid-flow-col auto-cols-max lg:max-w-[620px]">
      <div className="flex order-1 md:-order-1 md:grid gap-[16px]">
        {urls.map((url: string) => (
          <button
            key={url}
            className={classNames(
              'w-[80px] h-[80px] flex justify-center items-center border border-Elements hover:border-Icons active:border-Primary',
              mainImageUrl === url && 'border-Primary'
            )}
          >
            <img
              src={url}
              alt="product image"
              className="w-[66px] h-[66px]"
              onClick={() => setMainImageUrl(url)}
            />
          </button>
        ))}
      </div>
      <img src={mainImageUrl} alt="product image" className="w-[464px] h-[464px]" />
    </div>
  );
};
