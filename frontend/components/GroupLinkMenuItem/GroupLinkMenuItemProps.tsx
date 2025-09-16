import type { ReactNode } from "react";

export interface ChildrenLink {
    label: string;
    url: string;
}

export interface GroupLinkMenuItemProps {
    icon?: ReactNode;
    label: string;
    childrens: ChildrenLink[];
}
