import type { ReactNode } from "react";

export interface MenuItemConfig {
  icon: ReactNode;
  label: string;
  url: string;
  onClick: (() => void) | undefined;
}
