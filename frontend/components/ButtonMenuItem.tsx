import type { JSX } from "react";
import { Link } from "react-router";

interface ButtonMenuItemProps {
  icon: JSX.Element;
  label: string;
  onClick?: () => void;
}

export function ButtonMenuItem({ icon, label, onClick }: ButtonMenuItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center gap-3 hover:bg-[#ececec] hover:text-gray-700 p-2 rounded-md cursor-pointer"
    >
      {icon}
      <span className="text-sm block font-medium">{label}</span>
    </button>
  );
}
