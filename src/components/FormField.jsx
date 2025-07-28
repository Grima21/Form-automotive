// FormField.jsx

import React from "react";
import { AlertCircle } from "lucide-react";

export const FormField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  options,
  required = false,
}) => {
  const baseInputClasses = `
    w-full px-4 py-3 rounded-lg border-2 transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
    placeholder:text-gray-400
    ${
      error
        ? "border-red-300 bg-red-50"
        : "border-gray-200 bg-white hover:border-gray-300 focus:border-blue-500"
    }
  `;

  const renderInput = () => {
    if (type === "textarea") {
      return (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`${baseInputClasses} min-h-[120px] resize-vertical`}
          rows={4}
        />
      );
    }

    if (type === "select") {
      return (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className={baseInputClasses}
        >
          <option value="">{placeholder || "Seleccionar..."}</option>
          {options &&
            options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
        </select>
      );
    }

    return (
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={baseInputClasses}
      />
    );
  };

  return (
    <div className="space-y-2">
      <label
        htmlFor={name}
        className="block text-sm font-semibold text-gray-700"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderInput()}
      {error && (
        <div className="flex items-center gap-2 text-red-600 text-sm animate-in slide-in-from-top-1 duration-200">
          <AlertCircle size={16} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};
