import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { Header, LinkMenuItem } from "components";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillPersonVcardFill } from "react-icons/bs";
import { FaMoneyBillTrendUp, FaPersonWalkingLuggage } from "react-icons/fa6";
import { FaTaxi } from "react-icons/fa";
import type { MenuItemConfig } from "~/types";
import { SideBar } from "components/SideBar";

function Layout() {
  const token = localStorage.getItem(ACCESS_TOKEN);
  const [accessDenied, setAccessDenied] = useState(false);

  useEffect(() => {
    if (!token) {
      setAccessDenied(true);
    }
  }, [token]);

  if (accessDenied) {
    return <Navigate to="/sign-in" replace />;
  }

  const sideBarItems = [
    {
      icon: <IoPersonSharp size={21} className="text-gray-500" />,
      label: "Manage Admins",
      url: "/sign-in",
    },
    {
      icon: <FaPersonWalkingLuggage size={22} className="text-gray-500" />,
      label: "Manage Riders",
      url: "/sign-in",
    },
    {
      icon: <BsFillPersonVcardFill size={21} className="text-gray-500" />,
      label: "Manage Drivers",
      url: "/profile",
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

  return (
    <main className="h-screen">
      <div className="flex h-full">
        <SideBar sideBarItems={sideBarItems} />

        <div className="flex flex-col w-full">
          <Header />
          <div className="bg-[#f9fafb] w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
