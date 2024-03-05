import React, { lazy, Suspense } from 'react';

const LazyViewProfile = lazy(() => import('./ViewProfile'));

const ViewProfile = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewProfile {...props} />
  </Suspense>
);

export default ViewProfile;
