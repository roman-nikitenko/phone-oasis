import React from 'react';
import classNames from 'classnames';

type Props = {
  iconSrc: string;
  disabledIconSrc?: string;
  className?: string;
  isDisabled?: boolean;
  onClick: () => void;
};

export const IconButton: React.FC<Props> = ({
  iconSrc,
  className,
  isDisabled,
  disabledIconSrc,
  onClick,
}) => {
  const getButtonClassNames = (): string =>
    classNames(
      'flex justify-center items-center border cursor-pointer transition-colors',
      'min-w-[32px] min-h-[32px] border-Icons hover:border-Primary disabled:border-Elements disabled:cursor-auto',
      className && className
    );

  return (
    <button className={getButtonClassNames()} onClick={onClick} disabled={isDisabled}>
      <img src={disabledIconSrc && isDisabled ? disabledIconSrc : iconSrc} alt="icon" />
    </button>
  );
};
