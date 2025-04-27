// app/loading.tsx
"use client";

import React from "react";

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent mx-auto mb-4"></div>
        <p className="text-gray-700 text-lg">Loading...</p>
      </div>
    </div>
  );
}
