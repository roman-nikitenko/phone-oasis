import React from 'react';
import { Logo } from 'components/Logo/Logo.tsx';
import { FooterNav } from './FooterNav.tsx';
import { BackToTop } from './BackToTop.tsx';

export const Footer: React.FC = () => (
  <div className="absolute bottom-0 w-full">
    <div className="flex items-center justify-between pt-[23px] pb-[22px] border-t border-Elements px-5 md:px-10 lg:px-14">
      <Logo />
      <FooterNav />
      <BackToTop />
    </div>
  </div>
);
