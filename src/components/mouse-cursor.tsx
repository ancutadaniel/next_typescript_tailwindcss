"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export const MouseCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOuterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOuter = cursorOuterRef.current;

    if (!cursor || !cursorOuter) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const onMouseMove = (e: MouseEvent) => {
      // Animate inner cursor
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
      });

      // Animate outer cursor with slight delay for smooth effect
      gsap.to(cursorOuter, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onMouseEnterLink = () => {
      gsap.to([cursor, cursorOuter], {
        scale: 1.5,
        duration: 0.3,
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to([cursor, cursorOuter], {
        scale: 1,
        duration: 0.3,
      });
    };

    // Add event listeners
    document.addEventListener("mousemove", onMouseMove);

    // Add hover effect for all clickable elements
    const clickables = document.querySelectorAll('a, button, [role="button"]');
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.body.style.cursor = "auto";
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none 
        fixed left-0 top-0 z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500 mix-blend-difference"
      />
      <div
        ref={cursorOuterRef}
        className="pointer-events-none 
        fixed left-0 top-0 z-50 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-500 mix-blend-difference"
      />
    </>
  );
};
