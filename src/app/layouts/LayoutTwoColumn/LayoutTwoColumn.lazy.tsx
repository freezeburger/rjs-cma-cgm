import React, { lazy, Suspense } from 'react';

const LazyLayoutTwoColumn = lazy(() => import('./LayoutTwoColumn'));

const LayoutTwoColumn = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayoutTwoColumn {...props} />
  </Suspense>
);

export default LayoutTwoColumn;
