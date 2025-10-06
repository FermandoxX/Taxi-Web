import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { Header, SideBar } from "components";
import { sideBarItems } from "~/constants/sideBar";

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

  return (
    <main className="h-screen">
      <div className="flex h-full">
        <SideBar sideBarItems={sideBarItems} />

        <div className="flex flex-col w-full">
          <Header />
          <div className="bg-[#f9fafb] w-[97%] h-full p-[3%] overflow-auto">
            <div className="min-w-0 min-h-0 border border-gray-200 rounded-2xl bg-white p-5">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Layout;
