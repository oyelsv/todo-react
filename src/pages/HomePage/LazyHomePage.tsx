import React, { lazy, Suspense } from 'react';

const HomePage = lazy(() => import(/* webpackChunkName: "HomePage" */ './HomePage'));

const LazyHomePage = (): React.ReactElement => (
  <Suspense fallback={null}>
    <HomePage />
  </Suspense>
);

LazyHomePage.displayName = 'LazyHomePage';

export default LazyHomePage;
