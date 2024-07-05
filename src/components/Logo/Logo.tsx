import { Link } from 'react-router-dom';

import { LogoIcon } from '../../assets';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return (
    <Link className={className} to={'/'}>
      <LogoIcon width={269} height={40}></LogoIcon>
    </Link>
  );
};

export default Logo;
