import type { ReactNode } from "react"
import { Link } from "react-router";

interface FormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    children: ReactNode;
    className?: string;
    buttonLabel: string;
    buttonName: string;
    buttonClassName?: string;
    linkLabel?: string;
    linkTo?: string;
    linkClassName?: string;
    header?: string;
}

export function Form({ onSubmit, children, className ="", buttonLabel, buttonClassName, buttonName, linkLabel, linkTo, linkClassName, header = ''}: FormProps) {
  return (
    <form onSubmit={onSubmit} className={`flex flex-col bg-white p-5 border border-gray-200 rounded-xl gap-10 ${className}`}>
        <div className="text-base font-medium text-gray-80">
          {header}
        </div>  
        {children}
        <div className="flex flex-col justify-center items-center gap-3">
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
