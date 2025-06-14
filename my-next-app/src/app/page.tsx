'use client';

import { useState } from 'react';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <p className="mb-4">Click the button to increase the counter:</p>
      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}
