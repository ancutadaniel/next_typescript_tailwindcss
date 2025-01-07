export interface FormInputProps {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  placeholder: string;
  required?: boolean;
  rows?: number;
}

export const formFields: FormInputProps[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    placeholder: "Your name",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "your.email@example.com",
  },
  {
    label: "Message",
    name: "message",
    type: "textarea",
    placeholder: "Your message",
    rows: 4,
  },
];
