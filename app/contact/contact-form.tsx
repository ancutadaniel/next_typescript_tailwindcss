"use client";

import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "sonner";
import { handleContactSubmit, type ContactFormState } from "@/actions/contact";
import { FormInput } from "@/components/form-input";
import { SubmitButton } from "@/components/submit-button";
import { formFields } from "@/types/form-inputs";

const initialState: ContactFormState = {
  message: undefined,
  errors: {},
  success: false,
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    handleContactSubmit,
    initialState
  );

  useEffect(() => {
    if (state?.message && Object.keys(state.errors || {}).length === 0) {
      if (state.success) {
        toast.success(state.message);
      } else {
        toast.error(state.message);
      }
    }
  }, [state]);

  return (
    <form action={formAction} className="space-y-4">
      {formFields.map((field) => (
        <FormInput
          key={field.name}
          {...field}
          error={state?.errors?.[field.name as keyof typeof state.errors]?.[0]}
        />
      ))}
      <div>
        <SubmitButton pending={isPending} />
      </div>
      {isPending && (
        <p className="text-sm text-gray-500">Processing your request...</p>
      )}
    </form>
  );
}
