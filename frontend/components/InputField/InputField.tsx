import type { InputFieldProps } from "./InputFieldProps";
import { useEffect, useState } from "react";

export function InputField({
  icon,
  iconClassName,
  type = "text",
  name,
  placeholder,
  onChange,
  className,
  register,
  error = "",
}: InputFieldProps) {
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
    onChange && onChange(e);
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {icon && (
        <span
          className={`absolute text-xl text-gray-500 -translate-y-1/2 ${iconClassName ? iconClassName : "left-3 top-5"}`}
        >
          {icon}
        </span>
      )}

      {type === "file" ? (
        <label
          htmlFor={name}
          className={`flex items-center justify-center border ${error ? "border-red-500" : "border-gray-300"} h-10 rounded-lg px-4 text-gray-700 cursor-pointer hover:border-blue-400 focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-200 ${className}`}
        >
          <span className="text-gray-400 text-sm font-medium">
            {fileName || placeholder || "Choose file"}
          </span>
          <input
            {...(register ? register(name) : {})}
            id={name}
            type="file"
            accept="image/*"
            name={name}
            className="hidden"
          />
        </label>
      ) : (
        <input
          {...(register && register(name))}
          type={type}
          name={name}
          onChange={onChange}
          className={`border ${error ? "border-red-500" : "border-gray-300"} h-10 rounded-lg ${icon ? "pl-11" : "pl-5"} placeholder-gray-400 placeholder:text-sm placeholder:font-medium outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${className}`}
          placeholder={placeholder}
        />
      )}

      {error && (
        <span className="block w-full ml-4 text-red-500 break-words">
          {error}
        </span>
      )}
    </div>
  );
}
function setValue(name: string, value: string) {
  throw new Error("Function not implemented.");
}
