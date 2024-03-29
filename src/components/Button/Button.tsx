import React from 'react';
import classNames from 'classnames';

type Props = {
  text: string;
  className?: string;
  isDisabled?: boolean;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, className, isDisabled, onClick }) => {
  const getButtonClassNames = (): string =>
    classNames(
      'flex justify-center items-center border cursor-pointer transition-colors',
      text &&
        'flex-1 h-[40px] button-text border-Primary bg-Primary text-White hover:button-shadow hover:bg-White hover:text-Primary active:border-Elements active:text-Green active:bg-White',
      className && className
    );

  return (
    <button className={getButtonClassNames()} onClick={onClick} disabled={isDisabled}>
      {text && text}
    </button>
  );
};
