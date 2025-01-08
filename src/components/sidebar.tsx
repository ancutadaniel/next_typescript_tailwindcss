"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  XMarkIcon,
  ShoppingBagIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import Logo from "./logo";
import { Navbar } from "./navbar";
import { useSidebar } from "@/providers/sidebar-context";

const navigation = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "About", href: "/about", icon: InformationCircleIcon },
  { name: "Products", href: "/products", icon: ShoppingBagIcon },
  { name: "Contact", href: "/contact", icon: EnvelopeIcon },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { isExpanded, setIsExpanded } = useSidebar();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <Navbar onMenuClick={toggleSidebar} />
      <div
        className={`fixed left-0 top-0 z-40 flex h-full flex-col bg-white transition-all duration-300 dark:bg-gray-900 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        } ${
          isExpanded ? "w-64" : "w-16"
        } border-r border-gray-200 dark:border-gray-800`}
      >
        {/* Header with toggle button */}
        <div className="flex h-16 items-center justify-between px-4">
          <Link
            href="/"
            className={`flex items-center ${!isExpanded && "hidden"}`}
          >
            <Logo className="h-8" />
          </Link>
          <button
            onClick={toggleSidebar}
            className="rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300 lg:hidden"
          >
            <XMarkIcon className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center rounded-md p-2 transition-colors ${
                  isActive
                    ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {isExpanded && <span className="ml-3">{item.name}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Theme Toggle - Only show when expanded */}
        {isExpanded && (
          <div className="border-t border-gray-200 p-4 dark:border-gray-800">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                Theme
              </span>
              <ThemeToggle compact />
            </div>
          </div>
        )}

        {/* Collapse/Expand Button */}
        <button
          onClick={toggleExpanded}
          className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full bg-white text-gray-500 shadow-md hover:bg-gray-50 hover:text-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300 lg:flex"
        >
          {isExpanded ? (
            <ChevronLeftIcon className="h-4 w-4" />
          ) : (
            <ChevronRightIcon className="h-4 w-4" />
          )}
        </button>
      </div>
    </>
  );
}
