import React from 'react';
import { NavLink } from 'react-router-dom';
import { getLinkClass } from 'utils/getLinkClass.ts';

export const FooterNav: React.FC = () => (
  <div>
    <ul className="flex gap-[14px] md:gap-[32px] lg:gap-[64px]">
      <NavLink to="/github" className={getLinkClass}>
        github
      </NavLink>
      <NavLink to="/contacts" className={getLinkClass}>
        contacts
      </NavLink>
      <NavLink to="/rights" className={getLinkClass}>
        rights
      </NavLink>
    </ul>
  </div>
);
