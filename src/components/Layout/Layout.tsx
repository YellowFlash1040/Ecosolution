import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Header, PageLoader } from '../../components';

const Layout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Layout;
