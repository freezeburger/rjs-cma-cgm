import React, { lazy, Suspense } from 'react';

const LazyLayoutBase = lazy(() => import('./LayoutBase'));

const LayoutBase = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutBase {...props} />
  </Suspense>
);

export default LayoutBase;
