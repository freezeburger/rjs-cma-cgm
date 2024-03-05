import React, { lazy, Suspense } from 'react';

const LazyFeatUser = lazy(() => import('./FeatUser'));

const FeatUser = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatUser {...props} />
  </Suspense>
);

export default FeatUser;
