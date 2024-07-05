import clsx from 'clsx';

import s from './LearnMoreButton.module.css';
import { ArrowIcon } from '../../assets';

interface LearnMoreButtonProps {
  customClassName?: string;
  className?: string;
}

const LearnMoreButton = ({ customClassName, className }: LearnMoreButtonProps) => {
  return (
    <button className={customClassName ?? clsx(className, s.button)} type="button">
      Learn more
      <div className={s.arrowIconContainer}>
        <ArrowIcon width={16} height={16} />
      </div>
    </button>
  );
};

export default LearnMoreButton;
