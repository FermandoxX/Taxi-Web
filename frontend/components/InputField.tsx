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

    const defaultStyle = `border ${error ? "border-red-500" : "border-gray-300"} bg-[#e6e6e6] h-12 w-70 rounded-3xl pl-11 placeholder:font-semibold placeholder:text-[#999999]`


    return (
        <div className="relative">
            {icon && (
                <span className="absolute text-xl text-gray-500 -translate-y-1/2 left-4 top-6">
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
                    className={className ? defaultStyle + ` ${className}` : defaultStyle}
                    placeholder={placeholder}
                />
                {error && <span className="block w-full ml-4 text-red-500 break-words">
                    {error}
                </span>}
            </div>
        </div>
    )
}
