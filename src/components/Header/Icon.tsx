import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Marker } from './Marker.tsx';

type Props = {
  image: string;
  link: string;
  quantity?: number;
};

export const Icon: React.FC<Props> = ({ image, link, quantity }) => {
  return (
    <>
      <NavLink
        to={link}
        className={({ isActive }) =>
          classNames(
            'relative cursor-pointer border-l border-Elements w-[64px] h-[64px] flex justify-center items-center',
            {
              'is-Active-nav': isActive,
              'before:w-[65px] before:z-10': isActive,
            }
          )
        }
      >
        {quantity !== 0 && <Marker>{quantity}</Marker>}
        <img src={image} alt="icon" />
      </NavLink>
    </>
  );
};
