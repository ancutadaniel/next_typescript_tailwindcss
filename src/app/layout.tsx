import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/navbar";
import { Sidebar } from "@/components/sidebar";
import { MouseCursor } from "@/components/mouse-cursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEB3BIT | Custom Web Development and Design Services",
  description: `Discover WEB3BIT's innovative and customized web solutions. Specializing in web development and design to elevate your online presence.`,
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MouseCursor />
          <div className="min-h-screen bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
            <Navbar />
            <Sidebar />
            <main className="min-h-screen pt-16 lg:pl-72">
              <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
                {children}
              </div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
