import React from 'react';
import classNames from 'classnames';

type Props = {
  text?: string;
  iconSrc?: string;
  disabledIconSrc?: string;
  className?: string;
  isDisabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({
  text,
  iconSrc,
  className,
  isDisabled,
  disabledIconSrc,
  onClick,
}) => {
  const getButtonClassNames = (): string =>
    classNames(
      'flex justify-center items-center border cursor-pointer transition-colors',
      text &&
        'w-[176px] h-[40px] button-text border-Primary bg-Primary text-White hover:button-shadow hover:bg-White hover:text-Primary active:border-Elements active:text-Green active:bg-White',
      iconSrc &&
        'w-[32px] h-[32px] border-Icons hover:border-Primary disabled:border-Elements disabled:cursor-auto',
      className && className
    );

  return (
    <button className={getButtonClassNames()} onClick={onClick} disabled={isDisabled}>
      {text && text}
      {iconSrc && (
        <img src={disabledIconSrc && isDisabled ? disabledIconSrc : iconSrc} alt="icon" />
      )}
    </button>
  );
};
