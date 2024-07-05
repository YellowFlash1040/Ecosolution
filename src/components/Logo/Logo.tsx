import { LogoIcon } from '../../assets';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <LogoIcon className={className} width={269} height={40}></LogoIcon>;
};

export default Logo;
