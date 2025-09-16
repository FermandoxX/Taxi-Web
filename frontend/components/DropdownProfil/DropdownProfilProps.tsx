import type { ReactNode } from "react";
import type { MenuItemConfig } from "~/types";

export interface DropdownProfilProps {
    header?: ReactNode;
    menuItems: MenuItemConfig[];
}
