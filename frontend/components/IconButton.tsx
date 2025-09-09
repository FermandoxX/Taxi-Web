import type { JSX } from "react";

interface IconButton {
    icon: JSX.Element;
}

export function IconButton({icon}: IconButton) {
    return (
        <button className="border border-gray-300 p-3 rounded-4xl cursor-pointer">
            {icon}
        </button>            
    )
}
