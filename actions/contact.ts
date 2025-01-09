"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormState {
  message?: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
  success?: boolean;
}

export async function handleContactSubmit(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    const errors: ContactFormState["errors"] = {};

    // Validate required fields
    if (!data.name) {
      errors.name = ["Name is required"];
    }
    if (!data.email) {
      errors.email = ["Email is required"];
    }
    if (!data.message) {
      errors.message = ["Message is required"];
    }

    // Validate email format if email exists
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      errors.email = ["Invalid email format"];
    }

    // Return early if there are any validation errors
    if (Object.keys(errors).length > 0) {
      return {
        errors,
        success: false,
        message: "Please fix the errors above",
      };
    }

    // For now, just log the data
    console.log("Contact form submission:", data);

    // Simulate a delay to show loading state
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // In a real application, you would:
    // 1. Send email
    // 2. Store in database
    // 3. Integrate with CRM
    // etc.

    return {
      success: true,
      message: "Message sent successfully!",
      errors: {},
    };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
      errors: {},
    };
  }
}
