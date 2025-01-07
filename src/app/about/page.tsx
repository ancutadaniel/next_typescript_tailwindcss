export default function About() {
  return (
    <div className="rounded-lg border bg-white p-8 dark:bg-gray-900">
      <h1 className="mb-4 text-3xl font-bold">About Us</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-300">
        We are a team dedicated to building modern web applications using the
        latest technologies.
      </p>
      <p className="text-gray-600 dark:text-gray-300">
        Our tech stack includes:
      </p>
      <ul className="mt-4 list-inside list-disc space-y-2 text-gray-600 dark:text-gray-300">
        <li>Next.js 14</li>
        <li>React 19</li>
        <li>TypeScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>
  );
}
