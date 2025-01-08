"use server";

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(formData: FormData) {
  try {
    const data: ContactFormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      throw new Error("All fields are required");
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      throw new Error("Invalid email format");
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

    return { success: true, message: "Message sent successfully!" };
  } catch (error) {
    console.error("Contact form error:", error);
    return {
      success: false,
      message: error instanceof Error ? error.message : "Something went wrong",
    };
  }
}
