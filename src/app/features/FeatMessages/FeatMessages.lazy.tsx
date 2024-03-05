import React, { lazy, Suspense } from 'react';

const LazyFeatMessages = lazy(() => import('./FeatMessages'));

const FeatMessages = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatMessages {...props} />
  </Suspense>
);

export default FeatMessages;
