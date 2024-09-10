import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { useAppDispatch } from 'hooks/hooks.ts';
import { actions as searchActions } from 'store/searchSlice.ts';
import searchIcon from 'assets/search.svg';
import closeIcon from 'assets/close.svg';

export const SearchBar: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const { pathname } = useLocation();
  const productCategory = pathname.split('/')[1];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const inputTextHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const searchText = e.target.value;
    setInputText(searchText);
    navigate(`/${productCategory}`);
    dispatch(searchActions.setSearchedText(searchText));
  };

  const clearInputTextField = (): void => {
    setInputText('');
  };

  const isEmptyField = inputText.trim().length === 0;

  return (
    <label className="border-l border-Elements flex items-center md:w-[327px]  justify-between">
      <input
        type="text"
        className="text-Secondary pl-[24px] flex-1 focus:outline-none "
        placeholder={`Search in ${productCategory}...`}
        value={inputText}
        onChange={inputTextHandler}
      />
      <div className="hidden md:block">
        {isEmptyField && (
          <img className="w-[18px] h-[18px] mr-[24px]" src={searchIcon} alt="search" />
        )}
        {!isEmptyField && (
          <img
            onClick={clearInputTextField}
            className="w-[18px] h-[18px] mr-[24px] cursor-pointer"
            src={closeIcon}
            alt="close"
          />
        )}
      </div>
    </label>
  );
};
