import React, { useState } from 'react';
import nextIcon from 'assets/arrow-right-darkgrey.svg';
import prevIcon from 'assets/arrow-left-darkgrey.svg';

type Props = {
  slides: string[];
}

export const CarouselHero: React.FC<Props> = ({ slides }) => {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(curr => curr === 0 ? slides.length -1 : curr - 1 )
  const next = () => setCurrent(curr => curr === slides.length -1 ? 0 : curr + 1 )

  return (
    <>
      <div className="">
           <div className="flex items-center gap-[16px] mb-[18px]">
             <button
              className="border border-Icons h-[400px] w-[32px] flex items-center justify-center"
              onClick={prev}
            >
              <img src={prevIcon}/>
            </button>
            <div className="w-[1040px] h-[400px] overflow-hidden ">
              <div
                className="flex transition duration-700"
                style={{ transform: `translateX(-${current * 100}%)` }}
              >
                {slides.map(s => (
                  <img className="h-full" src={s} />
                ))}
              </div>
            </div>
            <button onClick={next} className="border border-Icons h-[400px] w-[32px] flex items-center justify-center" >
              <img src={nextIcon}/>
            </button>
          </div>
          <div className="flex gap-[14px] justify-center">
            {slides.map((_, i) => (
              <div onClick={() => setCurrent(i)} className={`
                w-[14px] h-[4px] cursor-pointer ${current === i ? 'bg-Primary' : 'bg-Elements'} 
                transition duration-700
              `} />
            ))}
          </div>
        </div>
    </>
  );
};

