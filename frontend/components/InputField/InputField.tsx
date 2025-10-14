import type { InputFieldProps } from "./InputFieldProps";

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
  label,
  showError = true,
}: InputFieldProps) {
  return (
    <div className="relative flex flex-col items-center justify-center w-full">
      {icon && (
        <span
          className={`absolute text-xl text-gray-500 -translate-y-1/2 ${iconClassName ? iconClassName : "left-3 top-11"}`}
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
            {placeholder || "Choose file"}
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
        <div className="w-full">
          <label className="text-sm font-medium text-gray-700">{label}</label>
          <input
            {...(register && register(name))}
            type={type}
            name={name}
            onChange={onChange}
            className={`border ${error ? "border-red-500" : "border-gray-300"} h-10 rounded-lg ${icon ? "pl-11" : "pl-5"} placeholder-gray-400 placeholder:text-sm placeholder:font-medium outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${className}`}
            placeholder={placeholder}
          />
        </div>
      )}

      {showError && (
        <div className="min-h-[20px] w-full ml-4">
          {error && (
            <span className="block text-red-500 text-sm break-words">
              {error}
            </span>
          )}
        </div>
      )}
    </div>
  );
}
