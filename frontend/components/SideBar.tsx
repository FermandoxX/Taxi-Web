import { LinkMenuItem } from "components";
import type { MenuItemConfig } from "~/types";

interface SideBarProps {
  sideBarItems: MenuItemConfig[];
}

export function SideBar({ sideBarItems }: SideBarProps) {
  return (
    <div className="border border-gray-200 w-85 h-full pt-8 pl-5 pr-5 flex flex-col gap-5">
      <div className="flex items-center">
        <img src="../../public/assets/images/icon/logo.svg"></img>
      </div>

      <div>
        <span className="text-xs text-gray-400 font-medium">MENU</span>

        <div className="flex flex-col mt-5 gap-3">
          {sideBarItems.map((item) => (
            <LinkMenuItem
              icon={item.icon}
              label={item.label}
              url={item.url}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
