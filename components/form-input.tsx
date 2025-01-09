import { FormInputProps } from "../types/form-inputs";

export function FormInput({
  label,
  name,
  type,
  placeholder,
  required = true,
  rows,
  error,
}: FormInputProps) {
  const baseInputClasses =
    "mt-1 block w-full rounded-md border px-3 py-2 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-blue-500 dark:text-white dark:placeholder-gray-500";

  const inputClasses = `${baseInputClasses} ${
    error
      ? "border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500"
      : "border-gray-300 focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800"
  }`;

  const labelClasses =
    "block text-sm font-medium text-gray-700 dark:text-gray-300";

  return (
    <div>
      <label htmlFor={name} className={labelClasses}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          name={name}
          id={name}
          required={required}
          rows={rows}
          className={inputClasses}
          placeholder={placeholder}
        />
      ) : (
        <input
          type={type}
          name={name}
          id={name}
          required={required}
          className={inputClasses}
          placeholder={placeholder}
        />
      )}
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
}
