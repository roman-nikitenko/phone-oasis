import React from 'react';
import { Select, Option } from '@material-tailwind/react';
import ArrowDown from 'assets/arrow-down.svg';

type Props = {
  name: string;
  labelText: string;
  selectedValue: string;
  width: string;
  options: string[];
  onChange: (value: string | undefined) => void;
};

export const Dropdown: React.FC<Props> = ({
  name,
  labelText,
  selectedValue,
  width,
  options,
  onChange,
}) => {
  return (
    <div className={`w-[${width}]`}>
      <Select
        label={labelText}
        name={name}
        value={selectedValue}
        arrow={<img src={ArrowDown} alt="arrow" />}
        placeholder={labelText}
        onChange={onChange}
        labelProps={{
          className:
            'top-[-20px] left-[-14px] small-text text-Secondary before:border-none after:border-none',
        }}
        menuProps={{ className: 'p-0 rounded-none border border-Elements' }}
        containerProps={{
          className: '!min-w-[128px] h-[40px]',
        }}
        className="py-[10px] px-[12px] border border-Icons hover:border-Secondary rounded-none button-text text-Primary"
      >
        {options.map((option: string) => (
          <Option
            value={option}
            key={option}
            className="py-[6px] px-[12px] button-text option focus:bg-Hover-BG hover:bg-Hover-BG focus:text-Primary hover:text-Primary"
          >
            {option}
          </Option>
        ))}
      </Select>
    </div>
  );
};
