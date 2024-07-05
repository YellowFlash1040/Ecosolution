import clsx from 'clsx';

import s from './PageContainer.module.css';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

const PageContainer = ({ className, children }: PageContainerProps) => {
  return <div className={clsx(className, s.container)}>{children}</div>;
};

export default PageContainer;
