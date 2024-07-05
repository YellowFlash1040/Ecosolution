import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { PageLoader } from '../../components';

const Layout = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Outlet />
    </Suspense>
  );
};

export default Layout;
