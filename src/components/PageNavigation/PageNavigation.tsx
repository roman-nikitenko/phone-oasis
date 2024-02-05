import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { getProductNameFromPath } from 'utils/getProductNameFromPath.ts';
import HomeIcon from 'assets/home.svg';
import ArrowRight from 'assets/arrow-right-darkgrey.svg';

export const PageNavigation: React.FC = () => {
  const { pathname } = useLocation();
  const paths: string[] = pathname.split('/');
  const lastElementOfPath = paths.length - 1;

  return (
    <div className="flex gap-[8px]">
      <img src={HomeIcon} alt="home icon" />
      {paths &&
        paths.map(
          (path: string, index: number) =>
            path !== '' && (
              <div key={path} className="flex items-center gap-[8px]">
                <img src={ArrowRight} alt="home icon" height="16px" />
                {lastElementOfPath !== index ? (
                  <Link to={`/${path}`} className="small-text text-Primary hover:text-Secondary">
                    {getProductNameFromPath(path)}
                  </Link>
                ) : (
                  <span className="small-text cursor-default text-Secondary">
                    {getProductNameFromPath(path)}
                  </span>
                )}
              </div>
            )
        )}
    </div>
  );
};
