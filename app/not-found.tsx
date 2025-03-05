"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function NotFound() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the 404 number with a bounce effect
      gsap.from(".number-404", {
        scale: 2,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
      });

      // Animate the text elements
      gsap.from(".text-animate", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Animate the button
      gsap.from(".button-animate", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        delay: 0.6,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex min-h-[70vh] flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="number-404 mb-4 text-8xl font-bold text-blue-600">404</h1>
      <div className="text-animate mb-2">
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
          Page Not Found
        </h2>
      </div>
      <div className="text-animate mb-8 max-w-md text-gray-600 dark:text-gray-400">
        <p>
          The page you&apos;re looking for doesn&apos;t exist or has been moved
          to another URL.
        </p>
      </div>
      <Link
        href="/"
        className="button-animate inline-flex items-center rounded-md bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
      >
        Return Home
      </Link>
    </div>
  );
}
