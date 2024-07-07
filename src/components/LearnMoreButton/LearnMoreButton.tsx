import clsx from 'clsx';

import s from './LearnMoreButton.module.css';
import { ArrowIcon } from '../../assets';

interface LearnMoreButtonProps {
  customClassName?: string;
  className?: string;
}

const LearnMoreButton = ({ customClassName, className }: LearnMoreButtonProps) => {
  return (
    <a
      className={customClassName ?? clsx(className, s.button)}
      href="#cases"
      onClick={(e) => e.currentTarget.blur()}
    >
      Learn more
      <div className={s.arrowIconContainer}>
        <ArrowIcon width={16} height={16} />
      </div>
    </a>
  );
};

export default LearnMoreButton;
