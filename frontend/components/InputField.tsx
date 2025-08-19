import type { UseFormRegister } from "react-hook-form";
import type { ChangeEvent, JSX } from "react";

interface InputFieldProps {
  icon?: JSX.Element;
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  register?: UseFormRegister<any>;
  error?: string; 
}

export function InputField({
  icon,
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  className,
  register,
  error = ''
}: InputFieldProps) {

  const defaultStyle = error 
                      ? 'border border-red-500 bg-[#e6e6e6] h-12 w-70 rounded-3xl pl-11 placeholder:font-semibold placeholder:text-[#999999]'
                      : 'border border-gray-300 bg-[#e6e6e6] h-12 w-70 rounded-3xl pl-11 placeholder:font-semibold placeholder:text-[#999999]';
  
  return (
    <div className="relative">
      {icon && (
        <span className="absolute left-4 top-6 -translate-y-1/2 text-gray-500 text-xl">
          {icon}
        </span>
      )}
      <div className="flex flex-col w-[274px]">
        <input
          {...(register ? register(name) : {})}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className={className ? `${className}` : defaultStyle}
          placeholder={placeholder}
        />
        {error && <span className="text-red-500 ml-4 block w-full break-words">
          {error}
        </span> }
      </div>
    </div>
  )
}