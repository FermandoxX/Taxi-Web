import { BsFillCarFrontFill, BsFillPersonVcardFill } from "react-icons/bs";
import {
  FaMoneyBillTrendUp,
  FaPersonWalkingLuggage,
  FaTaxi,
} from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import type { MenuItemConfig } from "~/types";

export const sideBarItems = [
  {
    icon: <IoPersonSharp size={21} className="text-gray-500" />,
    label: "Manage Admins",
    url: "/admin",
  },
  {
    icon: <FaPersonWalkingLuggage size={22} className="text-gray-500" />,
    label: "Manage Riders",
    url: "/sign-in",
  },
  {
    icon: <BsFillCarFrontFill size={22} className="text-gray-500" />,
    label: "Manage Car",
    url: "/sign-in",
  },
  {
    icon: <BsFillPersonVcardFill size={21} className="text-gray-500" />,
    label: "Manage Drivers",
    childrens: [
      { label: "Check License", url: "/sign-in" },
      { label: "Manage Users", url: "/sign-in" },
    ],
  },
  {
    icon: <FaTaxi size={22} className="text-gray-500" />,
    label: "Rides Management",
    url: "/sign-in",
  },
  {
    icon: <FaMoneyBillTrendUp size={21} className="text-gray-500" />,
    label: "Earnings Report",
    url: "/profile",
  },
] as MenuItemConfig[];
