import React from 'react';
import { Logo } from 'components/Logo/Logo.tsx';
import { Navigation } from './Navigation.tsx';
import { Icon } from './Icon.tsx';
import basket from 'assets/cart.svg';
import like from 'assets/like.svg';
import { useLocation } from 'react-router';
import { SearchBar } from './SearchBar.tsx';

export const Header: React.FC = () => {
  const location = useLocation();
  const isNotHome = location.pathname !== '/' && true;

  return (
    <div className="h-[64px] flex items-center pl-[24px] justify-between relative border-b border-Elements">
      <div className="flex gap-[64px] items-center">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex">
        { isNotHome && <SearchBar /> }

          <Icon image={like} link="favourites" />
          <Icon image={basket} link="basket" />

      </div>
    </div>
  );
};
