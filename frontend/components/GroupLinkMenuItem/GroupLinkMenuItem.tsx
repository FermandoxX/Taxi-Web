import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router";
import type { GroupLinkMenuItemProps } from "./GroupLinkMenuItemProps";




export function GroupLinkMenuItem({
    icon,
    label,
    childrens,
}: GroupLinkMenuItemProps) {
    const [open, setOpen] = useState(false);

    return (
        <Disclosure>
            <DisclosureButton className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer" onClick={() => setOpen(!open)}>
                {icon}
                <span className="block text-sm font-medium">{label}</span>
                {open ? <IoIosArrowDown /> : <IoIosArrowForward />
                }

            </DisclosureButton>
            {childrens.map((children, index) => (
                <DisclosurePanel key={index} className="text-gray-500 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer ml-5">
                    <Link to={children.url} className="flex items-center rounded-md">
                        <span className="block text-sm font-medium">{children.label}</span>
                    </Link>
                </DisclosurePanel>
            ))}
        </Disclosure>
    );
}
