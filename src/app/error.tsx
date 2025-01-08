"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the error message elements
      gsap.from(".error-animate", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate the buttons with a bounce effect
      gsap.from(".button-animate", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.4,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
    >
      <div className="error-animate">
        <h1 className="mb-2 text-6xl font-bold text-red-500">Oops!</h1>
        <h2 className="mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Something went wrong
        </h2>
      </div>

      <div className="error-animate mb-8 max-w-md text-gray-600 dark:text-gray-400">
        <p>
          {error.message ||
            "An unexpected error occurred. Please try again later."}
        </p>
      </div>

      <div className="flex gap-4">
        <button
          onClick={reset}
          className="button-animate inline-flex items-center rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="button-animate inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
        >
          Go Home
        </Link>
      </div>

      {error.digest && (
        <div className="error-animate mt-8">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Error ID: {error.digest}
          </p>
        </div>
      )}
    </div>
  );
}
