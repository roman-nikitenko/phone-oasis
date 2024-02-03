import React from 'react';

export const BackToTop: React.FC = () => {
  return (
    <div className=" items-center gap-[16px] hidden sm:flex">
      <span className="small-text text-Secondary">Back to top</span>
      <div className="flex justify-center items-center border border-Icons w-[32px] h-[32px]">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.52876 10.4714C3.26841 10.211 3.26841 9.7889 3.52876 9.52855L7.52876 5.52856C7.78911 5.26821 8.21122 5.26821 8.47157 5.52856L12.4716 9.52856C12.7319 9.78891 12.7319 10.211 12.4716 10.4714C12.2112 10.7317 11.7891 10.7317 11.5288 10.4714L8.00016 6.94277L4.47157 10.4714C4.21122 10.7317 3.78911 10.7317 3.52876 10.4714Z" fill="#313237"/>
        </svg>
      </div>
    </div>
  );
};