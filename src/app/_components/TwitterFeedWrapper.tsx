'use client';

import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const TwitterFeed = dynamic(() => import('./TwitterFeed'), {
  ssr: false,
  loading: () => <div>Loading Twitter...</div>,
});

export default function TwitterFeedWrapper() {
  return (
    <Suspense fallback={<div>Loading Twitter feed…</div>}>
      <TwitterFeed />
    </Suspense>
  );
}
