// app/error.tsx
"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-red-100">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
        <p className="text-gray-700 mb-6">{error.message || "An unexpected error occurred."}</p>
        {/* Button try again */}
        <button onClick={reset} className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Try again
        </button>
      </div>
    </div>
  );
}
