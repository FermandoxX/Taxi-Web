import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { toastNotification } from "~/utils/helpers";
import { RxHamburgerMenu } from "react-icons/rx";
import { InputField } from "components";
import { CiSearch } from "react-icons/ci";


function Layout() {
    const token = localStorage.getItem(ACCESS_TOKEN);
    const [accessDenied, setAccessDenied] = useState(false);

    useEffect(() => {
        if (!token) {
            toastNotification('Access Denied', 'error');
            setAccessDenied(true);
        }
    }, [token]);

    if (accessDenied) {
        return <Navigate to="/sign-in" replace />;
    }

    return (
        <main className="h-screen">
            <div className="flex h-full">
                <div className="border border-yellow-400 w-85 h-full">
                    
                </div>
                <div className="flex flex-col w-full">
                    <div className="border border-gray-200 w-full h-21 bg-white flex flex-row items-center pl-5">
                        <div className="flex flex-row items-center gap-5 w-200">
                            <button className="border text-gray-500 border-gray-200 h-11 w-11 rounded-lg flex items-center justify-center">
                                <RxHamburgerMenu size={20} />
                            </button>

                            <InputField
                                name="email"
                                type="text"
                                placeholder="Search or type command..."
                                icon={<CiSearch  size={23} />}
                                className="h-11 w-[420px]"
                                iconClassName="left-3 top-5.5"
                            />
                        </div>
                    </div>

                    <div className="bg-[#f9fafb] w-full h-full">
                        <Outlet />
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Layout
