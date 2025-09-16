import { LinkMenuItem } from "components";
import { MenuItem, MenuItems } from "@headlessui/react";
import type { DropdownProfilProps } from "./DropdownProfilProps";



export function DropdownProfil({ header, menuItems }: DropdownProfilProps) {
    return (
        <MenuItems
            className="mt-8 -ml-7 outline-none focus:outline-none border border-gray-200 w-[260px] rounded-2xl p-3 flex flex-col gap-1"
            anchor="bottom"
        >
            {header}

            {menuItems.map((item) => (
                <MenuItem>
                    <LinkMenuItem
                        icon={item.icon}
                        label={item.label}
                        url={item.url}
                        onClick={item.onClick}
                    ></LinkMenuItem>
                </MenuItem>
            ))}
        </MenuItems>
    );
}
