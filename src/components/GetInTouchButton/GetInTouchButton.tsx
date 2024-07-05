import clsx from 'clsx';

import s from './GetInTouchButton.module.css';

interface GetInTouchButtonProps {
  customClassName?: string;
  className?: string;
}

const GetInTouchButton = ({ customClassName, className }: GetInTouchButtonProps) => {
  const handleOnClick = () => {
    document.getElementById('contact-us')!.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <a
      className={customClassName ?? clsx(className, s.button)}
      href="#contact-us"
      onClick={handleOnClick}
    >
      Get in touch
    </a>
  );
};

export default GetInTouchButton;
