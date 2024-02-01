import React from 'react';
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <div className="">
      <Link to="/">
        <img src={logo} />
      </Link>
    </div>
  );
};
