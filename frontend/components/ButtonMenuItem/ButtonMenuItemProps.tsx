import type { JSX } from "react";


export interface ButtonMenuItemProps {
    icon: JSX.Element;
    label: string;
    onClick?: () => void;
}
