import type { ButtonMenuItemProps } from "./ButtonMenuItemProps";

export function ButtonMenuItem({ icon, label, onClick }: ButtonMenuItemProps) {
    return (
        <button
            onClick={onClick}
            className="w-full flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer"
        >
            {icon}
            <span className="block text-sm font-medium">{label}</span>
        </button>
    );
}
