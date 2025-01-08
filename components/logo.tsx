import React from "react";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        viewBox="0 0 240 50"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-auto"
      >
        {/* Isometric cube base */}
        <path
          d="M25 35 L5 25 L25 15 L45 25 Z"
          className="fill-blue-600 dark:fill-blue-500"
          opacity="0.9"
        />
        {/* Cube right face */}
        <path
          d="M45 25 L25 35 L25 15 L45 25"
          className="fill-blue-700 dark:fill-blue-600"
          opacity="0.8"
        />
        {/* Cube top face */}
        <path
          d="M25 15 L5 25 L25 35 L25 15"
          className="fill-blue-500 dark:fill-blue-400"
          opacity="0.95"
        />

        {/* Connection nodes */}
        <circle cx="25" cy="15" r="2" className="fill-orange-500" />
        <circle cx="5" cy="25" r="2" className="fill-orange-500" />
        <circle cx="45" cy="25" r="2" className="fill-orange-500" />
        <circle cx="25" cy="35" r="2" className="fill-orange-500" />

        {/* Connection lines */}
        <path
          d="M25 15 L5 25 M25 15 L45 25 M25 35 L45 25 M25 35 L5 25"
          className="stroke-orange-500"
          strokeWidth="1"
          opacity="0.6"
        />

        {/* Web3 Text */}
        <text
          x="60"
          y="35"
          className="fill-current text-2xl font-bold"
          style={{ fontFamily: "system-ui" }}
        >
          Web 3 Bit
        </text>
      </svg>
    </div>
  );
};

export default Logo;
