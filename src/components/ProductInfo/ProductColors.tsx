import React, { useState } from 'react';

const COLORS = ['#FCDBC1', '#5F7170', '#4C4C4C', '#F0F0F0'];

export const ProductColors: React.FC = () => {
  const [checkedValue, setCheckedValue] = useState('#FCDBC1');
  const handleChangeColor = (e: any): void => {
    setCheckedValue(e.target.value);
  };

  return (
    <div className="pb-[24px] border-b border-b-Elements">
      <p className="pb-[8px] text-Icons small-text"> Available colors</p>
      <div className="flex gap-[9px]">
        {COLORS.map((color: string) => (
          <label htmlFor={color} key={color}>
            <input
              type="radio"
              className={`appearance-none grid place-content-center w-[33px] h-[33px] border border-Elements before:w-[26px] before:h-[26px] before:bg-[${color}] before:rounded-full rounded-full checked:border-Primary`}
              value={color}
              name={color}
              id={color}
              onChange={handleChangeColor}
              checked={checkedValue === color}
            />
          </label>
        ))}
      </div>
    </div>
  );
};
