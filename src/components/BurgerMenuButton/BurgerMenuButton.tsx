import clsx from 'clsx';

import s from './BurgerMenuButton.module.css';
import { BurgerMenuIcon } from '../../assets';

interface BurgerMenuButtonProps {
  className?: string | undefined;
  customClassName?: string | undefined;
  onClick?: () => void;
}

const BurgerMenuButton = ({
  customClassName,
  className,
  onClick
}: BurgerMenuButtonProps) => {
  return (
    <button
      className={customClassName ?? clsx(s.button, className)}
      type="button"
      onClick={onClick}
    >
      <BurgerMenuIcon width={16} height={16} />
    </button>
  );
};

export default BurgerMenuButton;
