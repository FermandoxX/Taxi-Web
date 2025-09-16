import type { JSX } from "react";
import type { IconButtonProps } from "./IconButtonProps";



export function IconButton({ icon, className }: IconButtonProps) {
    return (
        <button
            className={`border border-gray-300 p-3 cursor-pointer ${className}`}
        >
            {icon}
        </button>
    );
}
