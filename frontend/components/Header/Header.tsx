import { DropdownProfil, IconButton, InputField } from "components";
import { BsBell } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { IoMoonOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu, MenuButton } from "@headlessui/react";
import { menuItems } from "~/constants/profileDropDown";

const dropDownHeader = (
  <div>
    <span className="block text-sm font-medium text-gray-700">
      Fermand Minaj
    </span>
    <span className="block text-xs font-medium text-gray-500 dark:text-gray-400">
      minajfermando871@gmail.com
    </span>
  </div>
);

export function Header() {
  return (
    <div className="flex flex-row items-center justify-between w-full pl-5 bg-white border border-t-0 border-l-0 border-r-0 border-b-gray-200 h-21">
      <div className="flex flex-row items-center gap-5 w-120">
        <IconButton
          className="rounded-md"
          icon={<RxHamburgerMenu size={20} className="text-gray-700" />}
        />

        <InputField
          name="email"
          type="text"
          placeholder="Search or type command..."
          icon={<CiSearch size={23} />}
          className="w-full"
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
            className="object-cover w-12 h-12 border border-gray-200 rounded-full"
          ></img>
          <Menu>
            <MenuButton className="flex items-center gap-2 text-sm font-medium border-none outline-none cursor-pointer focus:outline-none">
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
