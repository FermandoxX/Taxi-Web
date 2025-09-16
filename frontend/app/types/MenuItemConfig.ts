import type { ReactNode } from "react";

interface ChildrenLink {
  label: string;
  url: string;
}

export interface MenuItemConfig {
  icon: ReactNode;
  label: string;
  url: string;
  onClick: (() => void) | undefined;
  childrens?: ChildrenLink[];
}
