import { IconButton, InputField } from "components";
import { BsBell } from "react-icons/bs";
import { CiLogout, CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { DropdownProfil } from "./DropdownProfil";
import { Menu, MenuButton } from "@headlessui/react";
import { LuCircleUserRound } from "react-icons/lu";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import type { MenuItemConfig } from "~/types";

export function Header() {
  const menuItems = [
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
        localStorage.removeItem(ACCESS_TOKEN);
      },
    },
  ] as MenuItemConfig[];

  const dropDownHeader = (
    <div>
      <span className="text-sm block font-medium text-gray-700">
        Fermand Minaj
      </span>
      <span className="text-xs block font-medium text-gray-500 dark:text-gray-400">
        minajfermando871@gmail.com
      </span>
    </div>
  );

  return (
    <div className="border border-b-gray-200 border-l-0 border-t-0 border-r-0 w-full h-21 bg-white flex flex-row items-center pl-5 justify-between">
      <div className="flex flex-row items-center gap-5 w-200">
        <IconButton
          className="rounded-md"
          icon={<RxHamburgerMenu size={20} className="text-gray-700" />}
        />

        <InputField
          name="email"
          type="text"
          placeholder="Search or type command..."
          icon={<CiSearch size={23} />}
          className="h-11 w-[420px]"
          iconClassName="left-3 top-5.5"
        />
      </div>

      <div className="flex gap-3 mr-10">
        <IconButton
          className="rounded-4xl"
          icon={<IoMoonOutline size={20} className="text-gray-700" />}
        />

        <IconButton
          className="rounded-4xl"
          icon={<BsBell size={20} className="text-gray-700" />}
        />

        <div className="flex items-center gap-2">
          <img
            src="../../public/assets/images/profile/profile_pic.png"
            className="w-12 h-12 rounded-full border border-gray-200 object-cover"
          ></img>
          <Menu>
            <MenuButton className="border-none outline-none focus:outline-none text-sm font-medium flex items-center gap-2 cursor-pointer">
              Fermando Minaj
              <IoIosArrowDown />
            </MenuButton>
            <DropdownProfil header={dropDownHeader} menuItems={menuItems} />
          </Menu>
        </div>
      </div>
    </div>
  );
}
