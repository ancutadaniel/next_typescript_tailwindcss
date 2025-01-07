"use client";

import {
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/outline";
import { useTheme } from "next-themes";
import { useRef } from "react";

interface ThemeToggleProps {
  compact?: boolean;
}

export function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();

  return (
    <div
      className={`flex items-center space-x-1 rounded-md border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900 ${
        compact ? "p-1" : "p-2"
      }`}
    >
      <button
        suppressHydrationWarning
        className={`rounded-lg ${
          compact ? "p-1" : "p-1.5"
        } text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
          theme === "light"
            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            : ""
        }`}
        onClick={() => setTheme("light")}
        aria-label="Light Mode"
      >
        <SunIcon className={`${compact ? "h-4 w-4" : "h-5 w-5"}`} />
      </button>
      <button
        suppressHydrationWarning
        className={`rounded-lg ${
          compact ? "p-1" : "p-1.5"
        } text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
          theme === "dark"
            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            : ""
        }`}
        onClick={() => setTheme("dark")}
        aria-label="Dark Mode"
      >
        <MoonIcon className={`${compact ? "h-4 w-4" : "h-5 w-5"}`} />
      </button>
      <button
        suppressHydrationWarning
        className={`rounded-lg ${
          compact ? "p-1" : "p-1.5"
        } text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${
          theme === "system"
            ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
            : ""
        }`}
        onClick={() => setTheme("system")}
        aria-label="System Mode"
      >
        <ComputerDesktopIcon className={`${compact ? "h-4 w-4" : "h-5 w-5"}`} />
      </button>
    </div>
  );
}
