import clsx from 'clsx';

import s from './BurgerMenuButton.module.css';
import { BurgerMenuIcon } from '../../assets';

interface BurgerMenuButtonProps {
  className?: string;
  customClassName?: string;
}

const BurgerMenuButton = ({ customClassName, className }: BurgerMenuButtonProps) => {
  return (
    <button className={customClassName ?? clsx(s.button, className)} type="button">
      <BurgerMenuIcon width={16} height={16} />
    </button>
  );
};

export default BurgerMenuButton;
