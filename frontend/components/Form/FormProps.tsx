import type { ReactNode } from "react";

export interface FormProps {
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
