export interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
  rows?: number;
  error?: string;
}

export const formFields: FormInputProps[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Your name",
    required: true,
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
    required: true,
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Your message",
    rows: 4,
    required: true,
  },
];
