import clsx from 'clsx';

import { ArrowIcon } from '../../assets';

import s from './GetInTouchButton.module.css';

interface GetInTouchButtonProps {
  customClassName?: string | undefined;
  className?: string;
}

const GetInTouchButton = ({ customClassName, className }: GetInTouchButtonProps) => {
  return (
    <a className={customClassName ?? clsx(className, s.button)} href="#contact-us">
      Get in touch
      <div className={s.arrowIcon}>
        <ArrowIcon width={8} height={9} />
      </div>
    </a>
  );
};

export default GetInTouchButton;
