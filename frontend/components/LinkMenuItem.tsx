import type { JSX } from "react";
import { Link } from "react-router";

interface LinkMenuItem {
    icon: JSX.Element,
    label: string,
    url: string,
    onClick?: () => void,
}

export function LinkMenuItem({icon, label, url, onClick}: LinkMenuItem) {

    return (
        <Link to={url} className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md" onClick={onClick}>
            {icon}
            <span className="text-sm block font-medium">{label}</span>
        </Link>          
    )
}
