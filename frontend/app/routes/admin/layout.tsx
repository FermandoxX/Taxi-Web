import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import { Navigate } from "react-router-dom";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { toastNotification } from "~/utils/helpers";

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
                <div className="border border-red-400 w-85 h-full">
                    
                </div>
                <div className="flex flex-col w-full">
                    <div className="border border-red-400 w-full h-17">

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
