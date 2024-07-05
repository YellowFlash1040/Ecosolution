import s from './PageContainer.module.css';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: PageContainerProps) => {
  return <div className={s.container}>{children}</div>;
};

export default PageContainer;
