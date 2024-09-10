import React from 'react';

type Props = {
  titleText: string;
};

export const Title: React.FC<Props> = ({ titleText }) => {
  return (
    <>
      <h2 className="">{titleText}</h2>
      <div className="mt-[16px] mb-[25px] border-b border-Elements" />
    </>
  );
};
