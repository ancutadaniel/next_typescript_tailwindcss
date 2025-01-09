import { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us | Web3 Bit",
  description:
    "Get in touch with us. We'd love to hear from you and answer any questions you may have.",
  openGraph: {
    title: "Contact Us | Web3 Bit",
    description:
      "Get in touch with us. We'd love to hear from you and answer any questions you may have.",
    type: "website",
  },
};

export default function Contact() {
  return (
    <div className="rounded-lg border bg-white p-8 dark:bg-gray-900">
      <h1 className="mb-4 text-3xl font-bold">Contact Us</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <div>
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Get in touch with us using the form or contact information below.
          </p>

          <div className="space-y-4">
            <div>
              <h2 className="text-lg font-semibold">Email</h2>
              <p className="text-gray-600 dark:text-gray-300">
                contact@example.com
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Address</h2>
              <p className="text-gray-600 dark:text-gray-300">
                123 Main Street
                <br />
                City, State 12345
                <br />
                Country
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold">Hours</h2>
              <p className="text-gray-600 dark:text-gray-300">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday - Sunday: Closed
              </p>
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
