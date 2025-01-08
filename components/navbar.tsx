"use client";

import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import Logo from "./logo";
import { Bars3Icon } from "@heroicons/react/24/outline";

interface NavbarProps {
  onMenuClick: () => void;
}

export function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <button
            onClick={onMenuClick}
            className="mr-4 rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 lg:hidden"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
          <Link href="/" className="flex items-center pl-0">
            <Logo className="h-8" />
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
