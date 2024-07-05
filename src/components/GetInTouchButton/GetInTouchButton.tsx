import clsx from 'clsx';

import s from './GetInTouchButton.module.css';

interface GetInTouchButtonProps {
  customClassName?: string;
  className?: string;
}

const GetInTouchButton = ({ customClassName, className }: GetInTouchButtonProps) => {
  return (
    <button className={customClassName ?? clsx(className, s.button)}>Get in touch</button>
  );
};

export default GetInTouchButton;
