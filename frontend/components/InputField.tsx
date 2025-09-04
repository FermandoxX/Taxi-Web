import type { UseFormRegister } from "react-hook-form";
import type { ChangeEvent, JSX } from "react";

interface InputFieldProps {
    icon?: JSX.Element;
    iconClassName?: string;
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
    iconClassName,
    type = "text",
    name,
    value,
    placeholder,
    onChange,
    className,
    register,
    error = ''
}: InputFieldProps) {

    return (
            <div className="flex flex-col justify-center items-center relative">
                {icon && (
                <span className={`absolute text-xl text-gray-500 -translate-y-1/2 ${iconClassName ? iconClassName : "left-3 top-5"}`}>
                    {icon}
                </span>
                )}

                <input
                    {...(register ? register(name) : {})}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className={`border ${error ? "border-red-500" : "border-gray-300"} h-10 rounded-lg pl-11 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200` + ` ${className}`}
                    placeholder={placeholder}
                />

                {error && <span className="block w-full ml-4 text-red-500 break-words">
                    {error}
                </span>}
            </div>
    )
}
