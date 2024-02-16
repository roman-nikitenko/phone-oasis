import React from 'react';
import { Logo } from 'components/Logo/Logo.tsx';
import { Navigation } from './Navigation.tsx';
import { Icon } from './Icon.tsx';
import basket from 'assets/cart.svg';
import like from 'assets/like.svg';
import { useLocation } from 'react-router';
import { SearchBar } from './SearchBar.tsx';
import { useAppSelector } from '../../hooks/hooks.ts';
import useScreenSize from '../../hooks/useScreenSize.tsx';

export const Header: React.FC = () => {
  const location = useLocation();
  const isNotHome = location.pathname !== '/' && true;
  const phones = useAppSelector((state) => state.phones);
  const basketFromStore = useAppSelector((state) => state.basket);
  const basketQuantity = basketFromStore.length;
  const favoriteQuantity = phones.filter((p) => p.isFavourite).length;
  const { widthScreen, heightScreen } = useScreenSize();

  console.log(widthScreen, heightScreen);

  return (
    <div className="h-[64px] flex items-center sm:pl-[24px] justify-between relative border-b border-Elements">
      <div className="flex gap-[64px] items-center">
        <Logo />
        <div className="hidden xl:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex">
        {isNotHome && <SearchBar />}
        <Icon quantity={+favoriteQuantity} image={like} link="favourites" />
        <Icon quantity={+basketQuantity} image={basket} link="basket" />
      </div>
    </div>
  );
};
