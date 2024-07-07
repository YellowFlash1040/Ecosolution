import clsx from 'clsx';
import { useLocation } from 'react-router-dom';
import { MouseEvent } from 'react';

import { ArrowIcon } from '../../assets';
import { transformLinkIntoText } from '../../helpers';

import s from './Navigation.module.css';

interface NavigationProps {
  customClassName?: string;
  className?: string;
  onPageChange?: () => void;
}

const Navigation = ({ customClassName, className, onPageChange }: NavigationProps) => {
  const pages = ['#main', '#about', '#cases', '#FAQ', '#contact-us'];
  const location = useLocation();

  const handleOnPageClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.currentTarget.blur();

    if (onPageChange) {
      onPageChange();
    }
  };

  return (
    <nav className={customClassName ?? clsx(className, s.navigation)}>
      <ul className={s.pagesList}>
        {pages.map((page) => (
          <li key={page} className={s.pageItem}>
            <a
              className={clsx(s.page, { [s.activePage]: location.hash === page })}
              href={page}
              onClick={handleOnPageClick}
            >
              {transformLinkIntoText(page)}
              <ArrowIcon width={16} height={16} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
