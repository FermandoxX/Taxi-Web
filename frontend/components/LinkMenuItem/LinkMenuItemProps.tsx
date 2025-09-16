import type { ReactNode } from "react";

export interface LinkMenuItemProps {
    icon?: ReactNode;
    label: string;
    url: string;
    onClick?: () => void;
}
