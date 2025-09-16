import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import type { ReactNode } from "react";
import { Link } from "react-router";

interface ChildrenLink {
  label: string;
  url: string;
}

interface GroupLinkMenuItemProps {
  icon?: ReactNode;
  label: string;
  childrens: ChildrenLink[];
}

export function GroupLinkMenuItem({
  icon,
  label,
  childrens,
}: GroupLinkMenuItemProps) {
  return (
    <Disclosure>
      <DisclosureButton className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer">
        {icon}
        <span className="text-sm block font-medium">{label}</span>
      </DisclosureButton>
      {childrens.map((children) => (
        <DisclosurePanel className="text-gray-500 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer ml-5">
          <Link to={children.url} className="flex items-center rounded-md" />
          <span className="text-sm block font-medium">{children.label}</span>
        </DisclosurePanel>
      ))}
    </Disclosure>
  );
}
