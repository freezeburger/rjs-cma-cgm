import React, { lazy, Suspense } from 'react';

const LazyFeatTopic = lazy(() => import('./FeatTopic'));

const FeatTopic = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFeatTopic {...props} />
  </Suspense>
);

export default FeatTopic;
