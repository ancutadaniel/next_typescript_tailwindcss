"use client";

import { useSidebar } from "../providers/sidebar-context";

export function MainContent({ children }: { children: React.ReactNode }) {
  const { isExpanded } = useSidebar();

  return (
    <main
      className={`min-h-screen transition-all duration-300 pt-16 ${
        isExpanded ? "lg:pl-64" : "lg:pl-16"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {children}
      </div>
    </main>
  );
}
