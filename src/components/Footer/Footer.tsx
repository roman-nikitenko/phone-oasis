import React from 'react';
import { Logo } from '../Logo/Logo.tsx';
import { FooterNav } from './FooterNav.tsx';
import { BackToTop } from './BackToTop.tsx';

export const Footer: React.FC = () => {
  return (
    <div className="flex items-center justify-between pt-[23px] pb-[22px] border-t border-Elements px-5 md:px-10 lg:px-14 absolute bottom-0 right-0 left-0">
      <Logo />
      <FooterNav />
      <BackToTop />
    </div>
  );
};
