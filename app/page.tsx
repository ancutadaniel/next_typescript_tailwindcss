"use client";

export default function Home() {
  return (
    <div className="space-y-12">
      <div className="rounded-lg border bg-white p-8 dark:bg-gray-900">
        <h1 className="mb-4 text-3xl font-bold">Welcome to Web3Bit</h1>
        <p className="text-gray-600 dark:text-gray-300">
          This is a modern Next.js application built with TypeScript and
          Tailwind CSS. It features a responsive layout, dark mode support, and
          interactive elements.
        </p>
      </div>

      {/* Interactive cards that will react to the cursor */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[
          { title: "Development", desc: "Custom web development solutions" },
          { title: "Design", desc: "Beautiful and intuitive UI/UX design" },
          { title: "Innovation", desc: "Cutting-edge web3 technologies" },
        ].map((card, i) => (
          <button
            key={i}
            className="group rounded-lg border bg-white p-6 transition-all duration-300 hover:scale-105 dark:bg-gray-900"
          >
            <h3 className="mb-2 text-xl font-semibold text-blue-500">
              {card.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">{card.desc}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
