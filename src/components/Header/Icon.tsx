import React from 'react';

type Props = {
  image: string,
}

export const Icon: React.FC<Props> = ({ image }) => {
  //awdawd
  return (
    <div className="cursor-pointer border-l border-Elements w-[64px] h-[64px] flex justify-center items-center">
      <img src={image} />
    </div>
  );
};
