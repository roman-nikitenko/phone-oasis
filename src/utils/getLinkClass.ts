import * as classNames from 'classnames';

export const getLinkClass = ({ isActive }: { isActive: boolean }) => classNames('uppercase text-Secondary hover:text-Primary', {
  'is-Active': isActive
})
