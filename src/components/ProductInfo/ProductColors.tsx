import React, { useState } from 'react';

export const ProductColors: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState('#FCDBC1');

  const handleChangeColor = (e: any): void => {
    setCheckedValue(e.target.value);
  };

  return (
    <div className="pb-[24px] border-b border-b-Elements">
      <p className="pb-[8px] text-Icons small-text"> Available colors</p>
      <div className="flex gap-[9px]">
        <label htmlFor="#FCDBC1">
          <input
            type="radio"
            className={
              'appearance-none grid place-content-center w-[33px] h-[33px] border border-Elements before:w-[26px] before:h-[26px] before:bg-[#FCDBC1] before:rounded-full rounded-full checked:border-Primary'
            }
            value="#FCDBC1"
            name="#FCDBC1"
            id="#FCDBC1"
            onChange={handleChangeColor}
            checked={checkedValue === '#FCDBC1'}
          />
        </label>
        <label htmlFor="#5F7170">
          <input
            type="radio"
            className={
              'appearance-none grid place-content-center w-[33px] h-[33px] border border-Elements before:w-[26px] before:h-[26px] before:bg-[#5F7170] before:rounded-full rounded-full checked:border-Primary'
            }
            value="#5F7170"
            name="#5F7170"
            id="#5F7170"
            onChange={handleChangeColor}
            checked={checkedValue === '#5F7170'}
          />
        </label>
        <label htmlFor="#4C4C4C">
          <input
            type="radio"
            className={
              'appearance-none grid place-content-center w-[33px] h-[33px] border border-Elements before:w-[26px] before:h-[26px] before:bg-[#4C4C4C] before:rounded-full rounded-full checked:border-Primary'
            }
            value="#4C4C4C"
            name="#4C4C4C"
            id="#4C4C4C"
            onChange={handleChangeColor}
            checked={checkedValue === '#4C4C4C'}
          />
        </label>
        <label htmlFor="#F0F0F0">
          <input
            type="radio"
            className={
              'appearance-none grid place-content-center w-[33px] h-[33px] border border-Elements before:w-[26px] before:h-[26px] before:bg-[#F0F0F0] before:rounded-full rounded-full checked:border-Primary'
            }
            value="#F0F0F0"
            name="#F0F0F0"
            id="#F0F0F0"
            onChange={handleChangeColor}
            checked={checkedValue === '#F0F0F0'}
          />
        </label>
      </div>
    </div>
  );
};
