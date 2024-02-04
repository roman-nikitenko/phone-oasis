import React from 'react';
import { Logo } from 'components/Logo/Logo.tsx';
import { Navigation } from './Navigation.tsx';
import { Icon } from './Icon.tsx';
import basket from 'assets/cart.svg';
import like from 'assets/like.svg';
import { useLocation } from 'react-router';
import searchIcon from 'assets/search.svg'

export const Header: React.FC = () => {
  const location = useLocation();

  if (location.pathname !== '/') {
    console.log('not home')
  }

  const isNotHome = location.pathname !== '/' && true

  return (
    <div className="h-[64px] flex items-center pl-[24px] justify-between relative border-b border-Elements">
      <div className="flex gap-[64px] items-center">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex">
        { isNotHome && (
          <label className="border-l border-Elements flex items-center w-[327px] justify-between">
            <input
              type="text"
              className="text-Secondary pl-[24px] focus:outline-none "
              placeholder="Search in phones..."
            />
            <img className="w-[18px] h-[18px] mr-[24px]" src={searchIcon} />
          </label>
        ) }
        <Icon image={like} />
        <Icon image={basket} />
      </div>
    </div>
  );
};
