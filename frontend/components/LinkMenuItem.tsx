import type { JSX } from "react";
import { Link } from "react-router";
import { object } from "zod";
import { ACCESS_TOKEN } from "~/constants/localStorage";
import { removeFromLocalStorage } from "~/utils/helpers";

interface LinkMenuItem {
    icon: JSX.Element,
    label: string,
    url: string,
    clearLocalService?: object
}

export function LinkMenuItem({icon, label, url, clearLocalService}: LinkMenuItem) {

    removeFromLocalStorage(clearLocalService);
    
    return (
        <Link to={url} className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md">
            {icon}
            <span className="text-sm block font-medium">{label}</span>
        </Link>          
    )
}
