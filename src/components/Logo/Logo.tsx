import { Link } from 'react-router-dom';
import clsx from 'clsx';

import { LogoIcon } from '../../assets';

import s from './Logo.module.css';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={clsx(className, s.logo)} to={'/'}>
      <LogoIcon width={269} height={40}></LogoIcon>
    </Link>
  );
};

export default Logo;
