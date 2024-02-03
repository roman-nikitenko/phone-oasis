import React from 'react';
import { Logo } from '../Logo/Logo.tsx';
import { Navigation } from './Navigation.tsx';
import { Icon } from './Icon.tsx';
import basket from '../../assets/cart.svg';
import like from '../../assets/like.svg';

export const Header: React.FC = () => {
  return (
    <div className="h-[64px] flex items-center pl-[24px] justify-between relative border-b border-Elements">
      <div className="flex gap-[64px] items-center">
        <Logo />
        <div className="hidden md:flex">
          <Navigation />
        </div>
      </div>
      <div className="flex">
        <Icon image={like} />
        <Icon image={basket} />
      </div>
    </div>
  );
};
