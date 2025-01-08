"use client";

import { useRef } from "react";
import { toast } from "sonner";
import { submitContactForm } from "@/actions/contact";
import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/submit-button";
import { formFields } from "@/types/form-inputs";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(formData: FormData) {
    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        formRef.current?.reset();
        toast.success(response.message || "Message sent successfully!");
      } else {
        toast.error(
          response.message || "Failed to send message. Please try again."
        );
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
      console.error("Contact form error:", error);
    }
  }

  return (
    <form ref={formRef} action={handleSubmit} className="space-y-4">
      {formFields.map((field) => (
        <FormInput key={field.name} {...field} />
      ))}
      <div>
        <SubmitButton />
      </div>
    </form>
  );
}
