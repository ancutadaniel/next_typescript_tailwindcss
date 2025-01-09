"use client";

interface SubmitButtonProps {
  pending?: boolean;
}

export function SubmitButton({ pending }: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus:ring-offset-gray-900"
    >
      {pending ? "Sending..." : "Send Message"}
    </button>
  );
}
