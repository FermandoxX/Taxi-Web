import { Link } from "react-router";
import type { LinkMenuItemProps } from "./LinkMenuItemProps";

export function LinkMenuItem({ icon, label, url, onClick }: LinkMenuItemProps) {
    return (
        <Link
            to={url}
            className="flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md"
            onClick={onClick}
        >
            {icon}
            <span className="block text-sm font-medium">{label}</span>
        </Link>
    );
}
