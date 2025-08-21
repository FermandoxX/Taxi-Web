import type { ReactNode } from "react"
import { Link } from "react-router";

interface FormProps {
    onSubmit: React.FormEventHandler<HTMLFormElement>;
    children: ReactNode;
    className?: string;
    buttonLabel: string;
    buttonName: string;
    buttonClassName: string;
    linkLabel?: string;
    linkTo?: string;
    linkClassName?: string;
}

export function Form({ onSubmit, children, className ="", buttonLabel, buttonClassName, buttonName, linkLabel, linkTo, linkClassName}: FormProps) {
  return (
    <form
        onSubmit={onSubmit}
        className={`flex flex-col ${className}`}
    >
        {children}
    <div className="flex flex-col justify-center items-center gap-3">
        <button className={`cursor-pointer ${buttonClassName}`} name={buttonName}>
            {buttonLabel}
        </button>
        {linkLabel && linkTo && (
          <Link to={linkTo} className={linkClassName}>
            {linkLabel}
          </Link>
        )}
    </div>
    </form>
  )
}
