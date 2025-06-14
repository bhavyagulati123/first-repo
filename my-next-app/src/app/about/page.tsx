'use client';

import { useCounterStore } from '@/store/counterStore';
//this is page.tsx
export default function AboutPage() {
  const count = useCounterStore((state) => state.count);

  return (
    <div>
      <h1 className="text-2xl font-semibold">About Page</h1>
      <p>Current counter value (from global store): {count}</p>
    </div>
  );
}
