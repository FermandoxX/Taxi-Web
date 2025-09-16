import type { InputFieldProps } from "./InputFieldProps";


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
        <div className="relative flex flex-col items-center justify-center">
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
                className={`border ${error ? "border-red-500" : "border-gray-300"} h-10 rounded-lg pl-11 placeholder-gray-400 placeholder:text-sm placeholder:font-medium outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-200` + ` ${className}`}
                placeholder={placeholder}
            />

            {error && <span className="block w-full ml-4 text-red-500 break-words">
                {error}
            </span>}
        </div>
    )
}
