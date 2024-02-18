import React, { useState } from 'react';
import { IconButton } from '@material-tailwind/react';
import { Banner } from 'types/banner.ts';

type Props = {
  slides: Banner[];
};

export const CarouselHero: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurrent((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <>
      <div className="">
        <div className="flex items-center mb-[18px] relative ">
          <div className="max-w-[1136px] xl:h-[630px] w-full overflow-hidden ">
            <div
              className="flex transition duration-700 object-fill"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((s) => (
                <img src={s.image} alt="banner" key={s.id} />
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-between sm:p-4">
            <IconButton
              placeholder="prev button"
              variant="text"
              color="white"
              size="lg"
              onClick={prev}
              className="rounded-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
            <IconButton
              placeholder="next button"
              variant="text"
              color="white"
              size="lg"
              onClick={next}
              className="rounded-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          </div>
        </div>
        <div className="flex gap-[14px] justify-center">
          {slides.map((_, i: number) => (
            <div
              key={i}
              onClick={() => setCurrent(i)}
              className={`
              w-[14px] h-[4px] cursor-pointer ${current === i ? 'bg-Primary' : 'bg-Elements'} 
              transition duration-700
            `}
            />
          ))}
        </div>
      </div>
    </>
  );
};
