import { Link } from "react-router";
import type { FormProps } from "./FormProps";

export function Form({ onSubmit, children, className = "", buttonLabel, buttonClassName, buttonName, linkLabel, linkTo, linkClassName, header = '' }: FormProps) {
    return (
        <form onSubmit={onSubmit} className={`flex flex-col bg-white p-5 border border-gray-200 rounded-xl gap-10 ${className}`}>
            <div className="text-base font-medium text-gray-80">
                {header}
            </div>
            {children}
            <div className="flex flex-col items-center justify-center gap-3">
                <button className={`w-full cursor-pointer bg-[#465fff] text-white h-12 rounded-lg font-bold ${buttonClassName}`} name={buttonName}>
                    {buttonLabel}
                </button>
                {linkLabel && linkTo && (
                    <Link to={linkTo} className={`text-[14px] text-[#666666] hover:text-[#465fff] transition-colors duration-300` + linkClassName}>
                        {linkLabel}
                    </Link>
                )}
            </div>
        </form>
    )
}
