import React, { useState } from 'react';
import classNames from 'classnames';
import { Button } from 'components/Button/Button.tsx';

export const ProductCapacity: React.FC = () => {
  const [selectedCapacity, setSelectedCapacity] = useState('64 GB');

  return (
    <div className="py-[24px] border-b border-b-Elements">
      <p className="pb-[8px] text-Icons small-text">Select capacity</p>
      <div className="max-w-[195px] flex gap-[8px]">
        <Button
          text="64 GB"
          className={classNames(
            'small-text capacity-Button',
            selectedCapacity !== '64 GB' ? 'not-Active-Capacity-Button' : 'active-Capacity-Button'
          )}
          isDisabled={false}
          onClick={() => setSelectedCapacity('64 GB')}
        />
        <Button
          text="256 GB"
          className={classNames(
            'small-text capacity-Button',
            selectedCapacity !== '256 GB' && 'not-Active-Capacity-Button'
          )}
          isDisabled={false}
          onClick={() => setSelectedCapacity('256 GB')}
        />
        <Button
          text="512 GB"
          className={classNames(
            'small-text capacity-Button',
            selectedCapacity !== '512 GB' && 'not-Active-Capacity-Button'
          )}
          isDisabled={false}
          onClick={() => setSelectedCapacity('512 GB')}
        />
      </div>
    </div>
  );
};
