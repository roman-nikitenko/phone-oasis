import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const Navigation: React.FC = () => {
  const getNavigationLink = ({ isActive }: { isActive: boolean }) =>
    classNames(
      'uppercase border-b-[3px] border-transparent text-Secondary hover:text-Primary pt-[27px] pb-[23px]',
      { 'is-Active-nav': isActive }
    );

  return (
    <div className="">
      <ul className="flex gap-[64px]">
        <NavLink className={getNavigationLink} to="/">
          <li className="">home</li>
        </NavLink>

        <NavLink className={getNavigationLink} to="/phones">
          <li className="">phones</li>
        </NavLink>

        <NavLink className={getNavigationLink} to="/tablets">
          <li className="">tablets</li>
        </NavLink>

        <NavLink className={getNavigationLink} to="/accessories">
          <li className="">accessories</li>
        </NavLink>
      </ul>
    </div>
  );
};
