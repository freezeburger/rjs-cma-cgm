import React, { lazy, Suspense } from 'react';

const LazyLayoutFull = lazy(() => import('./LayoutFull'));

const LayoutFull = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutFull {...props} />
  </Suspense>
);

export default LayoutFull;
