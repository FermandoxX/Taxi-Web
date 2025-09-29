import { CiLogout } from "react-icons/ci";
import { LuCircleUserRound } from "react-icons/lu";
import LocalStorageService from "~/service/localStorageService";
import type { MenuItemConfig } from "~/types";

export const menuItems = [
  {
    icon: <LuCircleUserRound size={21} className="text-gray-500" />,
    label: "Edit Profile",
    url: "/profile",
  },
  {
    icon: <CiLogout size={22} />,
    label: "Log Out",
    url: "/sign-in",
    onClick: () => {
      LocalStorageService.clear();
    },
  },
] as MenuItemConfig[];
