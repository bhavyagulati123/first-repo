'use client';

import { useCounterStore } from '@/store/counterStore';

export default function HomePage() {
  const { count, increase, reset } = useCounterStore();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">The counter will not reset on page change.</p>
      <button
        onClick={increase}
        className="px-4 py-2 bg-blue-600 text-white rounded mr-4"
      >
        Increase Count: {count}
      </button>
      <button
        onClick={reset}
        className="px-4 py-2 bg-gray-400 text-white rounded"
      >
        Reset
      </button>
    </div>
  );
}
