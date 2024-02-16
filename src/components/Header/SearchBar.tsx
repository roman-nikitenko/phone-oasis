import React, { useState } from 'react';
import searchIcon from '../../assets/search.svg';
import closeIcon from '../../assets/close.svg';

export const SearchBar: React.FC = () => {
  const [inputText, setInputText] = useState('');

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const clearInputTextField = () => {
    setInputText('');
  };

  const isEmptyField = inputText.trim().length === 0;

  return (
    <label className="border-l border-Elements flex items-center md:w-[327px]  justify-between">
      <input
        type="text"
        className="text-Secondary pl-[24px] flex-1 focus:outline-none "
        placeholder="Search in phones..."
        value={inputText}
        onChange={inputTextHandler}
      />
      <div className="hidden md:block">
        {isEmptyField && <img className="w-[18px] h-[18px] mr-[24px]" src={searchIcon} />}
        {!isEmptyField && (
          <img
            onClick={clearInputTextField}
            className="w-[18px] h-[18px] mr-[24px] cursor-pointer"
            src={closeIcon}
          />
        )}
      </div>

    </label>
  );
};
