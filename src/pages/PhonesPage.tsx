import React from 'react';
import { PageTitle } from 'components/PageTitle/PageTitle.tsx';
import { PageNavigation } from 'components/PageNavigation/PageNavigation.tsx';

export const PhonesPage: React.FC = () => {
  return (
    <div className="p-[20px] md:p-[40px] xl:px-[152px] lg:pt-[24px] grid gap-[40px]">
      <PageNavigation />
      <PageTitle title="Mobile phones" modelQuantity={95} />
    </div>
  );
};
