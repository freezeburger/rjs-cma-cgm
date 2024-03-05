import React, { lazy, Suspense } from 'react';

const LazyViewTopic = lazy(() => import('./ViewTopic'));

const ViewTopic = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyViewTopic {...props} />
  </Suspense>
);

export default ViewTopic;
