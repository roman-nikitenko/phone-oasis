import React from 'react';

type Props = {
  title: string;
  modelQuantity?: number;
};

export const PageTitle: React.FC<Props> = ({ title, modelQuantity }) => (
  <div>
    <h1 className="text-[30px] sm:text-[32px] text-Primary">{title}</h1>
    {modelQuantity && <p className="pt-[8px] font-medium text-Secondary">{modelQuantity} models</p>}
  </div>
);
